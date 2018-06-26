const button = document.querySelector('button')

const updateHeading = function() {
  const heading = document.querySelector('h1')
  heading.textContent = 'Click!'
}

button.addEventListener('click', updateHeading)
