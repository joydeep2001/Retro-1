
//not in use
class DrawingTools {
  constructor(ctx) {
	this.ctx = ctx;
  }
  drawPoint = (x, y, height, width, color) => {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, height, width);
    this.ctx.stroke();
  };
  removePoint = (x, y) => {};
}

export default DrawingTools;
