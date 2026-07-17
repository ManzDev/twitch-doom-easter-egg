// Idea and implementation by @SuperTurboTronic

const keyframes = [
  { translate: "0 -30px" },
  { translate: "0 0" },
  { translate: "0 -30px" }
];

const options = {
  duration: 600,
  easing: "linear",
  iterations: Infinity
};

const enableBackScreen = () => {
  document.body.style.overflow = "hidden";
  document.body.style.background = "#000";
};

const page = document.querySelector(".page");

export const getScale = () => {
  const pageWidth = page.getBoundingClientRect().width;
  return pageWidth / page.offsetWidth;
};

export let x = 0;
let animation;
const KEYS = ["A", "W", "S", "D"];

export const controlWeapon = () => {
  enableBackScreen();
  animation = page.animate(keyframes, options);
  animation.pause();

  document.addEventListener("keydown", (ev) => {
    const key = ev.key.toUpperCase();
    if (KEYS.includes(key)) {
      checkKey(key);
      animation.play();
    }
  });

  document.addEventListener("keyup", (ev) => {
    const key = ev.key.toUpperCase();
    KEYS.includes(key) && animation.pause();
  });
};

const checkKey = (key) => {
  const scale = getScale();

  switch (key) {
  case "ARROWUP":
  case "W":
    page.style.scale = Math.min(2, scale + 0.02);
    break;
  case "ARROWDOWN":
  case "S":
    page.style.scale = Math.max(1, scale - 0.02);
    break;
  case "ARROWLEFT":
  case "A":
    // x = Math.min(0, x + 10);
    x = x + 10;
    page.style.transform = `translateX(${x}px)`;
    break;
  case "ARROWRIGHT":
  case "D":
    // x = Math.max(0, x - 10) * scale;
    x = x - 10;
    page.style.transform = `translateX(${x}px)`;
    break;
  }
};
