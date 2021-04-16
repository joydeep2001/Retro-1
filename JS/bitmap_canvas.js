import CanvasUtils from './CanvasUtils.js';

const canvas = '#bitmap-canvas';
let game = new CanvasUtils(canvas, {x:300, y:300}, {height:300, width:300});


game.drawGrids();


game.canvas.addEventListener('click', (e)=>{
	game.handleInput(e.clientX, e.clientY);

});


game.canvas.addEventListener('click', (e)=>{

	let color = game.ctx.getImageData(e.clientX, e.clientY, 1, 1);

});



game.canvas.addEventListener('mouseover', e=>{

	window.addEventListener('keydown', k=>{
		k.preventDefault();
		console.log(k.code);
		if(k.key == ' '){
			game.canvas.style.cursor = "all-scroll";
		}
	});

	window.addEventListener('keyup', ()=>{
		game.canvas.style.cursor = null;
	});
});



game.canvas.addEventListener('wheel', (event)=>{
	event.preventDefault();
	if(event.deltaY == -100){
		game.zoomIn();
		game.drawGrids();

	}
	else{
		game.zoomOut();
		game.drawGrids();
	}

});







