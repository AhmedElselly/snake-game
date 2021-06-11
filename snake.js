function Snake(){
	this.x = 0
	this.y = 0
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.total = 0;
	this.tail = [];

	this.update = function(){
		if(this.total === this.tail.length){
			for(var i = 0; i < this.tail.length - 1; i++){
				this.tail[i] = this.tail[i++];
			}
		}

		this.tail[this.total - 1] = createVector(this.x, this.y);

		this.x += this.xSpeed * scl;
		this.y += this.ySpeed * scl;

		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);
	}

	this.eat = function(pos){
		var distance = dist(this.x, this.y, pos.x, pos.y);
		if(distance < 1){
			this.total++;
			return true;
		}
		return false;
	}

	this.show = function(){
		fill(255);
		for(var i = 0; i < this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}

	this.direction = function(x, y){
		this.xSpeed = x;
		this.ySpeed = y;
	}
}