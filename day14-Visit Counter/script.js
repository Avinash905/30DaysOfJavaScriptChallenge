let vst = document.querySelector(".visits");

window.addEventListener("load", () => {
  fetch("https://api.countapi.xyz/update/zen/webd/?amount=1")
    .then((res) => res.json())
    .then((data) => {
      let i = 0;
      let time = 1500 / data.value;
      let inter = setInterval(() => {
        i++;
        vst.innerHTML = i;
        if (i == data.value) {
          clearInterval(inter);
        }
      }, time);
    });
});
