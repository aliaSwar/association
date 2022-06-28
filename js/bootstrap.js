import * as bootstrap from 'bootstrap'

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})(bootstrap.Popover.prototype.show)
// Extend Tooltip to add color options
bootstrap.Tooltip.prototype.show = (original => {
  return function addTooltipColor() {
    if (this._config.toggle === 'tooltip') {
      if (this._element.getAttribute('data-color')) {
        const str = `tooltip-${this._element.getAttribute('data-color')}`
        this.getTipElement().classList.add(str)
      }
    }
    original.apply(this)
  }
})(bootstrap.Tooltip.prototype.show)

// Extend Popover to add color options
bootstrap.Popover.prototype.show = (original => {
  return function addPopoverColor() {
    if (this._config.toggle === 'popover') {
      if (this._element.getAttribute('data-color')) {
        const str = `popover-${this._element.getAttribute('data-color')}`
        this.getTipElement().classList.add(str)
      }
    }
    original.apply(this)
  }
})(bootstrap.Popover.prototype.show)

export { bootstrap }


