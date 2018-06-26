const button = document.querySelector('button')

const updateHeading = function() {
  const heading = document.querySelector('p.fancy')
  heading.textContent = 'Click!'
}

button.addEventListener('click', updateHeading)
