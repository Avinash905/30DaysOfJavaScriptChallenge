let title = document.querySelector(".title");
let singer = document.querySelector(".singer");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let audio = document.querySelector("audio");
let image = document.querySelector("img");
let i = 0;

const song = [
  {
    name: "Black Box",
    sungby: "Legendary",
    path: "./music/bb-legendary.mp3",
    imgpath: "./images/bbLegendary.jpg",
  },
  {
    name: "Island Boys",
    sungby: "Boys",
    path: "./music/island-boy.mp3",
    imgpath: "./images/islandBoy.jpg",
  },
  {
    name: "Sapphire City",
    sungby: "City",
    path: "./music/sapphire-city.mp3",
    imgpath: "./images/sapphireCity.jpg",
  },
];

play.addEventListener("click", () => {
  audio.src = song[i].path;
  image.src = song[i].imgpath;
  audio.play();
  title.innerHTML = song[i].name;
  singer.innerHTML = song[i].sungby;
  play.style.display = "none";
  pause.style.display = "block";
});

pause.addEventListener("click", () => {
  audio.pause();
  pause.style.display = "none";
  play.style.display = "block";
});

prev.addEventListener("click", () => {
  i = i > 0 ? --i : song.length - 1;
  audio.src = song[i].path;
  image.src = song[i].imgpath;
  title.innerHTML = song[i].name;
  singer.innerHTML = song[i].sungby;
  play.style.display = "none";
  pause.style.display = "block";
  audio.play();
});

next.addEventListener("click", () => {
  i = i < song.length - 1 ? ++i : 0;
  audio.src = song[i].path;
  image.src = song[i].imgpath;
  title.innerHTML = song[i].name;
  singer.innerHTML = song[i].sungby;
  play.style.display = "none";
  pause.style.display = "block";
  audio.play();
});
