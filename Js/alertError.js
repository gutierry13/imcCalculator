export const alertError = {
  alertError: document.querySelector('.alert-error'),
  show() {
    this.alertError.classList.add('show')
  },
  hidden() {
    this.alertError.classList.add('hidden')
  },
  removeClasses() {
    this.alertError.classList.remove('hidden')
    this.alertError.classList.remove('show')
  },
  execute() {
    this.show()
    setTimeout(() => {
      this.hidden()
    }, 1500)
    setTimeout(() => {
      this.removeClasses()
    }, 2000)
  }
}
