console.log("Loaded Luffy");

if (true){
	var LuffyStandR = {
		src: "Images/OnePiece/Characters/Luffy/StandingR.png",
		frames: 3,
		framesStart: [0,42,85,127],
		width: 127,
		height: 64,
		speed: 250
	};
	var LuffyStandL = {
		src: "Images/OnePiece/Characters/Luffy/StandingL.png",
		frames: 3,
		framesStart: [0,42,85,127],
		width: 127,
		height: 64,
		speed: 250
	};
	var LuffyRunR = {
		src: "Images/OnePiece/Characters/Luffy/RunningR.png",
		frames: 8,
		framesStart: [0,48,97,154,204,254,305,363,410],
		width: 410,
		height: 60,
		speed: 150
	};
	var LuffyRunL = {
		src: "Images/OnePiece/Characters/Luffy/RunningL.png",
		frames: 8,
		framesStart: [0,48,97,154,204,254,305,363,410],
		width: 410,
		height: 60,
		speed: 150
	};
	var LuffyJumpR = {
		src: "Images/OnePiece/Characters/Luffy/JumpingR.png",
		frames: 6,
		framesStart: [0,34,69,111,154,195,9999],
		width: 195,
		height: 71,
		speed: 250
	};
	var LuffyJumpL = {
		src: "Images/OnePiece/Characters/Luffy/JumpingL.png",
		frames: 6,
		framesStart: [0,34,69,111,154,195,9999],
		width: 195,
		height: 71,
		speed: 250
	};
	var LuffyHurtR = {
		src: "Images/OnePiece/Characters/Luffy/HurtR.png",
		frames: 3,
		framesStart: [0,51,94,129],
		width: 129,
		height: 53,
		speed: 300
	};
	var LuffyHurtL = {
		src: "Images/OnePiece/Characters/Luffy/HurtL.png",
		frames: 3,
		framesStart: [0,51,94,129],
		width: 129,
		height: 53,
		speed: 300
	};
	var LuffyBlockR = {
		src: "Images/OnePiece/Characters/Luffy/BlockR.png",
		frames: 1,
		framesStart: [0,32],
		width: 32,
		height: 64,
		speed: 100
	};
	var LuffyBlockL = {
		src: "Images/OnePiece/Characters/Luffy/BlockL.png",
		frames: 1,
		framesStart: [0,32],
		width: 32,
		height: 64,
		speed: 100
	};
	
	var LuffyDead = {
		src: "Images/OnePiece/Characters/Luffy/Dead.png",
		frames: 1,
		framesStart: [0,69],
		width: 69,
		height: 17,
		speed: 100
	};
	
	//ATTACKS
	var LuffyPunchR = {
		src: "Images/OnePiece/Characters/Luffy/PunchR.png",
		frames: 5,
		framesStart: [0,41,83,147,214,256],
		width: 256,
		height: 61,
		speed: 100,
		damage: 2,
		push: [4.8,3]
	};
	var LuffyPunchL = {
		src: "Images/OnePiece/Characters/Luffy/PunchL.png",
		frames: 5,
		framesStart: [0,41,83,147,214,256],
		width: 256,
		height: 61,
		speed: 100,
		damage: 2,
		push: [4.8,3]
	};
	var LuffyKickR = {
		src: "Images/OnePiece/Characters/Luffy/KickR.png",
		frames: 9,
		framesStart: [0,46,90,137,174,231,289,342,392,432],
		width: 432,
		height: 69,
		speed: 50,
		damage: 3.5,
		push: [6,3.6]
	};
	var LuffyKickL = {
		src: "Images/OnePiece/Characters/Luffy/KickL.png",
		frames: 9,
		framesStart: [0,46,90,137,174,231,289,342,392,432],
		width: 432,
		height: 69,
		speed: 50,
		damage: 3.5,
		push: [6,3.6]
	};
	var LuffySpecialR = {
		src: "Images/OnePiece/Characters/Luffy/SpecialR.png",
		frames: 22,
		framesStart: [0,47,100,169,239,311,393,464,513,606,763,921,1080,1239,1345,1504,1706,1911,2116,2306,2494,2575,9997],
		width: 2575,
		height: 82,
		speed: 150,
		damage: 35,
		push: [10,5]
	};
	var LuffySpecialL = {
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
	var LuffyPistolR = {
		src: "Images/OnePiece/Characters/Luffy/PistolR.png",
		frames: 20,
		framesStart: [0,41,83,147,215,291,374,462,562,666,777,894,1006,1108,1206,1297,1385,1462,1534,1580,9998],
		width: 1580,
		height: 60,
		speed: 30,
		damage: 5,
		push: [8,3.6]
	};
	var LuffyPistolL = {
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
			createNewFrame(plr, LuffyStandR, 0, 0);
			break;
		case "standL":
			createNewFrame(plr, LuffyStandL, 0, 0); 
			break;
		case "runR":
			createNewFrame(plr, LuffyRunR, 0, 0); 
			break;
		case "runL":
			createNewFrame(plr, LuffyRunL, 0, 0); 
			break;
		case "jumpR":
			createNewFrame(plr, LuffyJumpR, 0, 0);
			break;
		case "jumpL":
			createNewFrame(plr, LuffyJumpL, 0, 0);
			break;
		case "hurtR":
			createNewFrame(plr, LuffyHurtR, 0, 0);
			break;
		case "hurtL":
			createNewFrame(plr, LuffyHurtL, 0, 0);
			break;
		case "blockR":
			createNewFrame(plr, LuffyBlockR, 0, 0); 
			break;
		case "blockL":
			createNewFrame(plr, LuffyBlockL, 0, 0);
			break;
		case "dead":
			createNewFrame(plr, LuffyDead, 0, 0);
			break;
		/* Attacks */
		case "lattackR":
			createNewAttackFrame(plr, LuffyPunchR, 0, 0, { onFrames: [1,2,3,4,5] }); 
			break;
		case "lattackL":
			createNewAttackFrame(plr, LuffyPunchL, 0, 0, { onFrames: [1,2,3,4,5] });
			break;
		case "hattackR":
			createNewAttackFrame(plr, LuffyKickR, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] });
			break;
		case "hattackL":
			createNewAttackFrame(plr, LuffyKickL, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] }); 
			break;
		case "pistolR":
			createNewAttackFrame(plr, LuffyPistolR, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] });
			break;
		case "pistolL":
			createNewAttackFrame(plr, LuffyPistolL, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] });
			break;
		case "gear3kickR":
			createNewAttackFrame(plr, gear3kickR, 0, 0, { onFrames: [14,15,16,17] });
			break;
		case "gear3kickL":
			createNewAttackFrame(plr, gear3kickL, 0, 0, { onFrames: [14,15,16,17] }); 
			break;
		case "specialR":
			createNewAttackFrame(plr, LuffySpecialR, 0, 0, { onFrames: [14,15,16,17,18,19,20] }); 
			break;
		case "specialL":
			createNewAttackFrame(plr, LuffySpecialL, 0, 0, { onFrames: [14,15,16,17,18,19,20] }); 
			break;
		default:
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called.");
			break;
	}
}