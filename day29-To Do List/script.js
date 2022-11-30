let input = document.querySelector("input");
let addBtn = document.querySelector(".add");
let edBtn = document.querySelector(".ed");
let list = document.querySelector(".list");
let note = document.querySelectorAll(".note");

addBtn.addEventListener("click", () => {
  html = `<div class="note">
    <div class="todo">${input.value} <hr /></div>
    <button class="edit">Edit</button>
    <button class="remove">Remove</button>
  </div>`;
  if (input.value != "") {
    list.innerHTML += html;
  } else {
    alert("You must write something");
  }
});

setInterval(() => {
  let remBtn = document.querySelectorAll(".remove");
  remBtn.forEach((rb) => {
    rb.addEventListener("click", () => {
      rb.parentElement.remove();
    });
  });
}, 100);

let temp;
setInterval(() => {
  let editBtn = document.querySelectorAll(".edit");
  editBtn.forEach((ed) => {
    ed.addEventListener("click", () => {
      temp = ed.parentElement.firstElementChild;
      input.value = temp.innerHTML.replace("<hr>", "");
      addBtn.style.display = "none";
      edBtn.style.display = "block";
    });
  });
}, 100);

edBtn.addEventListener("click", () => {
  temp.innerHTML = input.value;
});

setInterval(() => {
  let todo = document.querySelectorAll(".todo");
  todo.forEach((td) => {
    td.addEventListener("click", () => {
      td.parentElement.style.backgroundColor = "rgb(4, 147, 4)";
      td.firstElementChild.style.display = "block";
      td.parentElement.querySelectorAll("button").forEach((b) => {
        b.style.display = "none";
      });
    });
  });
}, 100);
