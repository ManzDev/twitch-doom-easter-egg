const WIDTH = globalThis.innerWidth;
const HEIGHT = globalThis.innerHeight;

class CanvasScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      canvas {
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.canvas = this.shadowRoot.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;
  }

  shoot() {
    const size = 5 + ~~(Math.random() * 15);
    const x = (this.canvas.width / 2) - (size / 2);
    const y = (this.canvas.height / 2) - (size / 2);

    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CanvasScreen.styles}</style>
    <canvas></canvas>`;
  }
}

customElements.define("canvas-screen", CanvasScreen);
