import "@/components/DoomHero.js";
import "@/components/DoomWeapon.js";
import "@/components/BitmapFont.js";
import "@/components/HealthStatus.js";

const WIDTH = globalThis.innerWidth;
const HEIGHT = globalThis.innerHeight;
const INITIAL_AMMO = 300 + ~~(Math.random() * 242);
const INITIAL_HEALTH = 100;

class DoomScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.ammo = INITIAL_AMMO;
    this.health = INITIAL_HEALTH;
    this.isShooting = false;
    this.outAmmo = false;
  }

  static get styles() {
    return /* css */`
      :host {
        --screen-width: ${WIDTH}px;
        --screen-height: ${HEIGHT}px;
      }

      .container {
        width: var(--screen-width);
        height: var(--screen-height);
        background: transparent;
      }

      .hud-container {
        width: 100%;
        height: 128px;
        background: url(images/hud/tile.png);
        background-repeat: repeat-x;
        position: absolute;
        bottom: 0;
      }

      .hud {
        width: 1280px;
        height: 100%;
        margin: auto;
        background: url(images/hud/bar.png);
        display: grid;
        grid-template-columns: 0.8fr 0.95fr 0.65fr 0.6fr 0.95fr 0.2fr 1.2fr;
      }

      .hud > div {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        margin-right: 20px;
      }

      .game {
        width: var(--screen-width);
        height: calc(var(--screen-height) - 128px);
        display: grid;
        justify-content: center;
        align-items: end;
      }

      .hud .arms {
        display: grid;
        grid-template-columns: repeat(3, 43px);
        grid-template-rows: 39px 39px 1fr;
        gap: 0 5px;
        margin: 4px;
        height: 100%;
      }

      .arms .w {
        font-family: EnterCommand;
        font-size: 48px;
        text-shadow: 0 0 4px #fff;
        color: #fff;
        justify-self: center;
      }

      .arms .w.disabled {
        color: #888;
        text-shadow: 0 0 4px #444;
      }

      canvas {
        cursor: none;
      }

      doom-weapon {
        position: absolute;
        left: calc(50% - 115px);
        top: -250px;
        z-index: 5;
      }
    `;
  }

  connectedCallback() {
    this.render();
    const game = this.shadowRoot.querySelector(".game");
    const canvas = this.shadowRoot.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    game.addEventListener("mousedown", () => this.burst());
    game.addEventListener("mouseup", () => this.unburst());
    const music = new Audio("music/doom-theme.ogg");
    music.play();
    setInterval(() => this.generateDamage(), 5000);
    document.addEventListener("DAMAGE", (ev) => {
      const { damage } = ev.detail;
      console.log({ damage, health: this.health });
      this.health = Math.max(0, this.health - damage);
      this.updateHealth();
    });
  }

  generateDamage() {
    const n = ~~(Math.random() * 5);

    if (n === 0) {
      const healthStatus = this.shadowRoot.querySelector("health-status");
      healthStatus.damage();
    }
  }

  burst() {
    if (this.ammo > 0) {
      const hero = this.shadowRoot.querySelector("doom-hero");
      const weapon = this.shadowRoot.querySelector("doom-weapon");
      weapon.burst();
      hero.classList.add("shoot");
      this.isShooting = true;
      this.timerAmmo = setInterval(() => this.burnAmmo(), 150);
    } else {
      this.isShooting = true;
      this.outAmmo = false;
      this.burnAmmo();
    }
  }

  burnAmmo() {
    if (this.isShooting && this.ammo > 0) {
      this.ammo--;
      this.updateAmmo();
    }
    if (this.isShooting && this.ammo === 0 && this.outAmmo === false) {
      this.outAmmo = true;
      const weapon = this.shadowRoot.querySelector("doom-weapon");
      weapon.burstOutAmmo();
    }
  }

  unburst() {
    const hero = this.shadowRoot.querySelector("doom-hero");
    const weapon = this.shadowRoot.querySelector("doom-weapon");
    weapon.unburst(this.ammo > 0);
    hero.classList.remove("shoot");
    this.isShooting = false;
    clearInterval(this.timerAmmo);
  }

  updateHealth() {
    const font = this.shadowRoot.querySelector(".health bitmap-font");

    if (this.health < 75) {
      const hero = this.shadowRoot.querySelector("doom-hero");
      const status = this.health > 25 ? "medium" : "low";
      hero.setAttribute("life", status);
    }

    if (this.health === 0) {
      this.kill();
    }

    font.updateText(`${this.health}%`);
  }

  kill() {

  }

  updateAmmo() {
    const font = this.shadowRoot.querySelector(".ammo bitmap-font");
    font.updateText(this.ammo);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DoomScreen.styles}</style>
    <div class="container">
      <div class="game">
        <canvas></canvas>
        <health-status></health-status>
      </div>
      <div class="hud-container">
        <doom-weapon type="chaingun"></doom-weapon>
        <div class="hud">
          <div class="ammo">
            <bitmap-font text="${INITIAL_AMMO}"></bitmap-font>
          </div>
          <div class="health">
            <bitmap-font text="${INITIAL_HEALTH}%"></bitmap-font>
          </div>
          <div class="arms">
            <div class="w w1 disabled">1</div>
            <div class="w w2 disabled">2</div>
            <div class="w w3">3</div>
            <div class="w w4 disabled">4</div>
            <div class="w w5 disabled">5</div>
            <div class="w w6 disabled">6</div>
            <div class="w w7 disabled"></div>
          </div>
          <doom-hero life="high"></doom-hero>
          <div class="armor">
            <bitmap-font text="100%"></bitmap-font>
          </div>
          <div class="items"></div>
          <div class="stats"></div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("doom-screen", DoomScreen);
