var proj = [
	
];

function Projectile(X, Y, Width, Height, Texture, Speed, Direction, Damage, Lifetime, Name){
	this.name = Name;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this.texture = Texture;
	this.speed = Speed;
	this.damage = Damage;
	this.dir = Direction;
	this.ignore = false;
	setTimeout(function(){
		this.ignore = true;
	},Lifetime);
	proj.push(this);
}

function moveProjectile(){
	for (var i = 0; i < proj.length; i++){
		var cpj = proj[i];
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
	}
}

function drawProjectile(){
	for (var i = 0; i < proj.length; i++){
		var cpj = proj[i];
		if (cpj.texture == "nothing"){
			ctx.fillStyle = "black";
			ctx.fillRect(cpj.x,cpj.y,cpj.width,cpj.height);
		} else {
			var projImg = new Image();
			projImg.src = cpj.texture;
			ctx.drawImage(
				projImg,
				cpj.x,
				cpj.y,
				cpj.width,
				cpj.height
			)
		}
		checkProjectileHitBox(cpj);
	}
}

function checkProjectileHitBox(cpj){
	if (cpj.name == "Player 1"){
		pplr = players[1];
	} else {
		pplr = players[0];
	}
	var distFromX = Math.abs(cpj.x - pplr.x);
	var distFromY = Math.abs(cpj.y - pplr.y);
			
	var key = cpj.name + " " + cpj.texture + " " + cpj.dir;
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
