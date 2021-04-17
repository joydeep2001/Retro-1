import DrawingTools from "./DrawingTools.js";
import ScreenProps from "./ScreenProps.js";

class CanvasUtils {
  constructor(canvas, screenSize, resolution) {
    this.screen = new ScreenProps(screenSize, resolution);
    this.canvas = document.querySelector(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.drawingTools = new DrawingTools(this.ctx);
    this.erase = false;
    //top and left will determine that from which
    //index array to which index of the bitmap array
    //will be rendered
    this.top = 0;
    this.left = 0;
    //dividing by 5 because 5 is minimum zoom level
    let rows = screenSize.x / 5;
    let cols = screenSize.y / 5;
    //console.log(`row = ${rows}, col = ${cols}`);
    //this bitmap array stores the bitmap of the image
    this.bitmap = Array(rows)
      .fill()
      .map(() => Array(cols));
  }

  zoomIn = () => {
    if (this.screen.zoom_level < 255)
      this.screen.zoom_level += this.screen.steps;
  };

  zoomOut = () => {
    if (this.screen.zoom_level > 5) this.screen.zoom_level -= this.screen.steps;
  };

  initCanvas = () => {
    this.canvas.height = this.screen.screen_size.y;
    this.canvas.width = this.screen.screen_size.x;
  };
  clear_canvas = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  drawGrids = () => {
    this.clear_canvas();
    let number_of_horz_lines =
      this.screen.resolution.height / this.screen.zoom_level;
    let number_of_vert_lines =
      this.screen.resolution.width / this.screen.zoom_level;
    //console.log(this.screen.zoom_level);
    this.draw_vert_lines(number_of_vert_lines);
    this.draw_horz_lines(number_of_horz_lines);
  };

  draw_vert_lines = (lines) => {
    this.ctx.strokeStyle = "#c6cfcc";

    this.ctx.strokeStyle = "#c6cfcc";

    for (
      let x = this.screen.zoom_level;
      x < this.screen.zoom_level * lines;
      x += this.screen.zoom_level
    ) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }
  };

  draw_horz_lines = (lines) => {
    this.ctx.strokeStyle = "#c6cfcc";
    for (
      let x = this.screen.zoom_level;
      x < this.screen.zoom_level * lines;
      x += this.screen.zoom_level
    ) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, x);
      this.ctx.lineTo(this.canvas.width, x);
      this.ctx.stroke();
    }
  };
  render = () => {
    this.drawGrids();
    for (let i = this.top; i < 30; i++) {
      for (let j = this.left; j < 60; j++) {
        if (this.bitmap[i][j]) {
          let height = this.screen.zoom_level;
          let width = this.screen.zoom_level;
          let startX = (j - this.left) * this.screen.zoom_level;
          let startY = (i - this.top) * this.screen.zoom_level;
          this.drawingTools.drawPoint(startX, startY, height, width);
        }
      }
    }
  };



  changeState = (index) => {
    if (this.erase) return false;
    return true;
  };
  generateIndex = (x, y) => {
    let col = x / this.screen.zoom_level;
    let row = y / this.screen.zoom_level;
    console.log(`row = ${row}, col = ${col}`);
    return { row, col };
  };
}

export default CanvasUtils;
