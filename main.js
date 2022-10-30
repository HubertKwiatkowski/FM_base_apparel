const form = document.querySelector('form')
const input = document.getElementById('input')
const invalid = document.getElementById('invalid')
const errorIcon = document.getElementById('error-icon')


function EmailValidation(e) {
  const enteredEmail = input.value

  var mail_format = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(!enteredEmail.match(mail_format)) {
    form.style.boxShadow = '0px 0px 0px 2px var(--clr-primary-200) inset'
    errorIcon.style.visibility = 'visible'
    invalid.style.visibility = 'visible'
    e.preventDefault()
  }
}

form.addEventListener('submit', EmailValidation)