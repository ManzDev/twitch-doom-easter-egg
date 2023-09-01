import { chaingunSound, chaingunEndSound, chaingunOutAmmoSound, chaingunAnimation } from "@/modules/chaingun.js";

const playSound = (sound) => sound.play();
const stopSound = (sound) => sound.stop();

class DoomWeapon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.currentAnimation = null;
  }

  static get styles() {
    return /* css */`
      :host {
        --weapon: url("images/weapons/chaingun.png");
      }

      .container {
        --size: 230px;
        width: var(--size);
        height: 250px;
        background: var(--weapon);
      }
    `;
  }

  burst() {
    const { burst } = chaingunAnimation;
    this.currentAnimation = this.container.animate(burst.keyframes, burst.options);
    playSound(chaingunSound);
  }

  unburst(sound = true) {
    if (this.currentAnimation) {
      const { end } = chaingunAnimation;
      this.currentAnimation.cancel();
      this.currentAnimation = this.container.animate(end.keyframes, end.options);
    }
    stopSound(chaingunSound);
    if (sound) {
      playSound(chaingunEndSound);
    }
    stopSound(chaingunOutAmmoSound);
  }

  burstOutAmmo() {
    this.currentAnimation.cancel();
    stopSound(chaingunSound);
    const { burst, end } = chaingunAnimation;
    this.currentAnimation = this.container.animate(end.keyframes, burst.options);
    playSound(chaingunOutAmmoSound);
  }

  connectedCallback() {
    this.render();
    this.container = this.shadowRoot.querySelector(".container");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DoomWeapon.styles}</style>
    <div class="container">
    </div>`;
  }
}

customElements.define("doom-weapon", DoomWeapon);
