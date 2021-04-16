import ScreenProps from "./ScreenProps.js";

class CanvasUtils{

	constructor(canvas, screenSize, resolution){
		this.screen = new ScreenProps(screenSize, resolution);
		this.canvas = document.querySelector(canvas); 
		this.ctx = this.canvas.getContext('2d');

	}

	zoomIn = ()=>{
		if(this.screen.zoom_level < 255)
			this.screen.zoom_level += this.screen.steps;
	}

	zoomOut = ()=>{
		if(this.screen.zoom_level > 5)
			this.screen.zoom_level -= this.screen.steps;
	}

	initCanvas = ()=>{

		this.canvas.height = this.screen.screen_size.y;
		this.canvas.width = this.screen.screen_size.x;
	}
	clear_canvas = ()=>{
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}


	drawGrids = ()=>{
		this.clear_canvas();
		let number_of_horz_lines = this.screen.resolution.height / this.screen.zoom_level;
		let number_of_vert_lines = this.screen.resolution.width / this.screen.zoom_level;
		console.log(this.screen.zoom_level);
		this.draw_vert_lines(number_of_vert_lines);
		this.draw_horz_lines(number_of_horz_lines);


	}

	draw_vert_lines = (lines)=>{
		this.ctx.strokeStyle = "#c6cfcc";
		
		this.ctx.strokeStyle = "#c6cfcc";

		for(let x = this.screen.zoom_level; x < this.screen.zoom_level*lines; x+=this.screen.zoom_level){
			this.ctx.beginPath();
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.canvas.height);	
			this.ctx.stroke();
		}

	}

	draw_horz_lines = (lines)=>{
		this.ctx.strokeStyle = "#c6cfcc";
		for(let x = this.screen.zoom_level; x < this.screen.zoom_level*lines; x+=this.screen.zoom_level){
			this.ctx.beginPath();
			this.ctx.moveTo(0, x);
			this.ctx.lineTo(this.canvas.width, x);	
			this.ctx.stroke();
		}


	}
	handleInput = (clickedX, clickedY)=>{
		let height = this.screen.zoom_level;
		let width = this.screen.zoom_level;
		clickedX -= this.canvas.getBoundingClientRect().x;
		clickedY -= this.canvas.getBoundingClientRect().y;
		let startX = Math.floor(clickedX / this.screen.zoom_level) * this.screen.zoom_level;
		let startY = Math.floor(clickedY / this.screen.zoom_level) * this.screen.zoom_level;
		console.log(clickedX, clickedY);
		console.log('joy');
		this.ctx.beginPath();
		this.ctx.fillStyle = "#FF0000";
		this.ctx.fillRect(clickedX, clickedY, height, width);
		this.ctx.stroke();
		

	}
	
}

export default CanvasUtils;