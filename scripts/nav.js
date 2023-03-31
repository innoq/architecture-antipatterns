// This awesome navigation is originally written by Joy Heron
class MenuToggle extends HTMLElement {
  connectedCallback() {
    if (!this.button) {
      return
    }

    this.hidden = false
    this.button.type = 'button'
    this.button.addEventListener('click', () => this.toggle())
    this.toggle(false)
  }

  toggle(expanded = !(this.button.getAttribute('aria-expanded') === 'true')) {
    let button = this.button
    button.setAttribute('aria-expanded', expanded)
    this.navbar.setAttribute('data-expanded', expanded)
  }

  get button() {
    return this.querySelector('button')
  }

  get navbar() {
    return this.closest('nav')
  }
}

class Submenu extends HTMLElement {
  connectedCallback() {
    let summary = this.querySelector('summary')
    let ul = this.querySelector('ul')
    if (!summary && !ul) {
      return
    }

    // With out method of animating the collapsing/expanding of the menu, it is
    // necessary to wrap the content of the menu in a `<div>`
    this.innerHTML = `<button type="button" aria-expanded="false">${summary.innerHTML}</button><div>${ul.outerHTML}</div>`
    this.button.addEventListener('click', () => this.toggle())

    this.navigation.addEventListener('submenu-toggle', (ev) => {
      if (ev.detail && ev.detail.expanded && ev.target !== this.button) {
        if (this.button.getAttribute('aria-expanded') === 'true') {
          this.toggle(false)
        }
      }
    })
    this.toggle(false)
  }

  toggle(expanded = !(this.button.getAttribute('aria-expanded') === 'true')) {
    let button = this.button
    button.setAttribute('aria-expanded', expanded)
    button.dispatchEvent(new CustomEvent('submenu-toggle', { detail: { expanded }, bubbles: true }))
  }

  get navigation() {
    return this.closest('ul')
  }

  get button() {
    return this.querySelector('button')
  }

  get div() {
    return this.querySelector('div')
  }

  get ul() {
    return this.querySelector('ul')
  }
}

customElements.define('sub-menu', Submenu)
customElements.define('menu-toggle', MenuToggle)
