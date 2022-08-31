export const Modal = {
  modalButton: document.querySelector('.close'),
  modal: document.querySelector('.modal-wrapper'),
  imcResultH2: document.querySelector('.modal-wrapper span'),

  open() {
    this.modal.classList.add('open')
  },
  close() {
    this.modal.classList.remove('open')
  }
}
function HandleClose() {
  Modal.close()
}
Modal.modalButton.addEventListener('click', HandleClose)
window.addEventListener('keydown', event => {
  event.key === 'Escape' ? Modal.close() : undefined
})
