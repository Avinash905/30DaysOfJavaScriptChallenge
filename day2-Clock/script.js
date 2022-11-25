setInterval(() => {
  let d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  let hrDeg = 30 * hr + min / 2;
  let minDeg = 6 * min;
  let secDeg = 6 * sec;

  document.querySelector(".hour-hand").style.transform = `rotate(${hrDeg}deg)`;
  document.querySelector(
    ".minute-hand"
  ).style.transform = `rotate(${minDeg}deg)`;
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secDeg}deg)`;
}, 1000);
