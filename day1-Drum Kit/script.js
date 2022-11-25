let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (element) => {
    let cls = element.path[2].classList[0];
    element.path[2].classList.add("active");
    playAudio(cls);
    setTimeout(() => {
      element.path[2].classList.remove("active");
    }, 100);
  });
});

window.addEventListener("keydown", (element) => {
  let typed = element.key;
  let obj = {
    a: "clap",
    s: "hihat",
    d: "kick",
    f: "openhat",
    g: "boom",
    h: "ride",
    j: "snare",
    k: "tom",
    l: "tink",
  };
  if ("asdfghjkl".includes(typed)) {
    let cls = document.querySelector(`.${obj[typed]}`).classList[0];
    document.querySelector(`.${cls}`).classList.add("active");
    playAudio(cls);
    setTimeout(() => {
      document.querySelector(`.${cls}`).classList.remove("active");
    }, 100);
    playAudio(cls);
  }
});

function playAudio(filename) {
  let audio = new Audio(`/sounds/${filename}.wav`);
  audio.play();
}
