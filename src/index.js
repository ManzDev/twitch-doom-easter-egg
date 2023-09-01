// import "@/modules/detectCombo.js";

import "@/components/DoomScreen.js";

document.body.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin", "<doom-screen></doom-screen>");
}, { once: true });

/*
const CENTER_X = innerWidth / 2;
const CENTER_Y = innerHeight / 2;

const root = document.querySelector("body");

const updateVars = (x, z, ry) => {
  root.style.setProperty("--x", `${x}px`);
  root.style.setProperty("--z", `${z}px`);
  root.style.setProperty("--ry", `${ry}deg`);
};

addEventListener("mousemove", (ev) => {
  const { clientX: x, clientY: y } = ev;

  console.log(x, y);

  const newX = (x - CENTER_X) / 2;
  const newZ = 0;
  const newRY = (y - CENTER_Y) / 2;

  updateVars(newX, newZ, newRY);
});
*/
