console.log("Loaded Kizaru");

/*
	
	DEFINE ANIMATIONS
	
	Last number 9999 = run once (attacks are run once by default)
	Last number 9998 = run and reset combo
	
*/

	var KizaruStandR = {
		src: "Images/OnePiece/Characters/Kizaru/StandingR.png",
		frames: 4,
		framesStart: [0,39,77,115,153],
		width: 153,
		height: 79,
		speed: 250
	};
	var KizaruStandL = {
		src: "Images/OnePiece/Characters/Kizaru/StandingL.png",
		frames: 4,
		framesStart: [0,39,77,115,153],
		width: 153,
		height: 79,
		speed: 250
	};
	var KizaruRunR = {
		src: "Images/OnePiece/Characters/Kizaru/RunningR.png",
		frames: 8,
		framesStart: [0,44,101,151,199,244,295,340,378],
		width: 378,
		height: 78,
		speed: 150
	};
	var KizaruRunL = {
		src: "Images/OnePiece/Characters/Kizaru/RunningL.png",
		frames: 08,
		framesStart: [0,44,101,151,199,244,295,340,378],
		width: 378,
		height: 78,
		speed: 150
	};
	var KizaruJumpR = {
		src: "Images/OnePiece/Characters/Kizaru/JumpingR.png",
		frames: 6,
		framesStart: [0,52,97,179,237,294,352],
		width: 352,
		height: 96,
		speed: 230
	};
	var KizaruJumpL = {
		src: "Images/OnePiece/Characters/Kizaru/JumpingL.png",
		frames: 6,
		framesStart: [0,52,97,179,237,294,352],
		width: 352,
		height: 96,
		speed: 230
	};
	var KizaruHurtR = {
		src: "Images/OnePiece/Characters/Kizaru/HurtR.png",
		frames: 1,
		framesStart: [0,74],
		width: 74,
		height: 71,
		speed: 100
	};
	var KizaruHurtL = {
		src: "Images/OnePiece/Characters/Kizaru/HurtL.png",
		frames: 1,
		framesStart: [0,74],
		width: 74,
		height: 71,
		speed: 100
	};
	var KizarublockR = {
		src: "Images/OnePiece/Characters/Kizaru/BlockR.png",
		frames: 4,
		framesStart: [0,39,77,117,155],
		width: 155,
		height: 78,
		speed: 200
	};
	var KizarublockL = {
		src: "Images/OnePiece/Characters/Kizaru/BlockL.png",
		frames: 4,
		framesStart: [0,39,77,117,155],
		width: 155,
		height: 78,
		speed: 200
	};
	var KizaruDead = {
		src: "Images/OnePiece/Characters/Kizaru/Dead.png",
		frames: 1,
		framesStart: [0,78],
		width: 78,
		height: 27,
		speed: 100
	};
	
	//ATTACKS
	var KizaruPunchR = {
		src: "Images/OnePiece/Characters/Kizaru/PunchR.png",
		frames: 7,
		framesStart: [0,39,110,220,331,434,530,623],
		width: 623,
		height: 128,
		speed: 80,
		damage: 2,
		push: [4.5,2.5]
	};
	var KizaruPunchL = {
		src: "Images/OnePiece/Characters/Kizaru/PunchL.png",
		frames: 7,
		framesStart: [0,39,110,220,331,434,530,623],
		width: 128,
		height: 128,
		speed: 80,
		damage: 2,
		push: [4.5,2.5]
	};
	var KizaruKickR = {
		src: "Images/OnePiece/Characters/Kizaru/KickR.png",
		frames: 11,
		framesStart: [0,47,98,149,249,394,528,654,737,814,863],
		width: 863,
		height: 90,
		speed: 80,
		damage: 2,
		push: [6,2]
	};
	var KizaruKickL = {
		src: "Images/OnePiece/Characters/Kizaru/KickL.png",
		frames: 11,
		framesStart: [0,47,98,149,249,394,528,654,737,814,863],
		width: 863,
		height: 90,
		speed: 80,
		damage: 2,
		push: [6,2]
	};
	var KizaruSpecial = {
		src: "Images/OnePiece/Characters/Kizaru/Special.png",
		frames: 7,
		framesStart: [0,64,126,192,252,305,362,9995,9997],
		width: 405,
		height: 81,
		speed: 100,
		damage: 35,
		push: [0,0]
	};
	
	//UNIQUE ATTACKS
	var KizaruPunch2R = {
		src: "Images/OnePiece/Characters/Kizaru/Punch2R.png",
		frames: 5,
		framesStart: [0,62,187,312,425,530,9999],
		width: 530,
		height: 83,
		speed: 80,
		damage: 2,
		push: [3,-3]
	};
	var KizaruPunch2L = {
		src: "Images/OnePiece/Characters/Kizaru/Punch2L.png",
		frames: 5,
		framesStart: [0,62,187,312,425,530,9999],
		width: 530,
		height: 83,
		speed: 80,
		damage: 2,
		push: [3,-3]
	};
	var KizaruPunch3R = {
		src: "Images/OnePiece/Characters/Kizaru/Punch3R.png",
		frames: 8,
		framesStart: [0,76,169,266,407,547,684,806,9998],
		width: 806,
		height: 79,
		speed: 80,
		damage: 5,
		push: [15,2]
	};
	var KizaruPunch3L = {
		src: "Images/OnePiece/Characters/Kizaru/Punch3L.png",
		frames: 8,
		framesStart: [0,76,169,266,407,547,684,806,9998],
		width: 806,
		height: 79,
		speed: 80,
		damage: 5,
		push: [15,2]
	};
	var KizaruKick2R = {
		src: "Images/OnePiece/Characters/Kizaru/Kick2R.png",
		frames: 13,
		framesStart: [0,47,98,148,250,368,480,595,695,795,888,975,1057,9998,9994],
		width: 1057,
		height: 88,
		speed: 80,
	};
	var KizaruKick2L = {
		src: "Images/OnePiece/Characters/Kizaru/Kick2.png",
		frames: 13,
		framesStart: [0,47,98,148,250,368,480,595,695,795,888,975,1057,9998,9994],
		width: 1057,
		height: 88,
		speed: 80,
	};
	
/*

	ALL FUNCTIONS

*/


function createFrameKizaru(plr, obj){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	
	if (obj.framesStart[a+1] == 9999){ plr.currentFrame -= 1; a -= 1; }
	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = (plr.height - obj.height)/2;
	//if (sizeDiff < 0){ sizeDiff = 0; } 
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

function createAttackFrameKizaru(plr, obj){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	plr.resetComboTime = obj.frames * obj.speed + 550;

	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = (plr.height - obj.height)/2;
	//if (sizeDiff < 0){ sizeDiff = 0; } 
	var wwDiff = (obj.framesStart[a+1] - obj.framesStart[a]) - plr.width;
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
				if(obj.framesStart[obj.frames+1]==9994){
					setTimeout(function(){
						if (plr.dir == "right"){
							var kickeff = new onHitProjectile(plr.x+plr.width,plr.y,230,20,"Images/OnePiece/Characters/Kizaru/Laser1.png",25,"right",8,999999,plr.name,"Images/OnePiece/Characters/Kizaru/Laser1Explosion.png",[0,39,88,137,186,245,294,353,435,526,617],96,250);
						} else {
							var kickeff = new onHitProjectile(plr.x+plr.width,plr.y,230,20,"Images/OnePiece/Characters/Kizaru/Laser1.png",25,"left",8,999999,plr.name,"Images/OnePiece/Characters/Kizaru/Laser1Explosion.png",[0,39,88,137,186,245,294,353,435,526,617],96,250);
						}
						plr.stunned = false;
					},450)
				} else if(obj.framesStart[obj.frames]==9995 && a == 1){
					setTimeout(function(){
						var kickeff = new onHitProjectile(plr.x,plr.y,30,10,"Images/OnePiece/Characters/Kizaru/Laser.png",80,"growdown",35,999999,plr.name,"Images/OnePiece/Characters/Kizaru/Laser1Explosion.png",[0,39,88,137,186,245,294,353,435,526,617],96,250);
					},200)
				}
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
				} else if(obj.framesStart[a+2]==9997){
					for (var i = 0; i < players.length; i++){
						players[i].stunned = false;
					}
				}
				if(obj.framesStart[a+1]==9995){
					plr.resetValues();
				}
			}
			plr.waitForFrame = false;
		},plr.animationSpeed);
	}
}

function stunAndResetPlayerKizaru(plr, plyr, obj){
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

function checkAttackHitBoxKizaru(plyr, mobj){
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
			
			var KizaruobjX = plyr.x - wwDiff;
			var KizaruobjY = plyr.y + sizeDiff;
			var KizaruobjW = mobj.framesStart[a+1] - mobj.framesStart[a] - 40 ;
			var KizaruobjH = mobj.height;
			
			var plrX = plr.x;
			var plrY = plr.y;
			var plrW = plr.width;
			var plrH = plr.height;
		
			var distFromX = Math.abs(plrX-KizaruobjX);
			var distFromY = Math.abs(plrY-KizaruobjY);
			
			var key = plyr.name + " " + mobj.name;
			var f = false;
			for (var o = 0; o < plr.wasDamagedBy.length; o++){ if (plr.wasDamagedBy[o] == key){ f = true; } }
			
			if (distFromX < KizaruobjW && distFromY < KizaruobjH && !f){
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

function checkForComboKizaru(plr){
	var c = plr.combo;
	
	var lak = 	plr.controls[1].light;
	var hak = 	plr.controls[1].heavy;
	
	var combosKizaru = [
		stab = {
			name: "punch3",
			combination: [lak, lak, lak]
		}
	];
	
	var returnValue = "nothing";
	
	for (var i = 0; i < combosKizaru.length; i++){
		var array1 = c.toString();
		var array2 = combosKizaru[i].combination.toString();
		if (array1 === array2){
			if (plr.dir == "right"){
				returnValue = combosKizaru[i].name + "R";
			} else if(plr.dir == "left"){
				returnValue = combosKizaru[i].name + "L";
			}
		} 	
	}
	return returnValue;
}

/*

	MAIN FUNCTION

*/

function Kizaru(plr){
	var cas = plr.animationSpeed;
	
	var lak = 	plr.controls[1].light;
	var hak = 	plr.controls[1].heavy;
	var mcmb = [lak,lak];
	if (plr.combo.toString() == mcmb.toString()){
		if (plr.dir == "right"){
			plr.currentAnimation = "punch2R";
		} else if(plr.dir == "left"){
			plr.currentAnimation = "punch2L";
		}
	}
	
	var wc = checkForComboKizaru(plr);
	if (wc == "nothing"){ 
	
	} else { 
		plr.isCombo = true;
		plr.currentAnimation = wc;
	}
	
	if (typeof plr.canKick == "undefined"){ plr.canKick = true; plr.kickcd = 8000; }
	
	if (keys[lak] && keys[hak] && plr.canKick && !plr.stunned){
		plr.stunned = true;
		plr.canKick = false;
		if (plr.dir == "right"){
			plr.currentAnimation = "kick2R";
		} else {
			plr.currentAnimation = "kick2L";
		}
		setTimeout(function(){
			plr.canKick = true;
		},plr.kickcd)
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
					plr.x = tarPlr.x;
					plr.y = tarPlr.y - 200
					plr.gravity = 0;
					plr.currentAnimation = "special";
				}
			}
		}
		return;
	}
	
	switch(plr.currentAnimation){
		case "standR":
			createFrameKizaru(plr, KizaruStandR);
			break;
		case "standL":
			createFrameKizaru(plr, KizaruStandL);
			break;
		case "runR":
			createFrameKizaru(plr, KizaruRunR);
			break;
		case "runL":
			createFrameKizaru(plr, KizaruRunL);
			break;
		case "jumpR":
			createFrameKizaru(plr, KizaruJumpR);
			break;
		case "jumpL":
			createFrameKizaru(plr, KizaruJumpL);
			break;
		case "hurtR":
			createFrameKizaru(plr, KizaruHurtR);
			break;
		case "hurtL":
			createFrameKizaru(plr, KizaruHurtL);
			break;
		case "blockR":
			createFrameKizaru(plr, KizarublockR);
			break;
		case "blockL":
			createFrameKizaru(plr, KizarublockL);
			break;
		case "dead":
			createFrameKizaru(plr, KizaruDead);
			break;
		//ATTACKS
		case "lattackR":
			createAttackFrameKizaru(plr, KizaruPunchR);
			checkAttackHitBoxKizaru(plr, KizaruPunchR);
			break;
		case "lattackL":
			createAttackFrameKizaru(plr, KizaruPunchL);
			checkAttackHitBoxKizaru(plr, KizaruPunchL);
			break;
		case "hattackR":
			createAttackFrameKizaru(plr, KizaruKickR);
			checkAttackHitBoxKizaru(plr, KizaruKickR);
			break;
		case "hattackL":
			createAttackFrameKizaru(plr, KizaruKickL);
			checkAttackHitBoxKizaru(plr, KizaruKickL);
			break;
		case "special":
			createAttackFrameKizaru(plr, KizaruSpecial);
			break;
		//UNIQUE ATTACKS
		case "kick2R":
			createAttackFrameKizaru(plr, KizaruKick2R);
			break;
		case "kick2L":
			createAttackFrameKizaru(plr, KizaruKick2L);
			break;
		case "punch2R":
			createAttackFrameKizaru(plr, KizaruPunch2R);
			checkAttackHitBoxKizaru(plr, KizaruPunch2R);
			break;
		case "punch2L":
			createAttackFrameKizaru(plr, KizaruPunch2L);
			checkAttackHitBoxKizaru(plr, KizaruPunch2L);
			break;
		case "punch3R":
			createAttackFrameKizaru(plr, KizaruPunch3R);
			checkAttackHitBoxKizaru(plr, KizaruPunch3R);
			break;
		case "punch3L":
			createAttackFrameKizaru(plr, KizaruPunch3L);
			checkAttackHitBoxKizaru(plr, KizaruPunch3L);
			break;
		default:
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called.");
	}
}