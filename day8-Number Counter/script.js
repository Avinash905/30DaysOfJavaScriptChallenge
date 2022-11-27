let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let num = document.querySelector(".num");

plusBtn.addEventListener("click", () => {
  num.innerHTML++;
});

minusBtn.addEventListener("click", () => {
  num.innerHTML--;
});

let saveBtn = document.querySelector(".save");
let resetBtn = document.querySelector(".reset");
let numbers = document.querySelector(".numbers");

saveBtn.addEventListener("click", () => {
  let numBox = document.createElement("div");
  numBox.innerText = num.innerHTML;
  numbers.appendChild(numBox);
});

resetBtn.addEventListener("click", () => {
  num.innerHTML = 0;
});
