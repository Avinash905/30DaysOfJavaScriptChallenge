let start = document.querySelector(".start");
let lap = document.querySelector(".lap");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let box = document.querySelector(".time-box");
let hrs = document.querySelector(".hrs");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");
let inter;

start.addEventListener("click", () => {
  inter = setInterval(() => {
    if (parseInt(secs.innerHTML) < 9) {
      secs.innerHTML = `0${parseInt(secs.innerHTML) + 1}`;
    } else {
      if (secs.innerHTML == "59") {
        secs.innerHTML = `00`;
        if (parseInt(mins.innerHTML) < 9) {
          mins.innerHTML = `0${parseInt(mins.innerHTML) + 1}`;
        } else {
          if (mins.innerHTML == "59") {
            mins.innerHTML = `00`;
            if (parseInt(hrs.innerHTML) < 9) {
              hrs.innerHTML = `0${parseInt(hrs.innerHTML) + 1}`;
            } else {
              hrs.innerHTML = parseInt(hrs.innerHTML) + 1;
            }
          } else {
            mins.innerHTML = parseInt(mins.innerHTML) + 1;
          }
        }
      } else {
        secs.innerHTML = parseInt(secs.innerHTML) + 1;
      }
    }
  }, 1000);
});

lap.addEventListener("click", () => {
  let singleTime = document.createElement("div");
  singleTime.innerHTML = `${hrs.innerHTML}:${mins.innerHTML}:${secs.innerHTML}`;
  console.log(singleTime);
  box.appendChild(singleTime);
});

stop.addEventListener("click", () => {
  clearInterval(inter);
});

reset.addEventListener("click", () => {
  clearInterval(inter);

  box.innerHTML = "";
  hrs.innerHTML = "00";
  mins.innerHTML = "00";
  secs.innerHTML = "00";
});
