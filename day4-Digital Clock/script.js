setInterval(() => {
  let d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  if (hr < 10) {
    document.querySelector(".hours").innerHTML = `0${hr}`;
  } else {
    document.querySelector(".hours").innerHTML = `${hr}`;
  }
  if (min < 10) {
    document.querySelector(".minutes").innerHTML = `0${min}`;
  } else {
    document.querySelector(".minutes").innerHTML = `${min}`;
  }
  if (sec < 10) {
    document.querySelector(".seconds").innerHTML = `0${sec}`;
  } else {
    document.querySelector(".seconds").innerHTML = `${sec}`;
  }
  if (hr > 11) {
    document.querySelector(".ampm").innerHTML = "PM";
  } else {
    document.querySelector(".ampm").innerHTML = "AM";
  }
}, 1000);
