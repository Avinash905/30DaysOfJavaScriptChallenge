let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let inter;
start.addEventListener("click", () => {
  let hrs = document.querySelector("#hrs");
  let mins = document.querySelector("#mins");
  let secs = document.querySelector("#secs");

  inter = setInterval(() => {
    secs.value = secs.value - 1;
    if (secs.value <= 0 && mins.value <= 0 && hrs.value <= 0) {
      clearInterval(inter);
    }
    if (hrs.value > 0 && mins.value <= 0 && secs.value < 0) {
      hrs.value = hrs.value - 1;
      mins.value = "60";
    }
    if (secs.value < 0) {
      if (mins.value > 0) {
        mins.value = mins.value - 1;
        secs.value = "59";
      }
    }
  }, 1000);
});

reset.addEventListener("click", () => {
  clearInterval(inter);
  let input = document.querySelectorAll("input");
  input.forEach((element) => {
    element.value = "0";
  });
});
