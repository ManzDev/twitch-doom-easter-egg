import "@/components/BitmapLetter.js";

class BitmapFont extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        transform-origin: 100% 0;
        transform: scale(1.75);
        image-rendering: pixelated;
      }
    `;
  }

  connectedCallback() {
    this.updateText(this.getAttribute("text"));
  }

  updateText(text) {
    this.text = String(text);
    this.render();
  }

  getComponentsByLetter() {
    const lettersArray = this.text.split("");
    return lettersArray.map(letter => /* html */`<bitmap-letter letter="${letter}"></bitmap-letter>`).join("");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BitmapFont.styles}</style>
    ${this.getComponentsByLetter()}
    `;
  }
}

customElements.define("bitmap-font", BitmapFont);
