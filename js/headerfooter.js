// headerfooter.js

class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
    `
  }
}

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <p>&copy;2024</p>
      <p>Tanaka Productions</p>
    `
  }
}

customElements.define('js-header-content', CustomHeader)
customElements.define('js-footer-content', CustomFooter)


//
