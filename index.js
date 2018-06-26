const form = document.querySelector('form#flickForm')

const changeHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const heading = document.querySelector('h1')
  heading.textContent = f.flickName.value
}

form.addEventListener('submit', changeHeading)
