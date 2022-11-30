let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let sec = 1;

window.addEventListener("load", () => {
  setInterval(() => {
    if (sec == 2) {
      yellow.style.backgroundColor = "yellow";
      yellow.style.boxShadow = "0px 0px 20px yellow";

      red.style.backgroundColor = "#06032e8d";
      red.style.boxShadow = "none";

      green.style.backgroundColor = "#06032e8d";
      green.style.boxShadow = "none";

      sec++;
    } else if (sec == 3) {
      red.style.backgroundColor = "#06032e8d";
      red.style.boxShadow = "none";

      yellow.style.backgroundColor = "#06032e8d";
      yellow.style.boxShadow = "none";

      green.style.backgroundColor = "rgb(14, 211, 14)";
      green.style.boxShadow = "0px 0px 20px rgb(14, 211, 14)";

      sec = 1;
    } else {
      green.style.backgroundColor = "#06032e8d";
      green.style.boxShadow = "none";
      red.style.backgroundColor = "red";
      red.style.boxShadow = "0px 0px 20px red";

      yellow.style.backgroundColor = "#06032e8d";
      yellow.style.boxShadow = "none";

      sec++;
    }
  }, 1000);
});
