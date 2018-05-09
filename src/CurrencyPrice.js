
export default class CurrencyPrice {
  constructor(price, currency) {
    this.price = price || Big(0)
    this.currency = currency || 'USD'
  }

  changeCurrency(currency) {
    return new CurrencyPrice(this.price, currency)
  }

  changePrice(price) {
    return new CurrencyPrice(price, this.currency)
  }
}
