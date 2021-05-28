var particles = [];

function Particle(X, Y, Texture, Speed, FrameStart, Height, Lifetime, Name){
	var found = false; 
	for (var i = 0; i < particles.length; i++){ 
		if (particles[i].name == Name){ 
			found = true; 
		} 
	} 
	if (found) { return; }
	this.name = Name;
	this.x = X;
	this.y = Y;
	this.texture = Texture;
	this.frameSpeed = Speed;
	this.height = height;
	this.framesStart = FrameStart;
	
	this.ignore = false;
	this.framePassed = true;
	this.onFrame = 0;
	
	setTimeout(function(){
		this.ignore = true;
	},Lifetime);
	
	this.timeParticle = function(part){
		setTimeout(function(){
			part.framePassed = true;
		},Speed)
	}
	
	particles.push(this);
}

function drawParticle(){
	for (var i = 0; i < particles.length; i++){
		var a = particles[i].onFrame;
		if (!particles[i].ignore){
			var ptImgg = new Image();
			ptImgg.src = particles[i].texture;
			ctx.drawImage(
				ptImgg, 
				particles[i].framesStart[a],
				0,
				particles[i].framesStart[a+1] - particles[i].framesStart[a],
				particles[i].height,
				particles[i].x,
				particles[i].y,
				particles[i].framesStart[a+1] - particles[i].framesStart[a],
				particles[i].height
			);
			if (particles[i].onFrame == particles[i].framesStart.length+1){
				particles[i].ignore = true;
				for (var i = 0; i < particles.length; i++){
					if (particles[i].toString() == particles[i].toString()){
						particles.splice(i,1);
					}
				}
			}
			if (typeof particles[i] == "undefined"){ return; }
			if (particles[i].framePassed){
				particles[i].framePassed = false;
				particles[i].onFrame++;
				particles[i].timeParticle(particles[i]);
			}
		}
	}
}