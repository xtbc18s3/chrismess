const form = document.querySelector('form#flickForm')

const updateHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value

  const heading = document.querySelector('h1')
  heading.textContent = flickName
}

form.addEventListener('submit', updateHeading)
