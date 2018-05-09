import CurrencyPrice from './CurrencyPrice'
import fromApiString from './fromApiString'
import toCurrencyFormat from './toCurrencyFormat'


export default class MarketCap {
  constructor ($ele) {
    this.$ele = $ele
    this.supply = Big(0)
    this.price = new CurrencyPrice()
  }

  init() {
    this.refreshSupply()
  }

  refreshSupply() {
    $.get('https://bit.blockpool.io/wallet/utilities/bpl/supply', (res) => {
      this.supply = Big(res.supply)
      
      this.updateDisplay()
    })
  }

  setCurrency(currency) {
    this.price = this.price.changeCurrency(currency)
    this.updateDisplay()
  }

  setPrice(price) {
    this.price = this.price.changePrice(price)
    this.updateDisplay()
  }

  updateDisplay() {
    var mcap = this.supply.times(this.price.price)
      , text = mcap.eq(0) ? '--' : toCurrencyFormat(mcap, this.price.currency)
    this.$ele.text(text)
  }
}