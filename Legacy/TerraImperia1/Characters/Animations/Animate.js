

function createNewFrame(plr, obj, xOffset, yOffset){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	
	if (obj.framesStart[a+1] == 9999){ plr.currentFrame -= 1; a -= 1; }
	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = plr.height - obj.height;
	if (sizeDiff < 0){ sizeDiff /= 2; } 
	var wDiff = (obj.framesStart[a+1] - obj.framesStart[a]) - plr.width;
	if (plr.dir == "right") { wDiff = 0; }
	
	var img = new Image();
	img.src = obj.src;
	ctx.drawImage(
		img, 
		obj.framesStart[a],
		0,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height,
		plr.x - wDiff,
		plr.y + (sizeDiff*2) - yOffset,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height
	);
	if (plr.waitForFrame !== true){
		plr.waitForFrame = true
		setTimeout(function(){
			if (plr.currentFrame < obj.frames - 1){
				plr.currentFrame += 1; 
			} else {
				plr.currentFrame = 0;
			}
			plr.waitForFrame = false;
		},plr.animationSpeed);
	}
}

function createNewAttackFrame(plr, obj, xOffset, yOffset, DamageObj){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	plr.resetComboTime = obj.frames * obj.speed + 625;

	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = plr.height - obj.height;
	if (sizeDiff < 0){ sizeDiff /= 2; } 
	var wDiff = (obj.framesStart[a+1] - obj.framesStart[a]) - plr.width;
	if (plr.dir == "right") { wDiff = 0; }
	
	var img = new Image();
	img.src = obj.src;
	ctx.drawImage(
		img, 
		obj.framesStart[a],
		0,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height,
		plr.x - wDiff,
		plr.y + (sizeDiff*2) - yOffset,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height
	);
	if (plr.waitForFrame !== true){
		plr.waitForFrame = true
		setTimeout(function(){
			if (plr.currentFrame < obj.frames - 1){
				plr.currentFrame += 1; 
			} else {
				plr.attacking = false;
				plr.currentFrame = 0;
				plr.resetValues();
				if (plr.currentAnimation == "punch2R" || plr.currentAnimation == "punch2L"){
					if(typeof plr.runPunch2 == "undefined" || plr.runPunch2 == false){
						plr.runPunch2 = true;
					}
				}
				if (plr.dir == "right"){
					plr.currentAnimation = "standR";
				} else {
					plr.currentAnimation = "standL";
				}
				if (obj.framesStart[a+1]==9998){ 
					plr.combo = [];
					plr.lastCombo = [];
					plr.runPunch2 = 
					plr.isCombo = false;
				}
				if (obj.framesStart[a+1]==9997){
					plr.resetValues();
					returnOpponent(plr).resetValues();
				}
			}
			plr.waitForFrame = false;
		},plr.animationSpeed);
	}
	var isDamageFrame = false;
	for (var i = 0; i < DamageObj.onFrames.length; i++){ if (DamageObj.onFrames[i] == a){ isDamageFrame = true; } }
	if (isDamageFrame) {checkFrameCollision(plr, obj); }
}

function createNewFrameWithProjectile(plr, obj, xOffset, yOffset, ProjectileProperties){
	var a = plr.currentFrame;
	var pp = ProjectileProperties;
	plr.animationSpeed = obj.speed;

	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = plr.height - obj.height;
	if (sizeDiff < 0){ sizeDiff /= 2; } 
	var wDiff = (obj.framesStart[a+1] - obj.framesStart[a]) - plr.width;
	if (plr.dir == "right") { wDiff = 0; }
	
	var img = new Image();
	img.src = obj.src;
	ctx.drawImage(
		img, 
		obj.framesStart[a],
		0,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height,
		plr.x - wDiff,
		plr.y + (sizeDiff*2) - yOffset,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height
	);
	if (a == pp.fireOnFrame && !plr.hasFired){
		plr.hasFired = true;
		setTimeout(function(){ plr.hasFired = false; },2000);
		var proj = new Projectile(pp.x, pp.y, pp.width, pp.height, pp.img, pp.speed, pp.direction, pp.damage, pp.lifetime, pp.name);
		if (pp.isSpecial){
			for (var i = 0; i < players.length; i++){
				players[i].stunned = false;
			}
		}
	}
	if (plr.waitForFrame !== true){
		plr.waitForFrame = true
		setTimeout(function(){
			if (plr.currentFrame < obj.frames - 1){
				plr.currentFrame += 1; 
			} else {
				plr.attacking = false;
				plr.currentFrame = 0;
				plr.resetValues();
				if (plr.dir == "right"){
					plr.currentAnimation = "standR";
				} else {
					plr.currentAnimation = "standL";
				}
				if (obj.framesStart[a+1]==9998){ 
					plr.combo = [];
					plr.lastCombo = [];
					plr.runPunch2 = 
					plr.isCombo = false;
				}
				if (obj.framesStart[a+1]==9997){
					plr.resetValues();
					returnOpponent(plr).resetValues();
				}
			}
			plr.waitForFrame = false;
		},plr.animationSpeed);
	}
}

function createNewFrameWithOnHitProjectile(plr, obj, xOffset, yOffset, ProjectileProperties){
	var a = plr.currentFrame;
	var pp = ProjectileProperties;
	plr.animationSpeed = obj.speed;

	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = plr.height - obj.height;
	if (sizeDiff < 0){ sizeDiff /= 2; } 
	var wDiff = (obj.framesStart[a+1] - obj.framesStart[a]) - plr.width;
	if (plr.dir == "right") { wDiff = 0; }
	
	var img = new Image();
	img.src = obj.src;
	ctx.drawImage(
		img, 
		obj.framesStart[a],
		0,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height,
		plr.x - wDiff,
		plr.y + (sizeDiff*2) - yOffset,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height
	);
	if (a == pp.fireOnFrame && !plr.hasFired){
		plr.hasFired = true;
		setTimeout(function(){ plr.hasFired = false; },2000);
		var proj = new onHitProjectile(
			pp.x, 
			pp.y, 
			pp.width, 
			pp.height, 
			pp.img, 
			pp.speed,
			pp.direction,
			pp.damage, 
			pp.lifetime,
			pp.name,
			pp.img2, 
			pp.img2FramesStart, 
			pp.img2Height, 
			pp.img2FrameSpeed
		);
		if (pp.isSpecial){
			plr.resetValues();
			for (var i = 0; i < players.length; i++){
				players[i].stunned = false;
			}
		}
	}
	if (plr.waitForFrame !== true){
		plr.waitForFrame = true
		setTimeout(function(){
			if (plr.currentFrame < obj.frames - 1){
				plr.currentFrame += 1; 
			} else {
				plr.attacking = false;
				plr.currentFrame = 0;
				plr.resetValues();
				if (plr.dir == "right"){
					plr.currentAnimation = "standR";
				} else {
					plr.currentAnimation = "standL";
				}
				if (obj.framesStart[a+1]==9998){ 
					plr.combo = [];
					plr.lastCombo = [];
					plr.runPunch2 = 
					plr.isCombo = false;
				}
				if (obj.framesStart[a+1]==9997){
					plr.resetValues();
					returnOpponent(plr).resetValues();
				}
			}
			plr.waitForFrame = false;
		},plr.animationSpeed);
	}
}

function stunAndResetPlayer(plr, plyr, obj){
	var key = plyr.name + " " + obj.name;
	
	plr.stunned = true;
	setTimeout(function(){
		plr.stunned = false;
	},350);
	setTimeout(function(){
		for(var o = 0; o < plr.wasDamagedBy.length; o++) {
			if (plr.wasDamagedBy[o] === key){
				plr.wasDamagedBy.splice(o, 1);
			}
		}
	},900);
}

function checkFrameCollision(plyr, obj){
	if (plyr.name == "Player 1"){ plr = players[1]; } else { plr = players[0]; }
	var reduc = 1;
	if (plr.blocking){ reduc = 4; }
	
	var a = plyr.currentFrame;
	var sizeDiff = (plr.height - obj.height)/2;
			
	var frameWidth = obj.framesStart[a+1] - obj.framesStart[a];
	var wwDiff = frameWidth - plr.width;
	if (plyr.dir == "right") { wwDiff = 0; }
			
	if (obj.framesStart[a+1] == 9998){ return; }
			
	var objX = plyr.x - wwDiff;
	var objY = plyr.y + sizeDiff;
	var objW = obj.framesStart[a+1] - obj.framesStart[a];
	var objH = obj.height;
			
	var plrX = plr.x;
	var plrY = plr.y;
	var plrW = plr.width;
	var plrH = plr.height;
		
	var distFromX = Math.abs(plrX-objX);
	var distFromY = Math.abs(plrY-objY);
			
	var key = plyr.name + " " + obj.name;
	var f = false;
	for (var o = 0; o < plr.wasDamagedBy.length; o++){ if (plr.wasDamagedBy[o] == key){ f = true; } }
	
	if (distFromX < objW && distFromY < objH && !f){
		var z = plr.wasDamagedBy.length;
				
		plr.wasDamagedBy[z] = key;
		
		plr.health -= obj.damage / reduc;
		
		plr.spAttack += plr.energyGain/2;
		plyr.spAttack += plyr.energyGain;
				
		if (plr.dir == "right") { plr.currentAnimation = "hurtR"; } else{ plr.currentAnimation = "hurtL"; }
				
		if (plyr.dir == "right"){
			plr.velX += obj.push[0];
			plr.velY += obj.push[1];
		} else {
			plr.velX -= obj.push[0];
			plr.velY += obj.push[1];
		}
		stunAndResetPlayer(plr, plyr, obj);
	}
}