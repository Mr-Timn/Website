var aProj = [
	
];

function AnimatedProjectile(X, Y, Width, Height, Texture, Speed, Direction, Damage, Lifetime, Name, Animate){
	var found = false; 
	for (var i = 0; i < aProj.length; i++){ 
		if (aProj[i].name == Name){ 
			found = true; 
		} 
	} 
	if (found) { return; }
	this.name = Name;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this.texture = Texture;
	this.speed = Speed;
	this.damage = Damage;
	this.dir = Direction;
	this.lifetime = Lifetime;
	this.ignore1 = false;
	this.ignore2 = false;
	this.ranIgnore1 = false;
	this.ranIgnore2 = false;
	this.ani = Animate; 
	this.animationSpeed = 100;
	this.currentFrame = 0;
	this.waitForFrame = false;
	
	if (Animate.delay1 && Animate.delay1 !== 0){ 
		this.ignore1 = true; 
		this.delay1 = function(cp){ 
			setTimeout(function(){ 
				cp.ignore1 = false; 
			},cp.ani.delay1) 
		} 
	}
	if (Animate.delay2 && Animate.delay2 !== 0){ 
		this.ignore2 = true; 
		this.delay2 = function(cp){ 
			setTimeout(function(){ 
				cp.ignore2 = false; 
			},cp.ani.delay2) 
		} 
	}
	
	this.animate = function(ap){
		var a = ap.currentFrame;
		var ani = ap.ani;
		ap.animationSpeed = ani.speed;
		
		if (ani.currentFrame >= ani.frames){ ani.done = true; }
		
		var sizeDiff = ap.height - ani.height;
		if (sizeDiff < 0){ sizeDiff /= 2; } 
		var wDiff = (ani.framesStart[a+1] - ani.framesStart[a]);
		
		var img = new Image();
		img.src = ani.src;
		ctx.drawImage(
			img, 
			ani.framesStart[a],
			0,
			ani.framesStart[a+1] - ani.framesStart[a],
			ani.height,
			ap.x - (wDiff/2),
			ap.y,
			ani.framesStart[a+1] - ani.framesStart[a],
			ani.height
		);
		if (ap.waitForFrame !== true){
			ap.waitForFrame = true
			setTimeout(function(){
				if (ap.currentFrame < ani.frames - 1){
					ap.currentFrame += 1; 
				}
				ap.waitForFrame = false;
			},ap.animationSpeed);
		}
	}
	this.move = function(cpj){
		if (cpj.ignore2){ return; }
		if (typeof aProj[i] == "string"){
			var cpj = aProj[i];
			switch(cpj.dir){
				case "right": 
					cpj.x += cpj.speed; 
					break;
				case "left": 
					cpj.x -= cpj.speed; 
					break;
				case "up": 
					cpj.y += cpj.speed; 
					break;
				case "down": 
					cpj.y -= cpj.speed; 
					break;
				default: 
					break;
			}
		} else {
			if (cpj && typeof cpj.loc === "undefined"){
				if (cpj.dir[0] == "Enemy"){
					var ep = returnOpponent(returnPlayer(cpj.name));
					var xEp = ep.x; 
					var yEp = ep.y;
					var xDist = cpj.x - xEp; 
					var yDist = cpj.y - yEp;
					cpj.loc = [xDist/cpj.ani.time,yDist/cpj.ani.time];
				}
			} else {
				if (cpj.dir[0] == "Enemy"){
					cpj.x -= cpj.loc[0];
					cpj.y -= cpj.loc[1];
				}
			}
		}
	}
	this.setIgnore = function(n){ 
		var cpj = aProj[n]; console.log(aProj[n]);
		setTimeout(function(){ 
			cpj.ignore1 = true; 
			cpj.ranIgnore1 = true;
			cpj.ignore2 = true; 
			cpj.ranIgnore2 = true;
		},cpj.lifetime); 
	}
	aProj.push(this);
	if (aProj.length == 1){ 
		this.setIgnore(0); 
	} else { 
		this.setIgnore(aProj.length-1); 
	}
}

function animateProjectile(){
	for (var i = 0; i < aProj.length; i++){
		var cpj = aProj[i];
		if (cpj.ignore1){ 
			if (!cpj.ranIgnore1){ 
				cpj.delay1(aProj[i]); 
				cpj.ranIgnore1 = true; 
			} 
		} else { cpj.animate(cpj); }
		
		if (cpj.ignore2){
			if (!cpj.ranIgnore2){ 
				cpj.delay2(aProj[i]); 
				cpj.ranIgnore2 = true; 
			} 
		} else { 
			cpj.move(cpj); 
			checkAnimatedProjectileHitBox(cpj); 
		}
	}
}

function checkAnimatedProjectileHitBox(cpj){
	if (cpj.name == "Player 1"){
		pplr = players[1];
	} else {
		pplr = players[0];
	}
	var distFromX = Math.abs(cpj.x - pplr.x);
	var distFromY = Math.abs(cpj.y - pplr.y);
				
	var key = cpj.name + " " + cpj.width;
	var f = false;
	for (var i = 0; i < pplr.wasDamagedBy.length; i++){ 
		if (pplr.wasDamagedBy[i] == key){ 
			f = true; 
		}  
	};
			
	if (distFromX < cpj.width && distFromY < cpj.height && !f){
		pplr.wasDamagedBy[pplr.wasDamagedBy.length] = key;
		pplr.health -= cpj.damage;
		pplr.stunned = true;
		if (pplr.dir == "right"){ 
			pplr.currentAnimation = "hurtR"; 
		} else {
			pplr.currentAnimation = "hurtL"; 
		}
		setTimeout(function(){
			pplr.stunned = false;
		},450)
		setTimeout(function(){
			for(var i = 0; i < pplr.wasDamagedBy.length; i++) {
				if (pplr.wasDamagedBy[i] === key){
					pplr.wasDamagedBy.splice(i, 1);
				}
			}
		},2000) 
	}
}
