

export default class BplPriceStatus {
  constructor($priceLoading, $priceLoadDate, $userEnteredPrice) {
    this.$priceLoadDate = $priceLoadDate
    this.$priceLoading = $priceLoading
    this.$userEnteredPrice = $userEnteredPrice
  }

  setLoadDate() {
    this.$priceLoadDate.text(`As of ${new Date().toLocaleString()}`)
    this.$priceLoadDate.show()

    this.$priceLoading.hide()
    this.$userEnteredPrice.hide()
  }

  setLoading() {
    this.$priceLoading.show()

    this.$priceLoadDate.hide()
    this.$userEnteredPrice.hide()
  }

  setUserDefined() {
    this.$userEnteredPrice.show()

    this.$priceLoadDate.hide()
    this.$priceLoading.hide()
  }
}
