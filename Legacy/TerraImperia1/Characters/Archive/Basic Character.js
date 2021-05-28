console.log("Loaded Kizaru");

/*
	
	DEFINE ANIMATIONS
	
	Last number 9999 = run once (attacks are run once by default)
	Last number 9998 = run and reset combo
	
*/

	var KizaruStandR = {
		src: "Images/OnePiece/Characters/Kizaru/StandingR.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizaruStandL = {
		src: "Images/OnePiece/Characters/Kizaru/StandingL.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizaruRunR = {
		src: "Images/OnePiece/Characters/Kizaru/RunningR.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizaruRunL = {
		src: "Images/OnePiece/Characters/Kizaru/RunningL.png",
		frames: ,
		framesStart: [],
		width:,
		height: ,
		speed: 
	};
	var KizaruJumpR = {
		src: "Images/OnePiece/Characters/Kizaru/JumpingR.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizaruJumpL = {
		src: "Images/OnePiece/Characters/Kizaru/JumpingL.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizaruHurtR = {
		src: "Images/OnePiece/Characters/Kizaru/HurtR.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizaruHurtL = {
		src: "Images/OnePiece/Characters/Kizaru/HurtL.png",
		frames: 1,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizarublockR = {
		src: "Images/OnePiece/Characters/Kizaru/BlockR.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizarublockL = {
		src: "Images/OnePiece/Characters/Kizaru/BlockL.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	var KizaruDead = {
		src: "Images/OnePiece/Characters/Kizaru/Dead.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: 
	};
	
	//ATTACKS
	var KizaruPunchR = {
		src: "Images/OnePiece/Characters/Kizaru/PunchR.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: ,
		damage: ,
		push: []
	};
	var KizaruPunchL = {
		src: "Images/OnePiece/Characters/Kizaru/PunchL.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: ,
		damage: ,
		push: []
	};
	var KizaruKickR = {
		src: "Images/OnePiece/Characters/Kizaru/KickR.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: ,
		damage: ,
		push: []
	};
	var KizaruKickL = {
		src: "Images/OnePiece/Characters/Kizaru/KickL.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: ,
		damage: ,
		push: []
	};
	var KizaruSpecialR = {
		src: "Images/OnePiece/Characters/Kizaru/SpecialR.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: ,
		damage: ,
		push: []
	};
	var KizaruSpecialL = {
		src: "Images/OnePiece/Characters/Kizaru/SpecialL.png",
		frames: ,
		framesStart: [],
		width: ,
		height: ,
		speed: ,
		damage: ,
		push: []
	};
	
	//UNIQUE ATTACKS

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

function createAttackFrameKizaru(plr, obj){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	plr.resetComboTime = obj.frames * obj.speed + 400;

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
		/*slash = {
			name: "Slash",
			combination: [lak, lak, lak]
		},*/
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
	
	var wc = checkForComboKizaru(plr);
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
		case "specialR":
			createAttackFrameKizaru(plr, KizaruSpecialR);
			break;
		case "specialL":
			createAttackFrameKizaru(plr, KizaruSpecialL);
			break;
		default:
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called.");
	}
}