export const Modal = {
  modalButton: document.querySelector('.close'),
  modal: document.querySelector('.modal-wrapper'),
  imcResultH2: document.querySelector('.modal-wrapper span'),
  imcMeaning: document.querySelector('.modal-wrapper p'),
  open() {
    this.modal.classList.add('open')
  },
  close() {
    this.modal.classList.remove('open')
  },
  imcNumberMeaning(imcNumber) {
    let meaningResult
    imcNumber <= 18.5 ? (meaningResult = 'Magreza') : undefined
    imcNumber > 18.5 && imcNumber <= 24.9
      ? (meaningResult = 'Normal')
      : undefined
    imcNumber > 25.0 && imcNumber <= 29.9
      ? (meaningResult = 'Sobrepeso')
      : undefined
    imcNumber > 30.0 && imcNumber <= 39.9
      ? (meaningResult = 'Obesidade')
      : undefined
    imcNumber >= 40.0 ? (meaningResult = 'Obesidade Grave') : undefined
    this.imcMeaning.innerText = `Classificação: ${meaningResult}`
  }
}
function HandleClose() {
  Modal.close()
}
Modal.modalButton.addEventListener('click', HandleClose)
window.addEventListener('keydown', event => {
  event.key === 'Escape' ? Modal.close() : undefined
})
