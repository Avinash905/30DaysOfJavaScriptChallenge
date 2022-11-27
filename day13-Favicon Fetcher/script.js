let input = document.querySelector("input");

input.addEventListener("keydown", (ele) => {
  if (ele.key == "Enter") {
    let url = `https://www.google.com/s2/favicons?domain=${
      input.value
    }&sz=${256}`;
    document.querySelector("img").src = url;
  }
});
