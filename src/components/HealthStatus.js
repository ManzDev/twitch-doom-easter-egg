const damageSound = new Audio("sounds/damage.ogg");

class HealthStatus extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      .container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  damage() {
    // Animation
    const container = this.shadowRoot.querySelector(".container");
    const keyframes = [
      { backgroundColor: "transparent" },
      { backgroundColor: "red" },
      { backgroundColor: "transparent" }
    ];
    const options = {
      duration: 50 + ~~(Math.random() * 200),
      easing: "ease",
      fill: "forwards",
      iterations: 1
    };
    container.animate(keyframes, options);
    // Sound
    damageSound.currentTime = 0;
    damageSound.play();

    const damage = 5 + ~~(Math.random() * 25);
    const event = new CustomEvent("DAMAGE", { composed: true, bubbles: true, detail: { damage } });
    this.dispatchEvent(event);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HealthStatus.styles}</style>
    <div class="container">
    </div>`;
  }
}

customElements.define("health-status", HealthStatus);
