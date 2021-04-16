import CanvasUtils from "../Modules/CanvasUtils.js";
let isActive = false;
let keyPressed = false;
const canvas = "#bitmap-canvas";
let game = new CanvasUtils(
  canvas,
  { x: 300, y: 300 },
  { height: 300, width: 300 }
);

game.drawGrids();

game.canvas.addEventListener("click", (e) => {
  if (!keyPressed) game.handleInput(e.clientX, e.clientY);
});

game.canvas.addEventListener("mousedown", (e) => {
  console.log("active");
  isActive = true;
});

game.canvas.addEventListener("mousemove", (e) => {
  if (isActive && !keyPressed) {
    console.log(e.offsetX, e.offsetY);
    if (e.offsetX > 300 && e.offsetY > 150) isActive = false;

    game.handleInput(e.clientX, e.clientY);
  }
});
game.canvas.addEventListener("mouseup", (e) => {
  isActive = false;
});

game.canvas.addEventListener("mouseover", (e) => {
  window.addEventListener("keydown", (k) => {
    keyPressed = true;
    k.preventDefault();
    console.log(k.code);
    if (k.key == " ") {
      game.canvas.style.cursor = "all-scroll";
    }
  });

  window.addEventListener("keyup", () => {
    keyPressed = false;
    game.canvas.style.cursor = null;
  });
});

game.canvas.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY == -100) {
    game.zoomIn();
  } else {
    game.zoomOut();
  }
  game.drawBitmap();
});
