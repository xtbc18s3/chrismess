const form = document.querySelector('form#flickForm')

const changeHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const flicksDiv = document.querySelector('#flicks')
  flicksDiv.innerHTML += '<p>' + f.flickName.value + '</p>'
}

form.addEventListener('submit', changeHeading)
