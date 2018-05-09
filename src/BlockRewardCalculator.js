import EventEmitter from 'wolfy87-eventemitter'

import toCryptoFormat from './toCryptoFormat'


export default class BlockRewardCalculator extends EventEmitter {
  constructor($blockReward) {
    super()

    this.$blockReward = $blockReward
    this.rewards = []
  }
  
  init() {
    this.calculateTotal()
  }


  calculateTotal() {
    var total = this.rewards.reduce((sum, reward) => {
      return reward.addTo(sum)
    }, Big(0))

    this.$blockReward.text(toCryptoFormat(total))
    this.emit('blockRewardTotal.changed', total)
  }
  
  addReward(reward) {
    this.rewards.push(reward)

    reward.on('reward.updated', () => this.calculateTotal())
  }
}
