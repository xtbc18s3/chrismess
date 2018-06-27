const form = document.querySelector('form#flickForm')

const renderProperty = function(name, value) {
  const span = document.createElement('span')
  span.classList.add(name)
  span.textContent = value
  return span
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickSpan = renderProperty('name', f.flickName.value)
  const chrisSpan = renderProperty('chris', f.chrisName.value)

  const item = document.createElement('li')
  item.classList.add('flick')
  item.appendChild(flickSpan)
  item.appendChild(chrisSpan)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', handleSubmit)
