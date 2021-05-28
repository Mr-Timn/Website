console.log("Loaded Ace");

if (true){
	var AceStandR = {
		src: "Images/OnePiece/Characters/Ace/StandingR.png",
		frames: 4,
		framesStart: [0,32,64,96,128],
		width: 128,
		height: 67,
		speed: 230
	};
	var AceStandL = {
		src: "Images/OnePiece/Characters/Ace/StandingL.png",
		frames: 4,
		framesStart: [0,32,64,96,128],
		width: 128,
		height: 67,
		speed: 230
	}; 
	var AceRunR = {
		src: "Images/OnePiece/Characters/Ace/RunningR.png",
		frames: 8,
		framesStart: [0,60,121,173,213,271,330,381,420],
		width: 420,
		height: 61,
		speed: 150
	};  
	var AceRunL = {
		src: "Images/OnePiece/Characters/Ace/RunningL.png",
		frames: 8,
		framesStart: [0,60,121,173,213,271,330,381,420],
		width: 420,
		height: 61,
		speed: 150
	}; 
	var AceJumpR = {
		src: "Images/OnePiece/Characters/Ace/JumpingR.png",
		frames: 9,
		framesStart: [0,56,113,165,211,258,318,379,440,9999],
		width: 440,
		height: 80,
		speed: 80
	};
	var AceJumpL = {
		src: "Images/OnePiece/Characters/Ace/JumpingL.png",
		frames: 9,
		framesStart: [0,56,113,165,211,258,318,379,440,9999],
		width: 440,
		height: 80,
		speed: 80
	};
	var AceHurtR = {
		src: "Images/OnePiece/Characters/Ace/HurtR.png",
		frames: 2,
		framesStart: [0,36,86],
		width: 86,
		height: 58,
		speed: 150
	};
	var AceHurtL = {
		src: "Images/OnePiece/Characters/Ace/HurtL.png",
		frames: 2,
		framesStart: [0,36,86],
		width: 86,
		height: 58,
		speed: 150
	}; 
	var AceBlockR = {
		src: "Images/OnePiece/Characters/Ace/BlockR.png",
		frames: 1,
		framesStart: [0,38],
		width: 38,
		height: 55,
		speed: 100
	};
	var AceBlockL = {
		src: "Images/OnePiece/Characters/Ace/BlockL.png",
		frames: 1,
		framesStart: [0,38],
		width: 38,
		height: 55,
		speed: 100
	};
	var AceDead = {
		src: "Images/OnePiece/Characters/Ace/Dead.png",
		frames: 1,
		framesStart: [0,69],
		width: 69,
		height: 25,
		speed: 100
	}; 
	
	
	//ATTACKS
	var AcePunchR = {
		src: "Images/OnePiece/Characters/Ace/PunchR.png",
		frames: 8,
		framesStart: [0,43,89,140,192,237,282,320,358],
		width: 358,
		height: 70,
		speed: 65,
		damage: 2,
		push: [4,2]
	}; 
	var AcePunchL = {
		src: "Images/OnePiece/Characters/Ace/PunchL.png",
		frames: 8,
		framesStart: [0,43,89,140,192,237,282,320,358],
		width: 358,
		height: 70,
		speed: 65,
		damage: 2,
		push: [4,2]
	}; 
	var AceKickR = {
		src: "Images/OnePiece/Characters/Ace/KickR.png",
		frames: 8,
		framesStart: [0,38,76,122,169,216,258,300,343],
		width: 343,
		height: 72,
		speed: 65,
		damage: 2,
		push: [1,3.5]
	};
	var AceKickL = {
		src: "Images/OnePiece/Characters/Ace/KickL.png",
		frames: 8,
		framesStart: [0,38,76,122,169,216,258,300,343],
		width: 343,
		height: 72,
		speed: 65,
		damage: 2,
		push: [1,3.5]
	};
	var AceSpecialR = {
		src: "Images/OnePiece/Characters/Ace/SpecialR.png",
		frames: 26,
		framesStart: [0,36,83,132,176,211,246,287,329,360,391,421,454,489,524,554,589,631,680,761,835,893,951,999,1036,1067,9997],
		width: 1067,
		height: 79,
		speed: 120,
		damage: 0,
		push: [6,2]
	};
	var AceSpecialL = {
		src: "Images/OnePiece/Characters/Ace/SpecialL.png",
		frames: 26,
		framesStart: [0,36,83,132,176,211,246,287,329,360,391,421,454,489,524,554,589,631,680,761,835,893,951,999,1036,1067,9997],
		width: 1067,
		height: 79,
		speed: 120,
		damage: 0,
		push: [6,2]
	};
	
	//Unique Attacks
	var AcePunch2R = {
		src: "Images/OnePiece/Characters/Ace/Punch2R.png",
		frames: 10,
		framesStart: [0,44,89,131,174,232,300,360,420,462,500],
		width: 500,
		height: 67,
		speed: 60,
		damage: 2,
		push: [4,2]
	};
	var AcePunch2L = {
		src: "Images/OnePiece/Characters/Ace/Punch2R.png",
		frames: 10,
		framesStart: [0,44,89,131,174,232,300,360,420,462,500],
		width: 500,
		height: 67,
		speed: 60,
		damage: 2,
		push: [4,2]
	};
	var AcePunch3R = {
		src: "Images/OnePiece/Characters/Ace/Punch3R.png",
		frames: 12,
		framesStart: [0,41,92,147,202,257,342,425,507,557,600,635,9998],
		width: 635,
		height: 62,
		speed: 55,
		damage: 2.25,
		push: [4,1]
	};
	var AcePunch3L = {
		src: "Images/OnePiece/Characters/Ace/Punch3L.png",
		frames: 12,
		framesStart: [0,41,92,147,202,256,342,425,507,557,600,635,9998],
		width: 635,
		height: 62,
		speed: 55,
		damage: 2.25,
		push: [4,1]
	}; 
	
	var AceFire1 = "Images/OnePiece/Characters/Ace/Fire.png";
	
	var AceFireUlt = {
		src: "Images/OnePiece/Characters/Ace/Fire5.png",
		frames: 8,
		framesStart: [0,16,46,104,200,322,444,565,685],
		width: 120,
		height: 130,
		speed: 55,
		damage: 30,
		delay1: 880,
		delay2: 2150,
		time: 100
	}; var afu = AceFireUlt;
}

function checkForComboAce(plr){
	var c = plr.combo;
	
	var lak = 	plr.controls[1].light;
	var hak = 	plr.controls[1].heavy;
	
	var combos = [
		punch3 = {
			name: "punch3",
			combination: [lak, lak,lak]
		},
		
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

function Ace(plr){
	var cas = plr.animationSpeed;
	
	var lak = plr.controls[1].light; 
	var mcmb = [lak,lak]; 
	if (plr.combo.toString() == mcmb.toString() && plr.runPunch2 == false){ 
		if (plr.dir == "right"){ 
			plr.currentAnimation = "punch2R"; 
		} else if(plr.dir == "left"){
			plr.currentAnimation = "punch2L";
		} 
	}
	var wc = checkForComboAce(plr); if (wc == "nothing"){ } else { plr.isCombo = true; plr.currentAnimation = wc; }
	
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
		/* Animations */
		case "standR": 
			createNewFrame(plr, AceStandR, 0, 0); 
			break;
		case "standL": 
			createNewFrame(plr, AceStandL, 0, 0); 
			break;
		case "runR":
			createNewFrame(plr, AceRunR, 0, 2); 
			break;
		case "runL": 
			createNewFrame(plr, AceRunL, 0, 2); 
			break;
		case "jumpR":
			createNewFrame(plr, AceJumpR, 0, 0);
			break;
		case "jumpL":
			createNewFrame(plr, AceJumpL, 0, 0); 
			break;
		case "hurtR":
			createNewFrame(plr, AceHurtR, 0, 0);
			break;
		case "hurtL": 
			createNewFrame(plr, AceHurtL, 0, 0); 
			break;
		case "blockR":
			createNewFrame(plr, AceBlockR, 0, 10); 
			break;
		case "blockL":
			createNewFrame(plr, AceBlockL, 0, 10);
			break;
		case "dead":
			createNewFrame(plr, AceDead, 0, 0);
			break;
		/* Attacks */
		case "lattackR": 
			createNewAttackFrame(plr, AcePunchR, 0, 0, { onFrames: [1,2,3,4,5,6] }); 
			break;
		case "lattackL": 
			createNewAttackFrame(plr, AcePunchL, 0, 0, { onFrames: [1,2,3,4,5,6] });
			break;
		case "hattackR":
			createNewAttackFrame(plr, AceKickR, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] });
			break;
		case "hattackL": 
			createNewAttackFrame(plr, AceKickL, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] });
			break;
		case "punch2R": 
			createNewAttackFrame(plr, AcePunch2R, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] });
			break;
		case "punch2L": 
			createNewAttackFrame(plr, AcePunch2L, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] }); 
			break;
		case "punch3R": 
			createNewAttackFrame(plr, AcePunch3R, 0, 0, { onFrames: [1,2,3,4,5,6,7,8,9] });
			break;
		case "punch3L": 
			createNewAttackFrame(plr, AcePunch3L, 0, 0, { onFrames: [1,2,3,4,5,6,7,8,9] });
			break;
		case "specialR": 
			createNewAttackFrame(plr, AceSpecialR, 0, 0, { onFrames: [14,15,16,17,18,19,20] }); 
			var aFire = new AnimatedProjectile(
				plr.x+15,
				plr.y-150,
				afu.width,
				afu.height,
				afu.src,
				afu.speed,
				["Enemy"],
				afu.damage,
				9999,
				plr.name,afu
			);  
			break;
		case "specialL": createNewAttackFrame(plr, AceSpecialL, 0, 0, { onFrames: [14,15,16,17,18,19,20] });
			var aFire = new AnimatedProjectile(
				plr.x+15,
				plr.y-150,
				afu.width,
				afu.height,
				afu.src,
				afu.speed,
				["Enemy"],
				afu.damage,
				9999,
				plr.name,
				afu
			);  
			break;
		default: 
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called.");
			break;
	}
}
