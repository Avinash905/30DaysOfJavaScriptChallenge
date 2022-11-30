let box = document.querySelectorAll(".box");
let c = 0;

box.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (c % 2 == 0) {
      ele.innerHTML = "x";
    } else {
      ele.innerHTML = "o";
    }
    c++;
    setTimeout(() => {
      check();
    }, 100);
  });
});

function check() {
  let winCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let empty = false;
  winCond.forEach((e) => {
    for (let k = 0; k < 9; k++) {
      if (box[k].innerHTML == "") {
        empty = true;
        break;
      } else {
        if (k == 8) {
          alert(`Draw`);
          box.forEach((ele) => {
            ele.innerHTML = "";
          });
          c = 0;
          break;
        }
      }
    }

    if (
      box[e[0]].innerHTML == box[e[1]].innerHTML &&
      box[e[1]].innerHTML == box[e[2]].innerHTML &&
      box[e[0]].innerHTML != ""
    ) {
      alert(`Player '${box[e[0]].innerHTML.toUpperCase()}' won`);
      box.forEach((ele) => {
        ele.innerHTML = "";
      });
      c = 0;
    }
  });
}
