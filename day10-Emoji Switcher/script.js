let emj = document.querySelector(".emoji");

let emojis = [];

fetch("https://api.emojisworld.fr/v1/random")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.results.length; i++) {
      emojis.push(data.results[i].emoji);
    }
  });

emj.addEventListener("mouseover", () => {
  let rnd = Math.floor(Math.random() * emojis.length);
  emj.innerHTML = emojis[rnd];
});

emj.addEventListener("click", () => {
  let rnd = Math.floor(Math.random() * emojis.length);
  emj.innerHTML = emojis[rnd];
});
