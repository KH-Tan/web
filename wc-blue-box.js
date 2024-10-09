// Web components file
// only need to run (and not be imported)

const template = document.createElement('template');

template.innerHTML = `
  <div class="bb">
    <p>Cornflower Blue Box</p>
  </div>
  `;

class wcBlueBox extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode: 'closed'});

    const bbSheet = new CSSStyleSheet();
    bbSheet.replaceSync(`
      .bb {
        color: white;
        background-color: cornflowerblue;
        border-radius: 8px;
        padding: 1rem 3rem;
        margin-block: 1rem;
        font-size: 2rem;

        min-width: 320px;
      }
    `);

    let cloneBlueBox = template.content.cloneNode(true);
    this.root.adoptedStyleSheets = [bbSheet];
    this.root.append(cloneBlueBox);
  }
}

window.customElements.define('blue-box', wcBlueBox);
// <footer-wc></footer-wc>   name must have '-'
