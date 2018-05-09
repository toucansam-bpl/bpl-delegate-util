import EventEmitter from 'wolfy87-eventemitter'


export default class CurrencySelection extends EventEmitter {
  constructor($selectedCurrency) {
    super()

    this.$selectedCurrency = $selectedCurrency

    $selectedCurrency.change(() => this.emit('currency.changed', $selectedCurrency.val()))
  }
  
  init() {
    this.$selectedCurrency.val('USD').change()
  }
}
