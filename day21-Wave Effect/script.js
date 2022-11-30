let dotCont = document.querySelector(".dot-container");
let arr = [];

for (let i = 0; i < 15; i++) {
  arr[i] = [];
  for (let j = 0; j < 15; j++) {
    let dot = document.createElement("div");
    arr[i].push(dot);
    dot.classList.add("dot");
    dotCont.appendChild(dot);
  }
}

arr.forEach((row, i) => {
  row.forEach((dot, j) => {
    dot.addEventListener("click", () => {
      grow(i, j);
    });
  });
});

function grow(i, j) {
  if (arr[i] && arr[i][j] && !arr[i][j].classList.contains("grow")) {
    arr[i][j].classList.add("grow");
    setTimeout(() => {
      grow(i + 1, j);
      grow(i - 1, j);
      grow(i, j + 1);
      grow(i, j - 1);
    }, 100);
    setTimeout(() => {
      arr[i][j].classList.remove("grow");
    }, 300);
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let coords = [Math.floor(Math.random() * 15), Math.floor(Math.random() * 15)];
  grow(coords[0], coords[1]);
});
