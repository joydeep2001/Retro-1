class EventHandler

canvas.addEventListener('click', (e)=>{
	handleInput(e.clientX, e.clientY);
	
});


canvas.addEventListener('click', (e)=>{
	
	let color = ctx.getImageData(e.clientX, e.clientY, 1, 1);
	
});



canvas.addEventListener('mouseover', e=>{

	window.addEventListener('keydown', k=>{
		k.preventDefault();
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
	event.preventDefault();
	if(event.deltaY == -100){
		zoomIn();
		drawlines();

	}
	else{
		zoomOut();
		drawlines();
	}
	
});