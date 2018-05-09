import EventEmitter from 'wolfy87-eventemitter'

import toCryptoFormat from '../toCryptoFormat'


const interestPerBlock = Big('0.000005235866863')

export default class InterestReward extends EventEmitter {
  constructor($interestValue) {
    super()

    this.$interestValue = $interestValue
    this.interest = Big(0)
  }
  

  addTo(partialTotal) {
    return partialTotal.plus(this.interest)
  }

  setBplBalance(bplBalance) {
    this.interest = bplBalance.times(interestPerBlock)
    this.$interestValue.text(toCryptoFormat(this.interest))
    
    this.emit('reward.updated')
  }
}

