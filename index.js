class App {
  constructor() {
    this.flicks = []
    this.list = document.querySelector('#flicks')

    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    // get the list of properties
    const properties = Object.keys(flick)

    // loop over the properties
    properties.forEach((propertyName) => {
      // build a span, and append it to the list
      const span = this.renderProperty(propertyName, flick[propertyName])
      item.appendChild(span)
    })

    // add a delete button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    deleteButton
      .addEventListener(
        'click',
        (_ev) => this.removeFlick(flick)
      )
    item.appendChild(deleteButton)

    // add a favorite button
    const favButton = document.createElement('button')
    favButton.textContent = 'favorite'
    favButton
      .addEventListener(
        'click',
        (_ev) => this.toggleFavorite(flick)
      )
    item.appendChild(favButton)

    return item
  }

  toggleFavorite(flick) {
    flick.favorite = !flick.favorite
  }

  removeFlick(flick) {
    // grab the list item
    // (note: requires a polyfill in Internet Explorer)
    const item = ev.target.closest('.flick')

    // remove from the UI
    this.list.removeChild(item)

    // remove from the array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)
  }

  handleSubmit(ev) {
    const f = ev.target

    const flick = {
      name: f.flickName.value,
      chris: f.chrisName.value,
      favorite: false,
    }

    this.flicks.push(flick)

    const item = this.renderItem(flick)
    this.list.appendChild(item)

    f.reset()
    f.flickName.focus()
  }
}

const app = new App()
