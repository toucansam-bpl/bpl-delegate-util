import BlockRewardCalculator from './BlockRewardCalculator'
import BplBalance from './BplBalance'
import BplPrice from './BplPrice'
import CurrencySelection from './CurrencySelection'
import FeeReward from './rewards/FeeReward'
import FixedReward from './rewards/FixedReward'
import InterestReward from './rewards/InterestReward'
import MarketCap from './MarketCap'
import PriceResult from './PriceResult'
import toCryptoFormat from './toCryptoFormat'
import BplPriceStatus from './BplPriceStatus';


(function($) {
  var balance = new BplBalance($('#bpl-balance'))
    , blockReward = new BlockRewardCalculator($('#block-reward'))
    , bplPriceStatus = new BplPriceStatus($('#price-loading'), $('#price-load-date'), $('#user-entered-price'))
    , marketCap = new MarketCap($('#market-cap'))
    , price = new BplPrice($('#bpl-price'), $('#reset-price'), bplPriceStatus)
    , prices = new PriceResult($('#currency-value'), $('#reward-time-period .nav-link'))
    , feeReward = new FeeReward($('#fees-value'))
    , fixedReward = new FixedReward($('#fixed-reward-value'), $('#include-fixed-reward'))
    , interestReward = new InterestReward($('#interest-value'))
    , currencySelection = new CurrencySelection($('#selected-currency'))
  
  balance.on('bplBalance.changed', (bplBalance) => {
    interestReward.setBplBalance(bplBalance)
  })

  blockReward.on('blockRewardTotal.changed', (total) => {
    $('#total-value').text(toCryptoFormat(total))
    
    prices.setBplBalance(total)
  })
  
  price.on('price.changed', (price) => {
    prices.setPrice(price)
    marketCap.setPrice(price)
  })
  
  currencySelection.on('currency.changed', (currency) => {
    price.setCurrency(currency)
    prices.setCurrency(currency)
    marketCap.setCurrency(currency)
  })

  
  blockReward.addReward(interestReward)
  blockReward.addReward(feeReward)
  blockReward.addReward(fixedReward)

  balance.setBalance(50000)
  currencySelection.init()
  marketCap.init()
  price.init()
  prices.init()
  blockReward.init()
  feeReward.init()
  fixedReward.init()
})(jQuery)
