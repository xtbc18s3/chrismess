const form = document.querySelector('form#flickForm')

const changeHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value

  const flicksDiv = document.querySelector('#flicks')
  flicksDiv.innerHTML += `<p>${flickName}</p>`

  f.reset()
}

form.addEventListener('submit', changeHeading)
