var proj2 = [
	
];

function onHitProjectile(X, Y, Width, Height, Texture, Speed, Direction, Damage, Lifetime, Name, HitTexture, TextureStart, OtherHeight, FrameSpeed){
	this.name = Name;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this.texture = Texture;
	this.speed = Speed;
	this.damage = Damage;
	this.dir = Direction;
	this.onHitTexture = HitTexture;
	this.framesStart = TextureStart;
	this.otherHeight = OtherHeight;
	this.framePassed = true;
	this.frameSpeed = FrameSpeed;
	this.hasHit = false;
	this.onFrame = 0;
	this.ignore = false;
	setTimeout(function(){
		this.ignore = true;
	},Lifetime);
	proj2.push(this);
}

function moveOnHitProjectile(){
	for (var i = 0; i < proj2.length; i++){
		var cpj = proj2[i];
		if (cpj.hasHit){ return; }
		switch(cpj.dir){
			case "right":
				cpj.x += cpj.speed;
				break;
			case "left":
				cpj.x -= cpj.speed;
				break;
			case "up":
				cpj.y -= cpj.speed;
				break;
			case "down":
				cpj.y += cpj.speed;
				break;
			case "growdown":
				cpj.height += cpj.speed;
			default: 
				break;
		}
	}
}

function drawOnHitProjectile(){
	for (var i = 0; i < proj2.length; i++){
		var cpj = proj2[i];
		if (cpj.ignore){ return; }
		if (cpj.texture == "nothing"){
			ctx.fillStyle = "green";
			ctx.fillRect(cpj.x,cpj.y,cpj.width,cpj.height);
		} else {
			if (!cpj.hasHit) {
				var projImgg = new Image();
				projImgg.src = cpj.texture;
				ctx.drawImage(
					projImgg,
					cpj.x,
					cpj.y,
					cpj.width,
					cpj.height
				)
				checkOnHitProjectileHitBox(cpj);
				return;
			}
		} 
		
		var a = cpj.onFrame;
		var projImgg = new Image();
		projImgg.src = cpj.onHitTexture;
		ctx.drawImage(
			projImgg, 
			cpj.framesStart[a],
			0,
			cpj.framesStart[a+1] - cpj.framesStart[a],
			cpj.otherHeight,
			cpj.x,
			cpj.y,
			cpj.framesStart[a+1] - cpj.framesStart[a],
			cpj.otherHeight
		);
		if (cpj.onFrame == cpj.framesStart.length+1){
			cpj.ignore = true;
			for (var i = 0; i < proj2.length; i++){
				if (proj2[i].toString() == cpj.toString()){
					proj2.splice(i,1);
				}
			}
		}
		if (cpj.framePassed){
			framePassed = false;
			cpj.onFrame++;
			setTimeout(function(){
				framePassed = true;
			},cpj.frameSpeed)
		}
	}
}

function checkOnHitProjectileHitBox(cpj){
	for (var o = 0; o < players.length; o++){
		var pplr = players[o];
		if (pplr.name != cpj.name){
			var distFromX = Math.abs(cpj.x - pplr.x);
			var distFromY = Math.abs(cpj.y - pplr.y);
				
			var key = cpj.name + " " + cpj.texture;
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
				cpj.hasHit = true;
				cpj.x = pplr.x;
				cpj.y = pplr.y;
				
				if (pplr.dir == "right") { 
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
				},1000) 
			}
		}
	}
}
