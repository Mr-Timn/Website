console.log("Loaded Luffy");

/*
	
	DEFINE ANIMATIONS
	
	Last number 9999 = run once
	Last number 9998 = run and reset combo
	Last number 9997 = special
	
*/

	var standR = {
		src: "Images/OnePiece/Characters/Luffy/StandingR.png",
		frames: 3,
		framesStart: [0,42,85,127],
		width: 127,
		height: 64,
		speed: 250
	};
	var standL = {
		src: "Images/OnePiece/Characters/Luffy/StandingL.png",
		frames: 3,
		framesStart: [0,42,85,127],
		width: 127,
		height: 64,
		speed: 250
	};
	var runR = {
		src: "Images/OnePiece/Characters/Luffy/RunningR.png",
		frames: 8,
		framesStart: [0,48,97,154,204,254,305,363,410],
		width: 410,
		height: 60,
		speed: 150
	};
	var runL = {
		src: "Images/OnePiece/Characters/Luffy/RunningL.png",
		frames: 8,
		framesStart: [0,48,97,154,204,254,305,363,410],
		width: 410,
		height: 60,
		speed: 150
	};
	var jumpR = {
		src: "Images/OnePiece/Characters/Luffy/JumpingR.png",
		frames: 6,
		framesStart: [0,34,69,111,154,195,9999],
		width: 195,
		height: 71,
		speed: 250
	};
	var jumpL = {
		src: "Images/OnePiece/Characters/Luffy/JumpingL.png",
		frames: 6,
		framesStart: [0,34,69,111,154,195,9999],
		width: 195,
		height: 71,
		speed: 250
	};
	var hurtR = {
		src: "Images/OnePiece/Characters/Luffy/HurtR.png",
		frames: 3,
		framesStart: [0,51,94,129],
		width: 129,
		height: 53,
		speed: 300
	};
	var hurtL = {
		src: "Images/OnePiece/Characters/Luffy/HurtL.png",
		frames: 3,
		framesStart: [0,51,94,129],
		width: 129,
		height: 53,
		speed: 300
	};
	var blockR = {
		src: "Images/OnePiece/Characters/Luffy/BlockR.png",
		frames: 1,
		framesStart: [0,32],
		width: 32,
		height: 64,
		speed: 100
	};
	var blockL = {
		src: "Images/OnePiece/Characters/Luffy/BlockL.png",
		frames: 1,
		framesStart: [0,32],
		width: 32,
		height: 64,
		speed: 100
	};
	
	var dead = {
		src: "Images/OnePiece/Characters/Luffy/Dead.png",
		frames: 1,
		framesStart: [0,69],
		width: 69,
		height: 17,
		speed: 100
	};
	
	//ATTACKS
	var punchR = {
		src: "Images/OnePiece/Characters/Luffy/PunchR.png",
		frames: 5,
		framesStart: [0,41,83,147,214,256],
		width: 256,
		height: 61,
		speed: 100,
		damage: 2,
		push: [4.8,3]
	};
	var punchL = {
		src: "Images/OnePiece/Characters/Luffy/PunchL.png",
		frames: 5,
		framesStart: [0,41,83,147,214,256],
		width: 256,
		height: 61,
		speed: 100,
		damage: 2,
		push: [4.8,3]
	};
	var kickR = {
		src: "Images/OnePiece/Characters/Luffy/KickR.png",
		frames: 9,
		framesStart: [0,46,90,137,174,231,289,342,392,432],
		width: 432,
		height: 69,
		speed: 50,
		damage: 3.5,
		push: [6,3.6]
	};
	var kickL = {
		src: "Images/OnePiece/Characters/Luffy/KickL.png",
		frames: 9,
		framesStart: [0,46,90,137,174,231,289,342,392,432],
		width: 432,
		height: 69,
		speed: 50,
		damage: 3.5,
		push: [6,3.6]
	};
	var specialR = {
		src: "Images/OnePiece/Characters/Luffy/SpecialR.png",
		frames: 22,
		framesStart: [0,47,100,169,239,311,393,464,513,606,763,921,1080,1239,1345,1504,1706,1911,2116,2306,2494,2575,9997],
		width: 2575,
		height: 82,
		speed: 150,
		damage: 35,
		push: [10,5]
	};
	var specialL = {
		src: "Images/OnePiece/Characters/Luffy/SpecialL.png",
		frames: 22,
		framesStart: [0,47,100,169,239,311,393,464,513,606,763,921,1080,1239,1345,1504,1706,1911,2116,2306,2494,2575,9997],
		width: 2575,
		height: 82,
		speed: 150,
		damage: 35,
		push: [10,5]
	};
	
	//Unique Attacks
	var pistolR = {
		src: "Images/OnePiece/Characters/Luffy/PistolR.png",
		frames: 20,
		framesStart: [0,41,83,147,215,291,374,462,562,666,777,894,1006,1108,1206,1297,1385,1462,1534,1580,9998],
		width: 1580,
		height: 60,
		speed: 30,
		damage: 5,
		push: [8,3.6]
	};
	var pistolL = {
		src: "Images/OnePiece/Characters/Luffy/PistolL.png",
		frames: 20,
		framesStart: [0,41,83,147,215,291,374,462,562,666,777,894,1006,1108,1206,1297,1385,1462,1534,1580,9998],
		width: 1580,
		height: 60,
		speed: 30,
		damage: 5,
		push: [8,3.6]
	};
	var gear3kickR = {
		src: "Images/OnePiece/Characters/Luffy/Gear3KickR.png",
		frames: 21,
		framesStart: [0,47,100,169,238,311,390,471,552,642,726,817,926,1034,1185,1348,1504,1655,1767,1820,1865,9998],
		width: 1865,
		height: 77,
		speed: 100,
		damage: 10,
		push: [15,4]
	};
	var gear3kickL = {
		src: "Images/OnePiece/Characters/Luffy/Gear3KickL.png",
		frames: 21,
		framesStart: [0,47,100,169,238,311,390,471,552,642,726,817,926,1034,1185,1348,1504,1655,1767,1820,1865,9998],
		width: 1865,
		height: 77,
		speed: 100,
		damage: 10,
		push: [15,4]
	};

/*

	ALL FUNCTIONS

*/


function createFrame(plr, obj){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	
	if (obj.framesStart[a+1] == 9999){ plr.currentFrame -= 1; a -= 1; }
	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = plr.height - obj.height;
	if (sizeDiff < 0){ sizeDiff = 0; } 
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
		plr.y + (sizeDiff*2) - 1,
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

function createAttackFrame(plr, obj){
	var a = plr.currentFrame;
	plr.animationSpeed = obj.speed;
	plr.resetComboTime = obj.frames * obj.speed + 400;

	if (plr.currentFrame >= obj.frames){ plr.currentFrame = 0; }
	
	var sizeDiff = plr.height - obj.height;
	if (sizeDiff < 0){ sizeDiff = 0; } 
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
		plr.y + (sizeDiff*2) - 1,
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
				plr.speed = plr.realspeed;
				if (plr.dir == "right"){
					plr.currentAnimation = "standR";
				} else {
					plr.currentAnimation = "standL";
				}
				
				if(obj.framesStart[a+1]==9998){ 
					plr.combo = [];
					plr.lastCombo = [];
					plr.isCombo = false;
				} else if(obj.framesStart[a+1]==9997){
					for (var i = 0; i < players.length; i++){
						players[i].stunned = false;
					}
				}
			}
			plr.waitForFrame = false;
		},plr.animationSpeed);
	}
}

function stunAndResetPlayer(plr, plyr, obj){
	var key = plyr.name + " " + obj.name;
	var lt = (obj.speed * obj.frames) - (plr.currentFrame * obj.speed);
	
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
	},lt+150);
}

function checkAttackHitBox(plyr, zobj){
	var atkrN = plyr.name;
	
	for (var i = 0; i < players.length; i++){
		
		var plr = players[i];
		
		if (plr.name == atkrN){
			
		} else {
			if (plr.blocking){ return; }
			
			var a = plyr.currentFrame;
			var sizeDiff = plr.height - zobj.height;
			var frameWidth = zobj.framesStart[a+1] - zobj.framesStart[a];
			var wDiff = frameWidth - plr.width;
			if (plyr.dir == "right") { wDiff = 0; }
			
			if (zobj.framesStart[a+1] == 9998){ return; }
			
			var zobjX = plyr.x - wDiff;
			var zobjY = plyr.y + (sizeDiff*2) - 1;
			var zobjW = zobj.framesStart[a+1] - zobj.framesStart[a];
			var zobjH = zobj.height;
			
			var plrX = plr.x;
			var plrY = plr.y;
			var plrW = plr.width;
			var plrH = plr.height;
		
			var distFromX = Math.abs(plrX-zobjX);
			var distFromY = Math.abs(plrY-zobjY);
			
			var key = plyr.name + " " + zobj.name;
			var f = false;
			for (var o = 0; o < plr.wasDamagedBy.length; o++){ if (plr.wasDamagedBy[o] == key){ f = true; } }
			
			if (distFromX < zobjW && distFromY < zobjH && !f){
				var z = plr.wasDamagedBy.length;
				
				plr.wasDamagedBy[z] = key;
				plr.health -= zobj.damage;
				plr.spAttack += plr.energyGain/2;
				plyr.spAttack += plyr.energyGain;
				
				if (plr.dir == "right") { plr.currentAnimation = "hurtR"; } else{ plr.currentAnimation = "hurtL"; }
				
				if (plyr.dir == "right"){
					plr.velX += zobj.push[0];
					plr.velY -= zobj.push[1];
				} else {
					plr.velX -= zobj.push[0];
					plr.velY -= zobj.push[1];
				}
				stunAndResetPlayer(plr, plyr, zobj);
			}
		}
	
	}
}

function checkForCombo(plr){
	var c = plr.combo;
	
	var lak = 	plr.controls[1].light;
	var hak = 	plr.controls[1].heavy;
	
	var combos = [
		gattling = {
			name: "pistol",
			combination: [lak, lak, lak]
		},
		gear3kick = {
			name: "gear3kick",
			combination: [hak, lak, hak]
		}
	];
	
	var returnValue = "nothing";
	
	for (var i = 0; i < combos.length; i++){
		var array1 = c.toString();
		var array2 = combos[i].combination.toString();
		if (array1 === array2){
			if (plr.dir == "right"){
				returnValue = combos[i].name + "R";
			} else if(plr.dir == "left"){
				returnValue = combos[i].name + "L";
			}
		} 	
	}
	return returnValue;
}

/*

	MAIN FUNCTION

*/

function Luffy(plr){
	var cas = plr.animationSpeed;
	
	var wc = checkForCombo(plr);
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
				if (tarPlr.x > width/2){
					plr.x = tarPlr.x - 180;
					plr.dir = "right";
				} else {
					plr.x = tarPlr.x + 180;
					plr.dir = "left";
				}
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
			createFrame(plr, standR);
			break;
		case "standL":
			createFrame(plr, standL);
			break;
		case "runR":
			createFrame(plr, runR);
			break;
		case "runL":
			createFrame(plr, runL);
			break;
		case "jumpR":
			createFrame(plr, jumpR);
			break;
		case "jumpL":
			createFrame(plr, jumpL);
			break;
		case "hurtR":
			createFrame(plr, hurtR);
			break;
		case "hurtL":
			createFrame(plr, hurtL);
			break;
		case "blockR":
			createFrame(plr, blockR);
			break;
		case "blockL":
			createFrame(plr, blockL);
			break;
		case "dead":
			createFrame(plr, dead);
			break;
		case "lattackR":
			createAttackFrame(plr, punchR);
			checkAttackHitBox(plr, punchR);
			break;
		case "lattackL":
			createAttackFrame(plr, punchL);
			checkAttackHitBox(plr, punchL);
			break;
		case "hattackR":
			createAttackFrame(plr, kickR);
			checkAttackHitBox(plr, kickR);
			break;
		case "hattackL":
			createAttackFrame(plr, kickL);
			checkAttackHitBox(plr, kickL);
			break;
		case "pistolR":
			createAttackFrame(plr, pistolR);
			checkAttackHitBox(plr, pistolR);
			break;
		case "pistolL":
			createAttackFrame(plr, pistolL);
			checkAttackHitBox(plr, pistolL);
			break;
		case "gear3kickR":
			createAttackFrame(plr, gear3kickR);
			checkAttackHitBox(plr, gear3kickR);
			break;
		case "gear3kickL":
			createAttackFrame(plr, gear3kickL);
			checkAttackHitBox(plr, gear3kickL);
			break;
		case "specialR":
			createAttackFrame(plr, specialR);
			checkAttackHitBox(plr, specialR);
			break;
		case "specialL":
			createAttackFrame(plr, specialL);
			checkAttackHitBox(plr, specialL);
			break;
		default:
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called.");
	}
}