// Contrib by SuperTurboTronic
// https://jsfiddle.net/n8e79Lyd/

/*
<main>
  <div id="el"></div>
</main>
*/

/*
html, body{
  height: 100%;
  background: #222;
  margin: 0;
}

main{
  height: 100%;
  display: grid;
  place-content: center;
  overflow: hidden;
}

main::after{
  content: "";
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("https://www.shitpostbot.com/img/templates/doom-hud-super-shotgun-firing-58782d197d881-overlay.png");
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat
}

div{
  width: 70vw;
  aspect-ratio: 16 / 9;
  transform: translateX(0px);
  scale: 1;
  background: url(https://i.imgur.com/mlldJdF.png);
  background-size: cover;
  background-position:center;
}

.walking{
  animation: walking 0.6s linear infinite;
}

@keyframes walking {
    0%, 100% { translate: 0 -30px; }
   50% { translate: 0 0; }
}
*/

const el = document.querySelector("#el");

document.onkeydown = checkKey;

document.onkeyup = function () {
  el.classList.remove("walking");
};

function checkKey(e) {
  e = e || window.event;

  el.classList.add("walking");

  const s = el.getBoundingClientRect().width / el.offsetWidth;
  const transformValues = el.computedStyleMap().get("transform")[0];
  const x = transformValues ? transformValues.x.value : 0;

  switch (e.keyCode) {
  // Acercarse (↑ o W)
  case 38:
  case 87:
    el.style.scale = s + 0.02;
    break;

    // Alejarse (↓ o S)
  case 40:
  case 83:
    el.style.scale = s - 0.02;
    break;

    // Izquierda (← o A)
  case 37:
  case 65:
    el.style.transform = `translateX(${x + 10}px)`;
    break;

    // Derecha (→ o D)
  case 39:
  case 68:
    el.style.transform = `translateX(${x - 10}px)`;
    break;
  }
}
