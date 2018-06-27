const form = document.querySelector('form#flickForm')

const renderProperty = function(name, value) {
  const span = document.createElement('span')
  span.classList.add(name)
  span.textContent = value
  return span
}

const renderItem = function(flick) {
  const item = document.createElement('li')
  item.classList.add('flick')

  // get the list of properties
  const properties = Object.keys(flick)

  // loop over each property
  properties.forEach(function(propertyName) {
    // build a span
    const span = renderProperty(propertyName, flick[propertyName])
    item.appendChild(span)
  })

  return item
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flick = {
    name: f.flickName.value,
    chris: f.chrisName.value,
  }

  const item = renderItem(flick)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', handleSubmit)
