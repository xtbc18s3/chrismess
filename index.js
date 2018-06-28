class App {
  constructor() {
    this.load()
    this.list = document.querySelector('#flicks')

    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }

  save() {
    // store the flicks array in localStorage
    localStorage.setItem('flicks', JSON.stringify(this.flicks))
  }

  load() {
    // load flicks from localStorage
    const flicks = JSON.parse(localStorage.getItem('flicks'))
    this.flicks = flicks || []
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
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

  renderProperties(flick, item) {
    const div = document.createElement('div')
    div.classList.add('info')

    // get the list of properties
    const properties = Object.keys(flick)

    // loop over the properties
    properties.forEach((propertyName) => {
      // build a span, and append it to the div
      const span = this.renderProperty(propertyName, flick[propertyName])
      div.appendChild(span)
    })

    return div
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    // add all the properties
    const properties = this.renderProperties(flick, item)
    item.appendChild(properties)

    // add action buttons
    const actions = this.renderActionButtons(flick, item)
    item.appendChild(actions)

    return item
  }

  toggleFavorite(flick, item) {
    // update both the UI and the array
    flick.favorite = item.classList.toggle('fav')

    // update localStorage
    this.save()
  }

  removeFlick(flick, item) {
    // remove from the UI
    this.list.removeChild(item)

    // remove from the array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)

    // update localStorage
    this.save()
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
    this.save()
  }
}

const app = new App()
