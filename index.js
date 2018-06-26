const button = document.querySelector('button')

const changeHeading = function() {
  const heading = document.querySelector('h1')
  heading.textContent = 'Click!'
}

button.addEventListener('click', changeHeading)
