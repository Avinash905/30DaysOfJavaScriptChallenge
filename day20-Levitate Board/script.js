let boxCont = document.querySelector(".box-container");

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 20; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    boxCont.appendChild(box);
  }
}

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    let color = rndColor();
    box.style.backgroundColor = `#${color}`;
    box.style.boxShadow = `0px 0px 20px #${color}`;
    setTimeout(() => {
      box.style.backgroundColor = `#100d38`;
      box.style.boxShadow = `0px 0px 3px rgb(211, 207, 207)`;
    }, 1000);
  });
});

function rndColor() {
  let popul = "0123456789abcdef";

  let str = "";
  for (let i = 0; i < 6; i++) {
    let rndm = Math.floor(Math.random() * popul.length);
    str += popul[rndm];
  }
  return str;
}
