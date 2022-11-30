let canvas = document.querySelector("canvas"),
  tools = document.querySelectorAll("li"),
  fillColor = document.querySelector("#fill-color"),
  sizeSlider = document.querySelector("#brush-size"),
  colorPicker = document.querySelector("#color"),
  clearCanvas = document.querySelector(".clear"),
  saveImg = document.querySelector(".save");
ctx = canvas.getContext("2d");

let isDrawing = false,
  brushWidth = 5,
  selectedTool = "brush",
  prevMouseX,
  prevMouseY,
  snapshot,
  selectedColor = "#000";

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  setCanvasBackground();
});

let setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
};

let startDraw = (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

let drawRect = (e) => {
  if (!fillColor.checked) {
    return ctx.strokeRect(
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      prevMouseY - e.offsetY
    );
  }
  ctx.fillRect(
    e.offsetX,
    e.offsetY,
    prevMouseX - e.offsetX,
    prevMouseY - e.offsetY
  );
};

let drawCircle = (e) => {
  ctx.beginPath();
  let radius = Math.sqrt(
    Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2)
  );
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

let drawTriangle = (e) => {
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

let drawing = (e) => {
  if (!isDrawing) {
    return;
  }
  ctx.putImageData(snapshot, 0, 0);

  if (selectedTool == "brush" || selectedTool == "eraser") {
    ctx.strokeStyle = selectedTool == "eraser" ? "#fff" : selectedColor;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  } else if (selectedTool == "rect") {
    drawRect(e);
  } else if (selectedTool == "circle") {
    drawCircle(e);
  } else if (selectedTool == "triangle") {
    drawTriangle(e);
  }
};

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

tools.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
  });
});

sizeSlider.addEventListener("change", () => {
  brushWidth = sizeSlider.value;
});

colorPicker.addEventListener("input", () => {
  selectedColor = colorPicker.value;
});

clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setCanvasBackground();
});

saveImg.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  console.log(link);
  link.click();
});
