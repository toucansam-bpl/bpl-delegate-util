import EventEmitter from 'wolfy87-eventemitter'

import toCryptoFormat from '../toCryptoFormat'


export default class FixedReward extends EventEmitter {
  constructor($fixedRewardValue, $isIncludingFixedReward) {
    super()

    this.$fixedRewardValue = $fixedRewardValue
    this.$isIncludingFixedReward = $isIncludingFixedReward

    this.fixed = Big(5)

    $isIncludingFixedReward.change(() => this.update())
  }

  init() {
    this.displayReward()
  }

  
  displayReward() {
    if (this.$isIncludingFixedReward.is(':checked')) {
      this.$fixedRewardValue.text(toCryptoFormat(this.fixed))
    } else {
      this.$fixedRewardValue.text('--')
    }
  }
  
  update() {
    this.displayReward()

    this.emit('reward.updated')
  }

  addTo(partialTotal) {
    return this.$isIncludingFixedReward.is(':checked')
      ? partialTotal.plus(this.fixed)
      : partialTotal
  }
}
