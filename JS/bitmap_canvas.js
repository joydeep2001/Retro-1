
const canvas = document.querySelector('#bitmapCreatorCanvas');
const ctx = canvas.getContext('2d');

let counter = 0;
let zoom_level = 20;
let steps = 5;
let screen_size = {x:250, y:250};
let number_of_horz_lines = screen_size.y / zoom_level;
let number_of_vert_lines = screen_size.x / zoom_level;
let rows = Math.round(screen_size.y / zoom_level);
let cols = Math.round(screen_size.x / zoom_level);

let bitmap = new Array(rows).fill(0).map(() => new Array(cols));



canvas.addEventListener('click', (e)=>{
	drawSquare(e.clientX, e.clientY);
	

});


canvas.addEventListener('click', (e)=>{
	
	let color = ctx.getImageData(e.clientX, e.clientY, 1, 1);
	
});



canvas.addEventListener('mouseover', e=>{

	window.addEventListener('keydown', k=>{
		console.log(k.code);
		if(k.key == ' '){
			canvas.style.cursor = "all-scroll";
		}
	});
	
	window.addEventListener('keyup', ()=>{
		canvas.style.cursor = null;
	});
});



canvas.addEventListener('wheel', (event)=>{
	if(event.deltaY == -100){
		zoomIn();
		drawlines();

	}
	else{
		zoomOut();
		drawlines();
	}
	
});

function zoomIn(){
	if(zoom_level < 255)
		zoom_level+=steps;
}

function zoomOut(){
	if(zoom_level > 5)
		zoom_level-=steps;
}

function initCanvas(){

	canvas.height = screen_size.y;
	canvas.width = screen_size.x;
}
function clear_canvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function drawlines(){
	clear_canvas();
	let number_of_horz_lines = screen_size.y / zoom_level;
	let number_of_vert_lines = screen_size.x / zoom_level;
	draw_vert_lines(number_of_vert_lines);
	draw_horz_lines(number_of_horz_lines);

}

function draw_vert_lines(lines){
	ctx.strokeStyle = "#c6cfcc";
	
	ctx.strokeStyle = "#c6cfcc";

	for(x = zoom_level; x < zoom_level*lines; x+=zoom_level){
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x, canvas.height);	
		ctx.stroke();
	}

}

function draw_horz_lines(lines){
	ctx.strokeStyle = "#c6cfcc";
	for(x = zoom_level; x < zoom_level*lines; x+=zoom_level){
		ctx.beginPath();
		ctx.moveTo(0, x);
		ctx.lineTo(canvas.width, x);	
		ctx.stroke();
	}


}
initCanvas();
drawlines();

function drawSquare(clickedX, clickedY){
	let height = zoom_level;
	let width = zoom_level;
	clickedX -= canvas.getBoundingClientRect().x;
	clickedY -= canvas.getBoundingClientRect().y;
	let startX = Math.floor(clickedX / zoom_level) * zoom_level;
	let startY = Math.floor(clickedY / zoom_level) * zoom_level;
	console.log(startX, startY);

	ctx.beginPath();
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(startX, startY, height, width);
	ctx.stroke();

}