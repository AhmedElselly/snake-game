var s;
var scl = 20; // scale
var food;

function setup(){
	createCanvas(600, 500);
	s = new Snake();
	frameRate(10)
	pickLocation();
}

function draw(){
	background(51);
	s.update();
	s.show();
	if(s.eat(food)){
		pickLocation();
	}
	fill(255, 0, 255);
	rect(food.x, food.y, scl, scl);
}

function pickLocation(){
	let cols = floor(width / scl);
	let rows = floor(height / scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		s.direction(0, -1);
	} else if (keyCode === DOWN_ARROW){
		s.direction(0, 1);
	} else if (keyCode === RIGHT_ARROW){
		s.direction(1, 0);
	} else if (keyCode === LEFT_ARROW){
		s.direction(-1, 0);
	}
}
