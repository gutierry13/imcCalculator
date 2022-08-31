import { Modal } from './modal.js'
import { alertError } from './alertError.js'
import { numberCheck, ImcCalculate } from './utils.js'
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const button = document.querySelector('form button')

function handleCalculator(event) {
  event.preventDefault()
  const imcResult = ImcCalculate(inputWeight, inputHeight)
  if (numberCheck(imcResult)) {
    alertError.execute()
    return
  }
  Modal.open()
  Modal.imcResultH2.innerText = `Seu IMC é de ${imcResult.toFixed(2)}`
  Modal.imcNumberMeaning(imcResult.toFixed(2))
  console.log(imcResult.toFixed(2))
}
button.addEventListener('click', handleCalculator)
