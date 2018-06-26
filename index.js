const form = document.querySelector('form#flickForm')

const changeHeading = function(ev) {
  ev.preventDefault()
  const heading = document.querySelector('h1')
  heading.textContent = 'Click!'
}

form.addEventListener('submit', changeHeading)
