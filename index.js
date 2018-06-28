class App {
  constructor() {
    this.list = document.querySelector('#flicks')
    this.flicks = []

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

  renderProperties(flick) {
    const div = document.createElement('div')
    div.classList.add('info')

    // get the list of properties
    const properties = Object.keys(flick)

    // loop over each property
    properties.forEach((propertyName) => {
      // build a span
      const span = this.renderProperty(propertyName, flick[propertyName])
      div.appendChild(span)
    })

    return div
  }

  renderActionButtons(flick, item) {
    const actions = document.createElement('div')
    actions.classList.add('actions')

    // add a delete button
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('remove')
    deleteButton.innerHTML = '<i class="far fa-trash-alt" title="remove flick"></i>'
    deleteButton
      .addEventListener(
        'click',
        (_ev) => this.removeFlick(flick, item)
      )
    actions.appendChild(deleteButton)

    // add a favorite button
    const favButton = document.createElement('button')
    favButton.classList.add('fav')
    favButton.innerHTML = '<i class="fas fa-star" title="toggle favorite"></i>'
    favButton
      .addEventListener(
        'click',
        (_ev) => this.toggleFavorite(flick, item)
      )
    actions.appendChild(favButton)

    return actions
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    // add all the properties
    const properties = this.renderProperties(flick)
    item.appendChild(properties)

    // add action buttons
    const actions = this.renderActionButtons(flick, item)
    item.appendChild(actions)

    return item
  }

  toggleFavorite(flick, item) {
    // update the UI and the array
    flick.favorite = item.classList.toggle('fav')
  }

  removeFlick(flick, item) {
    // remove it from the UI
    this.list.removeChild(item)

    // remove it from the array
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
