const button = document.querySelector('button')

const changeHeading = function() {
  const heading = document.querySelector('p.fancy')
  heading.textContent = 'Click!'
}

button.addEventListener('click', changeHeading)
