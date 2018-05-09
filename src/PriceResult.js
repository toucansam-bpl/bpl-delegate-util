import currencies from './currencies'
import CurrencyPrice from './CurrencyPrice';
import toCurrencyFormat from './toCurrencyFormat'


const interestPerBlock = Big('0.000005235866863')
const blocksPerDay = Big(4 * 60 * 24)
const blocksPerWeek = blocksPerDay.times(7)
const blocksPerMonth = blocksPerDay.times(30.41) // Average days per month in non-leap year
const millisecondsPerDay = 1000 * 60 * 60 * 24
const totalDelegateCount = 201


export default class PriceResult {
  constructor ($currencyValue, $timePeriod) {
    this.$currencyValue = $currencyValue
    this.$timePeriod = $timePeriod
    this.bplBalance = Big(0)
    this.currencyPrice = new CurrencyPrice()
    this.timePeriod = $timePeriod.filter('.active').data('time-period')

    this.$timePeriod.click((evt) => {
      evt.preventDefault()
      
      const $selectedLink = $(evt.target)
      $timePeriod.filter('.active').removeClass('active show')
      $selectedLink.addClass('active show')
      this.timePeriod = $selectedLink.data('time-period')
      this.displayTotals()
    })
  }
  
  init() {
    this.setBplBalance(Big(0))
  }

  getTimePeriodDays() {
    if (this.timePeriod === 'day') return blocksPerDay
    if (this.timePeriod === 'week') return blocksPerWeek
    if (this.timePeriod === 'month') return blocksPerMonth
    return Big((Date.UTC(2019, 0) - Date.now()) / millisecondsPerDay).times(blocksPerDay)
  }
  
  getValueForTimePeriod(price) {
    return price.times(this.bplBalance).times(this.getTimePeriodDays()).div(totalDelegateCount)
  }

  displayTotals() {
    const valueForTimePeriod = this.getValueForTimePeriod(this.currencyPrice.price)
    this.$currencyValue.text(toCurrencyFormat(valueForTimePeriod, this.currencyPrice.currency))
  }

  setBplBalance(bpl) {
    this.bplBalance = bpl
    this.displayTotals()
  }

  setPrice(price) {
    this.currencyPrice = this.currencyPrice.changePrice(price)
    this.displayTotals()
  }

  setCurrency(currency) {
    this.currencyPrice = this.currencyPrice.changeCurrency(currency)
    this.displayTotals()
  }
}
