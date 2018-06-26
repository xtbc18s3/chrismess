const form = document.querySelector('form#flickForm')

const changeHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const flicksDiv = document.querySelector('#flicks')
  flicksDiv.textContent += ' ' + f.flickName.value
}

form.addEventListener('submit', changeHeading)
