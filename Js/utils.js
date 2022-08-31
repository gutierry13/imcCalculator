export function numberCheck(value) {
  return isNaN(value) || value == ''
}
export function ImcCalculate(w, h) {
  const weight = Number(w.value)
  const height = Number(h.value)
  return weight / (height / 100) ** 2
}
