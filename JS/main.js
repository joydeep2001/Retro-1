import EventHandler from "../Modules/EventHandler.js";
let isActive = false;
let keyPressed = false;
const canvas = "#bitmap-canvas";
const btn = document.getElementById('load-btn');
let game = new EventHandler(
  canvas,
  { x: 150, y: 300 },
  { height: 150, width: 300 }
);


let pos = {x: 0, y: 0};

game.drawGrids();

btn.addEventListener('click',() =>{
  game.erase = !game.erase;
});

game.canvas.addEventListener("click", (e) => {
  if (!keyPressed) game.handleInput(e.clientX, e.clientY);
});

game.canvas.addEventListener("mousedown", (e) => {
  isActive = true;
  pos.x = e.clientX;
  pos.y = e.clientY;
});

game.canvas.addEventListener("mousemove", (e) => {
  if (isActive && !keyPressed) {
    game.handleInput(e.clientX, e.clientY);
  }
  else if(isActive && keyPressed) {
    pos.x = e.clientX;
    pos.y = e.clientY;
    game.handleDrag(pos, e.clientX, e.clientY);
  }
});
game.canvas.addEventListener("mouseup", (e) => {
  isActive = false;
});

game.canvas.addEventListener("mouseover", (e) => {
  window.addEventListener("keydown", (k) => {
    keyPressed = true;
    k.preventDefault();
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
  game.handleZoom(event.deltaY);
});

