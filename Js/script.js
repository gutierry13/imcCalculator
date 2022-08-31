import { Modal } from './modal.js'
import { alertError } from './alertError.js'
const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const button = document.querySelector('form button')

function numberCheck(value) {
  return isNaN(value) || value == ''
}

function handleCalculator(event) {
  event.preventDefault()
  const numberWeight = Number(weight.value)
  const numberHeight = Number(height.value)
  const imc = numberWeight / (numberHeight / 100) ** 2
  if (!numberCheck(imc)) {
    Modal.open()
    Modal.imcResultH2.innerText = `Seu IMC é de ${imc.toFixed(2)}`
  } else {
    alertError.show()
    setTimeout(() => {
      alertError.hidden()
    }, 1500)
    setTimeout(() => {
      alertError.removeClasses()
    }, 2000)
  }
}
button.addEventListener('click', handleCalculator)
