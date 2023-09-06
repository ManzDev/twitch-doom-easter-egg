class DoomHero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .container {
        display: block;
        background: url(images/hero/manzdev.png);
        background-repeat: repeat;
        width: 95px;
        height: 120px;
        transform: translate(20px, 8px);
        animation: view 3s steps(3) alternate infinite;
      }

      :host([life="high"]) .container { background-position-y: 0px; }
      :host([life="god"]) .container { background-position-y: -120px; }
      :host([life="medium"]) .container { background-position-y: -240px; }
      :host([life="low"]) .container { background-position-y: -360px; }
      :host([life="dead"]) .container { background-position: -380px -360px!important; }

      :host(.shoot) .container {
        background-position-x: 190px!important;
      }

      @keyframes view {
        0% { background-position-x: 0; }
        100% { background-position-x: -285px; }
      }
    `;
  }

  setFace(text) {
    this.setAttribute("life", text);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DoomHero.styles}</style>
    <div class="container"></div>
    `;
  }
}

customElements.define("doom-hero", DoomHero);
