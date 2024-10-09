// Web component file
// only need to run (not be imported by main.js)

const template = document.createElement('template');

template.innerHTML = `
  <footer>
    <p>&copy;2024 Tanaka Productions</p>
  </footer>
  `;

class wcFooterClass extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});

    let cloneFooter = template.content.cloneNode(true);
    shadowRoot.append(cloneFooter);
  }
}

window.customElements.define('footer-wc', wcFooterClass);
// <footer-wc></footer-wc>   name must have '-'
