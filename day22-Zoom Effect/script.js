let body = document.querySelector("body");
let zoom = false;

window.addEventListener("click", () => {
  zoom = !zoom;
});

window.addEventListener("keydown", (e) => {
  if (e.key == "z") {
    zoom = !zoom;
  }
});

window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  if (zoom) {
    body.style.transform = "scale(2)";
    body.style.transformOrigin = `${x}px ${y}px`;
  } else {
    body.style.transform = "none";
  }
});
