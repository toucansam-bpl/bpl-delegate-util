import EventEmitter from 'wolfy87-eventemitter'


export default class BplPrice extends EventEmitter {
  constructor($price, $resetPrice, priceStatus) {
    super()

    this.$price = $price
    this.$resetPrice = $resetPrice
    this.enteredPrice = null
    this.prices = {
      'BTC': 0,
      'CNY': 0,
      'EUR': 0,
      'GBP': 0,
      'USD': 0,
    }
    this.priceStatus = priceStatus
    this.selectedCurrency = null

    this.$price.change(() => {
      this.enteredPrice = this.$price.val()
      this.updateCurrencyPrice()
    })
  
    this.$resetPrice.click(() => this.reset())
  }

  init() {
    this.priceStatus.setLoading()
    this.retrievePrices()
    setInterval(() => this.retrievePrices, 60000) // one minute
  }


  isUserDefined() {
    return this.enteredPrice !== null
  }

  reset() {
    this.enteredPrice = null
    this.updateCurrencyPrice()
  }

  retrievePrices() {
    if (!this.isUserDefined()) {
      this.priceStatus.setLoading()
    }

    $.get('https://min-api.cryptocompare.com/data/price?fsym=BPL&tsyms=BTC,USD,GBP,EUR,CNY', (res) => {
      this.prices = res

      if (!this.isUserDefined()) {
        this.updateCurrencyPrice()
      }
    })
  }

  setCurrency(currency) {
    this.selectedCurrency = currency
    this.updateCurrencyPrice()
  }

  updateCurrencyPrice() {
    let price = null
    
    if (this.isUserDefined()) {
      price = this.enteredPrice
      this.priceStatus.setUserDefined()
    } else {
      price = this.prices[this.selectedCurrency]
      this.priceStatus.setLoadDate()
    }

    this.$price.val(price)

    this.emit('price.changed', new Big(price))
  }
}
