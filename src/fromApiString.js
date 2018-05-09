
export default function fromApiString(rawBplValue) {
  return Big(rawBplValue).div(100000000)
}
