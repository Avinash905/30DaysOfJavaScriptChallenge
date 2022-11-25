window.onload = colorGen();

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  colorGen();
});

let box = document.querySelectorAll(".color");
addEventListener("click", (element) => {
  let text = element.path[0].innerHTML;
  navigator.clipboard.writeText(text);
});

function colorGen() {
  let boxes = document.querySelectorAll(".color");
  let popul = "0123456789abcdef";
  let arr = [];

  for (let i = 0; i < 9; i++) {
    let str = "";
    for (let i = 0; i < 6; i++) {
      let rndm = Math.floor(Math.random() * popul.length);
      str += popul[rndm];
    }
    arr[i] = str;
  }

  boxes.forEach((box, index) => {
    box.innerHTML = `#${arr[index]}`;
    box.style.backgroundColor = `#${arr[index]}`;
  });
}
