import { Howl } from "howler";

export const chaingunSound = new Howl({
  src: ["sounds/chaingun-loop.ogg", "sounds/chaingun-loop.mp3"],
  loop: true
});

export const chaingunEndSound = new Howl({
  src: ["sounds/chaingun-end.ogg", "sounds/chaingun-end.mp3"],
  loop: false
});

export const chaingunOutAmmoSound = new Howl({
  src: ["sounds/chaingun-out-ammo.ogg", "sounds/chaingun-out-ammo.mp3"],
  loop: true
});

export const chaingunAnimation = {
  burst: {
    keyframes: [
      { backgroundPositionX: "calc(var(--size) * 1)" },
      { backgroundPositionX: "calc(var(--size) * 3)" }
    ],
    options: {
      duration: 200,
      easing: "steps(2)",
      iterations: Infinity
    }
  },
  end: {
    keyframes: [
      { backgroundPositionX: "calc(var(--size) * 0)" },
      { backgroundPositionX: "calc(var(--size) * -2)" }
    ],
    options: {
      duration: 400,
      easing: "steps(2)",
      iterations: 3
    }
  }
};
