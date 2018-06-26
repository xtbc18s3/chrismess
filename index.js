const form = document.querySelector('form#flickForm')

const updateHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value

  const list = document.querySelector('#flicks')
  list.textContent += ' ' + flickName
}

form.addEventListener('submit', updateHeading)
