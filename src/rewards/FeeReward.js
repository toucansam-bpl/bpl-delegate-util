import EventEmitter from 'wolfy87-eventemitter'

import fromApiString from '../fromApiString'
import makeApiRequest from '../util/makeApiRequest'
import toCryptoFormat from '../toCryptoFormat'


const blocksPerWeek = 4 * 60 * 24 * 2 //7


export default class FeeReward extends EventEmitter {
  constructor($feesValue) {
    super()

    this.$feesValue = $feesValue
    this.blockCount = 0
    this.feeAverage = Big(0)
    this.totalFees = Big(0)
  }

  init() {
    this.blockCount = 1
    this.totalFees = Big('0.00100862')

    this.setFeeAverage()

    this.calculateFeeAverage()
  }

  
  addTo(partialTotal) {
    return partialTotal.plus(this.feeAverage)
  }

  async calculateFeeAverage() {
    /*
    const necessaryRequestCount = blocksPerWeek / 100
    for (let i = 0; i < necessaryRequestCount; i += 1) {
      let response = await makeApiRequest('blocks', { limit: 100, offset: 100 * i })
      let blockFees = response.blocks.reduce((sum, block) => sum.plus(fromApiString(block.totalFee)), Big(0))
      this.blockCount += 100
      this.totalFees = this.totalFees.plus(blockFees)
      this.setFeeAverage()
    }
    */
  }

  setFeeAverage() {
    this.feeAverage = this.blockCount === 0
      ? Big(0)
      : this.totalFees.div(this.blockCount)

    this.$feesValue.text(toCryptoFormat(this.feeAverage))

    this.emit('reward.updated')
  }
}
