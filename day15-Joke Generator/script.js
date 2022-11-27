let box = document.querySelector(".joke");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((res) => res.json())
    .then((data) => {
      box.innerHTML = data.joke;
    });
});
