import { Modal } from './modal.js'
const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const button = document.querySelector('form button')
const alertError = document.querySelector('.alert-error')

function handleCalculator(event) {
  event.preventDefault()
  const numberWeight = Number(weight.value)
  const numberHeight = Number(height.value)
  const imc = numberWeight / (numberHeight / 100) ** 2
  if (isNaN(imc) === false) {
    Modal.open()
    Modal.imcResultH2.innerText = `Seu IMC é de ${imc.toFixed(2)}`
  } else {
    alertError.classList.add('show')
    setTimeout(() => {
      alertError.classList.add('close')
    }, 1500)
  }
}
button.addEventListener('click', handleCalculator)