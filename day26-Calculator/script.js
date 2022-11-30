let input = document.querySelector("input");
let btns = document.querySelectorAll("button");
const digit = /^\d+$/g;
const special = /[-+*/.]/g;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    try {
      if (btn.innerText == "C") {
        input.value = "";
      } else if (btn.innerText == "sin") {
        input.value = Math.sin(input.value);
      } else if (btn.innerText == "cos") {
        input.value = Math.cos(input.value);
      } else if (btn.innerText == "tan") {
        input.value = Math.tan(input.value);
      } else if (btn.innerText == "π") {
        input.value = Math.PI;
      } else if (btn.innerText == "%") {
        input.value = input.value / 100;
      } else if (btn.innerText == "x2") {
        input.value = input.value ** 2;
      } else if (btn.innerText == "√") {
        input.value = Math.sqrt(input.value);
      } else if (btn.innerText == "CE") {
        input.value = input.value.slice(0, input.value.length - 1);
      } else if (btn.innerText.match(digit) || btn.innerText.match(special)) {
        input.value += btn.innerText;
      } else if (btn.innerText == "=") {
        input.value = eval(input.value);
      }
    } catch (error) {
      input.value = "Error";
    }
  });
});
