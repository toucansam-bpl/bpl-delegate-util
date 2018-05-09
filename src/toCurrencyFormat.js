import currencies from './currencies'


export default function(amount, currencyAbbr) {
  var currency = currencies[currencyAbbr || 'USD']
    , inFormat = parseFloat(amount.toFixed(currency.digits))

  return accounting.formatMoney(inFormat, currency.symbol, currency.digits)
}
