let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener("click", () => {
  let rnd = Math.floor(Math.random() * 6) + 1;
  img.src = `./images/dice-roll.gif`;
  setTimeout(() => {
    img.src = `./images/${rnd}.png`;
  }, 800);
});
