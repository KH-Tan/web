// Web components file
// only need to run (and not be imported)

const template = document.createElement('template');

template.innerHTML = `
  <style>
    /* @import url(); */

.tanaka-svg-logo-T {
  background-color: lightgray;
  color: whitesmoke;
  border: 1px solid silver;
  border-radius: 15%;
  width: 25px; height: 25px;

  .logo-T-text {
    font-family: serif;
    font-size: 96px;

    text-anchor: middle;
    dominant-baseline: central;

    fill: lightslategray;
    stroke: dimgray;
    stroke-width: 2;
  }
}
.tanaka-svg-logo-Text {
  background-color: lightgray;
  color: whitesmoke;
  border: 1px solid silver;
  border-radius: 15%;
  width: 25px; height: 25px;

  .logo-Text {
    font-family: serif;
    font-size: 16px;

    text-anchor: middle;
    dominant-baseline: central;

    fill: lightslategray;
    stroke: dimgray;
    stroke-width: 1;
  }
}



    footer {
      font-family: cursive;

      /* overrides :host :host()   */
      background-color: cornflowerblue;
      color: wheat;  

      padding-block: 0.75rem;
      margin-top: 1rem;
      font-size: 1.25rem;
      text-align: center;
    }
    /* for the shadow root */
    :host {
      display: block;   /* for background-color to display */
      background-color: blue;
      color: wheat;
    }
    :host(footer-wc) {
      display: block;
      background-color: lavender;
      color: red;
    }
    :host-context(body) {
      color: purple;
    }
    /*
    ::slotted() {}
    ::part() {} 
    */

  </style>

  <footer>
    <svg class="tanaka-svg-logo-T"
         viewBox="0 0 100 100" width="100" height="100">
      <text class="logo-T-text" x="50%" y="50%">T</text>
    </svg>
    <svg class="tanaka-svg-logo-Text"
         viewBox="0 0 100 100" width="100" height="100">
      <text class="logo-Text" x="50%" y="40%">Tanaka</text>
      <text class="logo-Text" x="50%" y="60%">Productions</text> 
    </svg>

    &copy;2024 Tanaka Productions  
  
    </footer>
  `;

class wcFooterClass extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'closed'});



    // const footerSheet = new CSSStyleSheet();
    // footerSheet.replaceSync(`
    //   .fsheet {
    //     color: white;
    //     background-color: cornflowerblue;

    //     padding-block: 0.75rem;
    //     margin-top: 1rem;

    //     font-size: 1.25rem;
    //     text-align: center;
    //   }
    // `);
    // shadowRoot.adoptedStyleSheets = [footerSheet];


    let cloneFooter = template.content.cloneNode(true);
    shadowRoot.append(cloneFooter);
  }


  // define the allowed attributes
  // static get observedAttributes() {
  //   return ['color'];
  // }
  // get color() {
  //   return this.getAttribute('color');
  // }
  // set color(value) {
  //   this.setAttribute('color',value);
  // }

  // attributeChangedCallback(attrName, oldVal, newVal) {
  //   if (attrName.toLowerCase() === 'color') {
  //     this.style.backgroundColor = newVal;
  //   }
  // }



}

window.customElements.define('footer-wc', wcFooterClass);
// <footer-wc></footer-wc>   name must have '-'
