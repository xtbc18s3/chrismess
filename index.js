const form = document.querySelector('form#flickForm')

const updateHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value

  const list = document.querySelector('#flicks')
  list.innerHTML += '<p>' + flickName + '</p>'
}

form.addEventListener('submit', updateHeading)
