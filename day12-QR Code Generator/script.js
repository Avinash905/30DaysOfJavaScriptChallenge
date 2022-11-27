let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let input = document.querySelector("textarea").value;
  let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;

  document.querySelector("img").src = url;
});
