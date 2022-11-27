let addBtn = document.querySelector(".add");
let btns = document.querySelector(".btns");
addBtn.addEventListener("click", () => {
  removeBtn.style.display = "block";
  let html = '<input class="extra" type="text" placeholder="Another Field" />';
  btns.insertAdjacentHTML("beforebegin", html);
});

let removeBtn = document.querySelector(".remove");
removeBtn.addEventListener("click", () => {
  let extra = document.querySelectorAll(".extra");
  if (extra.length) {
    extra[extra.length - 1].remove();
    if (extra.length <= 1) {
      removeBtn.style.display = "none";
    }
  }
});
