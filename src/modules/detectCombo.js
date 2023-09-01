import "@/components/DoomScreen.js";

const COMBO_CODE = ["I", "D", "D", "Q", "D"];
let cursor = 0;

const enableDoom = () => {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin", "<doom-screen></doom-screen>");
  console.log("God mode enabled.");
};

const preloadMusic = () => {
  /*
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = `${location.protocol}//${location.host}/assets/stage2.mp3`;
  link.as = "fetch";
  link.crossorigin = true;
  document.head.appendChild(link);
  */
  console.log("Preload");
};

const detectComboCode = (ev) => {
  const key = ev.key.toUpperCase();
  if (COMBO_CODE[cursor] === key) {
    ev.preventDefault();
  }
  cursor = (key === COMBO_CODE[cursor]) ? cursor + 1 : 0;
  if (cursor === 2) preloadMusic();
  if (cursor === COMBO_CODE.length) enableDoom();
};

document.addEventListener("keydown", detectComboCode);
