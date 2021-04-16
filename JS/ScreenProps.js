class ScreenProps{
	
	constructor(screenSize, resolution){
		this.counter = 0;
		this. zoom_level = 20;
		this.steps = 5;
		this.screen_size = screenSize
		this.resolution = resolution;
		this.rows = Math.round(this.screen_size.y);
		this.cols = Math.round(this.screen_size.x);	
		console.log(resolution);
	}
	
}

export default ScreenProps;