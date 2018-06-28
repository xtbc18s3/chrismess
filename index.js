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

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    // get the list of properties
    const properties = Object.keys(flick)

    // loop over each property
    properties.forEach((propertyName) => {
      // build a span
      const span = this.renderProperty(propertyName, flick[propertyName])
      item.appendChild(span)
    })

    // add a delete button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', () => this.removeFlick(item))
    item.appendChild(deleteButton)

    return item
  }

  removeFlick(item) {
    this.list.removeChild(item)
  }

  handleSubmit(ev) {
    const f = ev.target

    const flick = {
      name: f.flickName.value,
      chris: f.chrisName.value,
    }

    this.flicks.push(flick)

    const item = this.renderItem(flick)

    this.list.appendChild(item)

    f.reset()
    f.flickName.focus()
  }
}

const app = new App()
