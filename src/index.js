// import "@/modules/detectCombo.js";

import "@/components/DoomScreen.js";

document.body.addEventListener("click", () => {
  const page = document.querySelector(".page");
  page.insertAdjacentHTML("afterend", "<doom-screen></doom-screen>");
}, { once: true });
