const form = document.querySelector('form#flickForm')

const changeHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value

  const list = document.querySelector('#flicks')
  list.innerHTML += `<li>${flickName}</li>`

  f.reset()
}

form.addEventListener('submit', changeHeading)
