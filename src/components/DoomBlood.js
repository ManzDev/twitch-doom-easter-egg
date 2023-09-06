const WIDTH = globalThis.innerWidth;
const HEIGHT = globalThis.innerHeight;
const TOTAL_DROPS = 200;
const TIMING_VALUES = ["linear", "ease-in", "ease-out", "ease-in-out"];
const COLORS = ["#830202", "#770101", "#6c0202"];

class DoomBlood extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        z-index: 5;
      }

      .container {
        display: flex;
      }

      .drop {
        width: var(--drop-width);
        height: var(--drop-height);
        background: #770101;
        border-bottom: 4px solid #330202;
        box-sizing: border-box;
        animation: dripping var(--time) var(--timing) forwards;
      }

      @keyframes dripping {
        to { height: ${HEIGHT}px }
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.generateBlood();
    setTimeout(() => this.exit(), 9000);
  }

  generateBlood() {
    const container = this.shadowRoot.querySelector(".container");
    const dropWidth = WIDTH / TOTAL_DROPS;

    for (let i = 0; i < TOTAL_DROPS; i++) {
      const drop = document.createElement("div");
      drop.classList.add("drop");
      const dropHeight = ~~(Math.random() * 25);
      const time = 5000 + ~~(Math.random() * 3000);
      const color = COLORS[~~(Math.random() * COLORS.length)];
      const r = ~~(Math.random() * TIMING_VALUES.length);
      const timing = TIMING_VALUES[r];
      drop.style.setProperty("--drop-width", `${dropWidth}px`);
      drop.style.setProperty("--drop-height", `${dropHeight}px`);
      drop.style.setProperty("--time", `${time}ms`);
      drop.style.setProperty("--timing", `${timing}`);
      drop.style.setProperty("--color", `${color}`);
      container.append(drop);
    }
  }

  exit() {
    document.body.style.overflow = "auto";
    this.remove();
    document.querySelector("doom-screen").exit();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DoomBlood.styles}</style>
    <div class="container">
    </div>`;
  }
}

customElements.define("doom-blood", DoomBlood);
