console.log("Loaded Mihawk");

/*
	
	DEFINE ANIMATIONS
	
	Last number 9999 = run once (attacks are run once by default)
	Last number 9998 = run and reset combo
	
*/

	var MihawkStandR = {
		src: "Images/OnePiece/Characters/Mihawk/StandingR.png",
		frames: 4,
		framesStart: [0,94,188,284,365],
		width: 365,
		height: 72,
		speed: 270
	};
	var MihawkStandL = {
		src: "Images/OnePiece/Characters/Mihawk/StandingL.png",
		frames: 4,
		framesStart: [0,94,188,284,365],
		width: 365,
		height: 72,
		speed: 270
	};
	var MihawkRunR = {
		src: "Images/OnePiece/Characters/Mihawk/RunningR.png",
		frames: 8,
		framesStart: [0,97,192,284,375,474,575,667,755],
		width: 755,
		height: 72,
		speed: 180
	};
	var MihawkRunL = {
		src: "Images/OnePiece/Characters/Mihawk/RunningL.png",
		frames: 8,
		framesStart: [0,97,192,284,375,474,575,667,755],
		width: 755,
		height: 72,
		speed: 180
	};
	var MihawkJumpR = {
		src: "Images/OnePiece/Characters/Mihawk/JumpingR.png",
		frames: 7,
		framesStart: [0,67,136,206,277,336,393,463],
		width: 463,
		height: 71,
		speed: 250
	};
	var MihawkJumpL = {
		src: "Images/OnePiece/Characters/Mihawk/JumpingL.png",
		frames: 7,
		framesStart: [0,67,136,206,277,336,393,463],
		width: 463,
		height: 71,
		speed: 250
	};
	var MihawkHurtR = {
		src: "Images/OnePiece/Characters/Mihawk/HurtR.png",
		frames: 1,
		framesStart: [0,54],
		width: 54,
		height: 59,
		speed: 300
	};
	var MihawkHurtL = {
		src: "Images/OnePiece/Characters/Mihawk/HurtL.png",
		frames: 1,
		framesStart: [0,54],
		width: 54,
		height: 59,
		speed: 300
	};
	var MihawkblockR = {
		src: "Images/OnePiece/Characters/Mihawk/BlockR.png",
		frames: 1,
		framesStart: [0,44],
		width: 44,
		height: 81,
		speed: 100
	};
	var MihawkblockL = {
		src: "Images/OnePiece/Characters/Mihawk/BlockL.png",
		frames: 1,
		framesStart: [0,44],
		width: 44,
		height: 81,
		speed: 100
	};
	var MihawkDead = {
		src: "Images/OnePiece/Characters/Mihawk/Dead.png",
		frames: 1,
		framesStart: [0,84],
		width: 84,
		height: 26,
		speed: 100
	};
	
	//ATTACKS
	var MihawkPunchR = {
		src: "Images/OnePiece/Characters/Mihawk/PunchR.png",
		frames: 6,
		framesStart: [0,70,150,244,336,382,435],
		width: 435,
		height: 88,
		speed: 60,
		damage: 2,
		push: [4.8,3]
	};
	var MihawkPunchL = {
		src: "Images/OnePiece/Characters/Mihawk/PunchL.png",
		frames: 6,
		framesStart: [0,70,150,244,336,382,435],
		width: 435,
		height: 88,
		speed: 60,
		damage: 2,
		push: [4.8,3]
	};
	var MihawkKickR = {
		src: "Images/OnePiece/Characters/Mihawk/KickR.png",
		frames: 7,
		framesStart: [0,67,138,242,366,472,556,630],
		width: 630,
		height: 69,
		speed: 70,
		damage: 3.5,
		push: [6,3.6]
	};
	var MihawkKickL = {
		src: "Images/OnePiece/Characters/Mihawk/KickL.png",
		frames: 7,
		framesStart: [0,67,138,242,366,472,556,630],
		width: 630,
		height: 69,
		speed: 70,
		damage: 3.5,
		push: [6,3.6]
	};
	var MihawkSpecialR = {
		src: "Images/OnePiece/Characters/Mihawk/SpecialR.png",
		frames: 10,
		framesStart: [0,85,187,275,397,519,639,759,879,950,9995],
		width: 950,
		height: 122,
		speed: 60,
		damage: 3.5,
		push: [6,3.6]
	};
	var MihawkSpecialL = {
		src: "Images/OnePiece/Characters/Mihawk/SpecialL.png",
		frames: 10,
		framesStart: [0,85,187,275,397,519,639,759,879,950,9995],
		width: 950,
		height: 122,
		speed: 60,
		damage: 3.5,
		push: [6,3.6]
	};
	
	//UNIQUE ATTACKS
	var MihawkPunch2R = {
		src: "Images/OnePiece/Characters/Mihawk/Punch2R.png",
		frames: 8,
		framesStart: [0,92,186,290,386,445,510,597,710],
		width: 710,
		height: 110,
		speed: 70 ,
		damage: 2,
		push: [5,3]
	};
	var MihawkPunch2L = {
		src: "Images/OnePiece/Characters/Mihawk/Punch2L.png",
		frames: 8,
		framesStart: [0,92,186,290,386,445,509,597,710],
		width: 710,
		height: 110,
		speed: 70, 
		damage: 2,
		push: [5,3]
	};
	var MihawkSlashR = {
		src: "Images/OnePiece/Characters/Mihawk/SlashR.png",
		frames: 11,
		framesStart: [0,81,178,273,387,470,579,699,819,937,1038,9998],
		width: 1120,
		height: 159,
		speed: 120,
		damage: 8,
		push: [8,4]
	};
	var MihawkSlashL = {
		src: "Images/OnePiece/Characters/Mihawk/SlashL.png",
		frames: 11,
		framesStart: [0,81,178,273,387,470,579,699,819,937,1038,9998],
		width: 1120,
		height: 159,
		speed: 120,
		damage: 8,
		push: [8,4]
	};
	var MihawkKick2R = {
		src: "Images/OnePiece/Characters/Mihawk/Kick2R.png",
		frames: 8,
		framesStart: [0,77,151,247,361,451,533,622,9998],
		width: 622,
		height: 127,
		speed: 120,
		damage: 3,
		push: [3.8,2.5]
	};
	var MihawkKick2L = {
		src: "Images/OnePiece/Characters/Mihawk/Kick2L.png",
		frames: 8,
		framesStart: [0,77,151,247,361,451,533,622,9998],
		width: 622,
		height: 127,
		speed: 120,
		damage: 3,
		push: [3.8,2.5]
	};

/*

	ALL FUNCTIONS

*/


function createFrameMihawk(plr, obj){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	
	if (obj.framesStart[a+1] == 9999){ plr.currentFrame -= 1; a -= 1; }
	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = (plr.height - obj.height)/2;
	//if (sizeDiff < 0){ sizeDiff = 0; } 
	
	var img = new Image();
	img.src = obj.src;
	ctx.drawImage(
		img, 
		obj.framesStart[a],
		0,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height,
		plr.x,
		plr.y + (sizeDiff*2),
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

function createAttackFrameMihawk(plr, obj){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	plr.resetComboTime = obj.frames * obj.speed + 550;

	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = (plr.height - obj.height)/2;
	//if (sizeDiff < 0){ sizeDiff = 0; } 
	var wwDiff = (obj.framesStart[a+1] - obj.framesStart[a]) - plr.width-45;
	if (plr.dir == "right") { wwDiff = 0; }
	
	var img = new Image();
	img.src = obj.src;
	ctx.drawImage(
		img, 
		obj.framesStart[a],
		0,
		obj.framesStart[a+1] - obj.framesStart[a],
		obj.height,
		plr.x - wwDiff,
		plr.y + (sizeDiff*2),
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
				plr.speed = plr.speed * 10;
				if (plr.dir == "right"){
					plr.currentAnimation = "standR";
				} else {
					plr.currentAnimation = "standL";
				}
				if(obj.framesStart[a+1]==9998){ 
					plr.combo = [];
					plr.lastCombo = [];
					plr.isCombo = false;
				} else if (obj.framesStart[a+1]==9995){
					if (plr.dir == "right"){
						var mihawkblast = new Projectile(plr.x+plr.width, plr.y-90, 150, 180, "Images/OnePiece/Characters/Mihawk/Projectile_1_R.png", 12, "right",35, 10*100, plr.name);
						plr.resetValues();
					} else if(plr.dir == "left"){
						var mihawkblast = new Projectile(plr.x,			  plr.y-90, 150, 180, "Images/OnePiece/Characters/Mihawk/Projectile_1_L.png", 12, "left", 35, 10*100, plr.name);
						plr.resetValues();
					}
					for (var i = 0; i < players.length; i++){
						players[i].stunned = false;
					}
				}
			}
			plr.waitForFrame = false;
		},plr.animationSpeed);
	}
}

function stunAndResetPlayerMihawk(plr, plyr, obj){
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

function checkAttackHitBoxMihawk(plyr, mobj){
	var atkrN = plyr.name;
	
	for (var i = 0; i < players.length; i++){
		
		var plr = players[i];
		
		if (plr.name == atkrN){
			
		} else {
			if (plr.blocking){ return; }
		
			var a = plyr.currentFrame;
			var sizeDiff = (plr.height - mobj.height)/2;
			
			var frameWidth = mobj.framesStart[a+1] - mobj.framesStart[a];
			var wwDiff = frameWidth - plr.width;
			if (plyr.dir == "right") { wwDiff = 0; }
			
			if (mobj.framesStart[a+1] == 9998){ return; }
			
			var MihawkobjX = plyr.x - wwDiff;
			var MihawkobjY = plyr.y + sizeDiff;
			var MihawkobjW = mobj.framesStart[a+1] - mobj.framesStart[a] - 40 ;
			var MihawkobjH = mobj.height;
			
			var plrX = plr.x;
			var plrY = plr.y;
			var plrW = plr.width;
			var plrH = plr.height;
		
			var distFromX = Math.abs(plrX-MihawkobjX);
			var distFromY = Math.abs(plrY-MihawkobjY);
			
			var key = plyr.name + " " + mobj.name;
			var f = false;
			for (var o = 0; o < plr.wasDamagedBy.length; o++){ if (plr.wasDamagedBy[o] == key){ f = true; } }
			
			if (distFromX < MihawkobjW && distFromY < MihawkobjH && !f){
				var z = plr.wasDamagedBy.length;
				
				plr.wasDamagedBy[z] = key;
				plr.health -= mobj.damage;
				plr.spAttack += plr.spAttack/2;
				plyr.spAttack += plyr.spAttack;
				
				if (plr.dir == "right") { plr.currentAnimation = "hurtR"; } else{ plr.currentAnimation = "hurtL"; }
				
				if (plyr.dir == "right"){
					plr.velX += mobj.push[0];
					plr.velY -= mobj.push[1];
				} else {
					plr.velX -= mobj.push[0];
					plr.velY -= mobj.push[1];
				}
				stunAndResetPlayer(plr, plyr, mobj);
			}
		}
	
	}
}

function checkForComboMihawk(plr){
	var c = plr.combo;
	
	var lak = 	plr.controls[1].light;
	var hak = 	plr.controls[1].heavy;
	
	var combosMihawk = [
		slash = {
			name: "Slash",
			combination: [lak, lak, lak]
		},
		attack2 = {
			name: "kick2",
			combination: [hak, lak, hak]
		}
	];
	
	var returnValue = "nothing";
	
	for (var i = 0; i < combosMihawk.length; i++){
		var array1 = c.toString();
		var array2 = combosMihawk[i].combination.toString();
		if (array1 === array2){
			if (plr.dir == "right"){
				returnValue = combosMihawk[i].name + "R";
			} else if(plr.dir == "left"){
				returnValue = combosMihawk[i].name + "L";
			}
		} 	
	}
	return returnValue;
}

/*

	MAIN FUNCTION

*/

function Mihawk(plr){
	var cas = plr.animationSpeed;
	
	var lak = 	plr.controls[1].light;
	var mcmb = [lak,lak];
	if (plr.combo.toString() == mcmb.toString()){
		if (plr.dir == "right"){
			plr.currentAnimation = "punch2R";
		} else if(plr.dir == "left"){
			plr.currentAnimation = "punch2L";
		}
	}
	
	var wc = checkForComboMihawk(plr);
	if (wc == "nothing"){ 
	
	} else { 
		plr.isCombo = true;
		plr.currentAnimation = wc;
	}
	
	if (plr.currentAnimation == "tryAndAttack"){
		for (var i = 0; i < players.length; i++){
			var tarPlr = players[i];
			if (tarPlr.name == plr.name){
				
			} else {
				if (tarPlr.blocking){
					plr.currentAnimation = "standR";
				} else{
					plr.stunned = true;
					tarPlr.stunned = true;
					if (plr.dir == "right"){
						plr.currentAnimation = "specialR";
					} else {
						plr.currentAnimation = "specialL";
					}
				}
			}
		}
		return;
	}
	
	switch(plr.currentAnimation){
		case "standR":
			createFrameMihawk(plr, MihawkStandR);
			break;
		case "standL":
			createFrameMihawk(plr, MihawkStandL);
			break;
		case "runR":
			createFrameMihawk(plr, MihawkRunR);
			break;
		case "runL":
			createFrameMihawk(plr, MihawkRunL);
			break;
		case "jumpR":
			createFrameMihawk(plr, MihawkJumpR);
			break;
		case "jumpL":
			createFrameMihawk(plr, MihawkJumpL);
			break;
		case "hurtR":
			createFrameMihawk(plr, MihawkHurtR);
			break;
		case "hurtL":
			createFrameMihawk(plr, MihawkHurtL);
			break;
		case "blockR":
			createFrameMihawk(plr, MihawkblockR);
			break;
		case "blockL":
			createFrameMihawk(plr, MihawkblockL);
			break;
		case "dead":
			createFrameMihawk(plr, MihawkDead);
			break;
		case "lattackR":
			createAttackFrameMihawk(plr, MihawkPunchR);
			checkAttackHitBoxMihawk(plr, MihawkPunchR);
			break;
		case "lattackL":
			createAttackFrameMihawk(plr, MihawkPunchL);
			checkAttackHitBoxMihawk(plr, MihawkPunchL);
			break;
		case "punch2R":
			createAttackFrameMihawk(plr, MihawkPunch2R);
			checkAttackHitBoxMihawk(plr, MihawkPunch2R);
			break;
		case "punch2L":
			createAttackFrameMihawk(plr, MihawkPunch2L);
			checkAttackHitBoxMihawk(plr, MihawkPunch2L);
			break;
		case "kick2R":
			createAttackFrameMihawk(plr, MihawkKick2R);
			checkAttackHitBoxMihawk(plr, MihawkKick2R);
			break;
		case "kick2L":
			createAttackFrameMihawk(plr, MihawkKick2L);
			checkAttackHitBoxMihawk(plr, MihawkKick2L);
			break;
		case "hattackR":
			createAttackFrameMihawk(plr, MihawkKickR);
			checkAttackHitBoxMihawk(plr, MihawkKickR);
			break;
		case "hattackL":
			createAttackFrameMihawk(plr, MihawkKickL);
			checkAttackHitBoxMihawk(plr, MihawkKickL);
			break;
		case "SlashR":
			createAttackFrameMihawk(plr, MihawkSlashR);
			checkAttackHitBoxMihawk(plr, MihawkSlashR);
			break;
		case "SlashL":
			createAttackFrameMihawk(plr, MihawkSlashL);
			checkAttackHitBoxMihawk(plr, MihawkSlashL);
			break;
		case "specialR":
			createAttackFrameMihawk(plr, MihawkSpecialR);
			break;
		case "specialL":
			createAttackFrameMihawk(plr, MihawkSpecialL);
			break;
		default:
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called.");
	}
}