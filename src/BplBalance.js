import EventEmitter from 'wolfy87-eventemitter'


export default class BplBalance extends EventEmitter {

  constructor($bplBalance) {
    super()

    this.$bplBalance = $bplBalance

    $bplBalance.change(() => this.emit('bplBalance.changed', Big($bplBalance.val())))
  }
  
  setBalance(bplBalance) {
    this.$bplBalance.val(bplBalance).change()
  }
}
