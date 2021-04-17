import CanvasUtils from "./CanvasUtils.js";

class EventHandler extends CanvasUtils {
  handleInput = (clickedX, clickedY) => {
    let height = this.screen.zoom_level;
    let width = this.screen.zoom_level;
    clickedX -= this.canvas.getBoundingClientRect().x;
    clickedY -= this.canvas.getBoundingClientRect().y;
    let startX =
      Math.floor(clickedX / this.screen.zoom_level) * this.screen.zoom_level;
    startX += this.left * this.screen.zoom_level;
    let startY =
      Math.floor(clickedY / this.screen.zoom_level) * this.screen.zoom_level;
    startY += this.top * this.screen.zoom_level;

    console.log(startX, startY);
    let index = this.generateIndex(startX, startY);
    this.bitmap[index.row][index.col] = this.changeState();
    this.render();
  };
  handleDrag = (pos, x, y) => {
    if (pos.x < x + 10) this.left++;
    else if (pos.x > x + 10) this.left--;
    if (pos.y < y + 10) this.top++;
    else if (pos.y > y + 10) this.top--;
    console.log(pos.x, x, pos.y, y);
    this.render();
  };
  handleZoom = (deltaY) => {
    if (deltaY == -100) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
    this.render();
  };
  
}

export default EventHandler;
