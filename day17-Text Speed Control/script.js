let text = document.querySelector(".text");
let arr = "30 days of javascript";
let i = 0;
let inter;

display(1000);

let input = document.querySelector("#input");

input.addEventListener("input", () => {
  clearInterval(inter);
  display(3000 / input.value);
});

function display(speed) {
  inter = setInterval(() => {
    text.innerHTML += arr[i];
    i++;
    if (i == arr.length - 1) {
      i = 0;
      text.innerHTML = "";
    }
  }, speed);
}
