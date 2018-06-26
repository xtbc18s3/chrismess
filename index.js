const form = document.querySelector('form#flickForm')

const updateHeading = function(ev) {
  ev.preventDefault()

  const heading = document.querySelector('h1')
  heading.textContent = 'Click!'
}

form.addEventListener('submit', updateHeading)
