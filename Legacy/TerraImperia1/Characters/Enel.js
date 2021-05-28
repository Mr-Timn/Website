console.log("Loaded Enel");

if (true){
	var EnelStandR = {
		src: "Images/OnePiece/Characters/Enel/StandingR.png",
		frames: 3,
		framesStart: [0,54,108,162],
		width: 162,
		height: 86,
		speed: 155
	};
	var EnelStandL = {
		src: "Images/OnePiece/Characters/Enel/StandingL.png",
		frames: 3,
		framesStart: [0,54,108,162],
		width: 162,
		height: 86,
		speed: 155
	};
	var EnelRunR = {
		src: "Images/OnePiece/Characters/Enel/RunningR.png",
		frames: 7,
		framesStart: [0,85,170,256,341,426,509,590],
		width: 590,
		height: 85,
		speed: 150
	};
	var EnelRunL = {
		src: "Images/OnePiece/Characters/Enel/RunningL.png",
		frames: 7,
		framesStart: [0,85,170,256,341,426,509,590],
		width: 590,
		height: 85,
		speed: 150
	};
	var EnelJumpR = {
		src: "Images/OnePiece/Characters/Enel/JumpingR.png",
		frames: 5,
		framesStart: [0,47,94,164,234,304],
		width: 304,
		height: 99,
		speed: 75
	};
	var EnelJumpL = {
		src: "Images/OnePiece/Characters/Enel/JumpingL.png",
		frames: 5,
		framesStart: [0,47,94,164,234,304],
		width: 304,
		height: 99,
		speed: 75
	};
	var EnelHurtR = {
		src: "Images/OnePiece/Characters/Enel/HurtR.png",
		frames: 2,
		framesStart: [0,67,141],
		width: 141,
		height: 81,
		speed: 60
	};
	var EnelHurtL = {
		src: "Images/OnePiece/Characters/Enel/HurtL.png",
		frames: 2,
		framesStart: [0,67,141],
		width: 141,
		height: 81,
		speed: 60
	};
	var EnelBlockR = {
		src: "Images/OnePiece/Characters/Enel/BlockR.png",
		frames: 3,
		framesStart: [0,54,108,162],
		width: 162,
		height: 85,
		speed: 80
	};
	var EnelBlockL = {
		src: "Images/OnePiece/Characters/Enel/BlockL.png",
		frames: 3,
		framesStart: [0,54,108,162],
		width: 162,
		height: 85,
		speed: 80
	}; 
	var EnelDead = {
		src: "Images/OnePiece/Characters/Enel/Dead.png",
		frames: 1,
		framesStart: [0,90],
		width: 90,
		height: 28,
		speed: 100
	};
	
	//ATTACKS
	var EnelPunchR = {
		src: "Images/OnePiece/Characters/Enel/PunchR.png",
		frames: 11,
		framesStart: [0,74,141,199,293,387,479,571,663,757,820,877],
		width: 877,
		height: 94,
		speed: 65,
		damage: 2,
		push: [4,2]
	};
	var EnelPunchL = {
		src: "Images/OnePiece/Characters/Enel/PunchL.png",
		frames: 11,
		framesStart: [0,74,141,199,293,387,479,571,663,757,820,877],
		width: 877,
		height: 94,
		speed: 65,
		damage: 2,
		push: [4,2]
	};
	var EnelPunch2R = {
		src: "Images/OnePiece/Characters/Enel/Punch2R.png",
		frames: 10,
		framesStart: [0,69,146,217,323,400,460,520,584,647,704],
		width: 704,
		height: 96,
		speed: 65,
		damage: 2,
		push: [4,2]
	};
	var EnelPunch2L = {
		src: "Images/OnePiece/Characters/Enel/Punch2L.png",
		frames: 10,
		framesStart: [0,69,146,217,323,400,460,520,584,647,704],
		width: 704,
		height: 96,
		speed: 65,
		damage: 2,
		push: [4,2]
	};
	var EnelPunch3R = {
		src: "Images/OnePiece/Characters/Enel/Punch3R.png",
		frames: 16,
		framesStart: [0,75,171,267,362,457,542,618,724,862,922,982,1046,1121,1184,1243,9998],
		width: 1243,
		height: 96,
		speed: 65,
		damage: 2,
		push: [5,2]
	};
	var EnelPunch3L = {
		src: "Images/OnePiece/Characters/Enel/Punch3L.png",
		frames: 16,
		framesStart: [0,75,171,267,362,457,542,618,724,862,922,982,1046,1121,1184,1243,9998],
		width: 1243,
		height: 96,
		speed: 65,
		damage: 2,
		push: [5,2]
	};
	
	var EnelKickR = {
		src: "Images/OnePiece/Characters/Enel/KickR.png",
		frames: 11,
		framesStart: [0,78,156,224,273,359,421,499,569,629,693,750],
		width: 750,
		height: 83,
		speed: 65,
		damage: 2,
		push: [3.5,3]
	};
	var EnelKickL = {
		src: "Images/OnePiece/Characters/Enel/KickL.png",
		frames: 11,
		framesStart: [0,78,156,224,273,359,421,499,569,629,693,750],
		width: 750,
		height: 83,
		speed: 65,
		damage: 2,
		push: [3.5,3]
	};
	var EnelSpecialR = {
		src: "Images/OnePiece/Characters/Enel/SpecialR.png",
		frames: 23,
		framesStart: [0,60,115,170,225,280,335,390,456,549,642,735,828,921,1014,1073,1132,1218,1304,1390,1476,1562,1648,1714,9997],
		width: 1714,
		height: 98,
		speed: 70,
		damage: 35,
		push: [0,0]
	};
	var EnelSpecialL = {
		src: "Images/OnePiece/Characters/Enel/SpecialL.png",
		frames: 23,
		framesStart: [0,60,115,170,225,280,335,390,456,549,642,735,828,921,1014,1073,1132,1218,1304,1390,1476,1562,1648,1714,9997],
		width: 1714,
		height: 98,
		speed: 70,
		damage: 35,
		push: [0,0]
	};
	var EnelLightningFormR = {
		src: "Images/OnePiece/Characters/Enel/LightningFormR.png",
		frames: 16,
		framesStart: [0,54,108,163,264,366,467,565,649,728,807,886,970,1099,1228,1357,9998],
		width: 1357,
		height: 105,
		speed: 95,
		damage: 7,
		push: [15,-2]
	};
	var EnelLightningFormL = {
		src: "Images/OnePiece/Characters/Enel/LightningFormL.png",
		frames: 16,
		framesStart: [0,54,108,163,264,366,467,565,649,728,807,886,970,1099,1228,1357,9998],
		width: 1357,
		height: 105,
		speed: 95,
		damage: 7,
		push: [15,-2]
	};
	var EnelCloud = {
		src: "Images/OnePiece/Characters/Enel/LightningCloud.png",
		frames: 22,
		framesStart: [0,21,75,175,325,530,760,989,1219,1450,1680,1909,2139,2368,2598,2827,3057,3286,3516,3746,3977,4198,4265],
		width: 4265,
		height: 216,
		speed: 30,
		time: 0,
		delay1: 1400,
		delay2: 1400
	}
}

function checkForComboEnel(plr){
	var c = plr.combo;
	
	var lak = 	plr.controls[1].light;
	var hak = 	plr.controls[1].heavy;
	
	var combos = [
		punch3 = {
			name: "punch3",
			combination: [lak, lak,lak]
		},
		lightningForm = {
			name: "lightningForm",
			combination: [hak,hak,lak,hak]
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

function Enel(plr){
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
	var wc = checkForComboEnel(plr); 
	if (wc != "nothing"){
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
		/* Animations */
		case "standR": 
			createNewFrame(plr, EnelStandR, 0, 0); 
			break;
		case "standL": 
			createNewFrame(plr, EnelStandL, 0, 0); 
			break;
		case "runR": 
			createNewFrame(plr, EnelRunR, 0, 2); 
			break;
		case "runL": 
			createNewFrame(plr, EnelRunL, 0, 2); 
			break;
		case "jumpR": 
			createNewFrame(plr, EnelJumpR, 0, 0); 
			break;
		case "jumpL": 
			createNewFrame(plr, EnelJumpL, 0, 0); 
			break;
		case "hurtR": 
			createNewFrame(plr, EnelHurtR, 0, 0); 
			break;
		case "hurtL":
			createNewFrame(plr, EnelHurtL, 0, 0); 
			break;
		case "blockR": 
			createNewFrame(plr, EnelBlockR, 0, 0); 
			break;
		case "blockL": 
			createNewFrame(plr, EnelBlockL, 0, 0); 
			break;
		case "dead": 
			createNewFrame(plr, EnelDead, 0, 0); 
			break;
		/* Attacks */
		case "lattackR": 
			createNewAttackFrame(plr, EnelPunchR, 0, 0, { onFrames: [1,2,3,4,5,6] }); 
			break;
		case "lattackL":
			createNewAttackFrame(plr, EnelPunchL, 0, 0, { onFrames: [1,2,3,4,5,6] }); 
			break;
		case "hattackR": 
			createNewAttackFrame(plr, EnelKickR, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] }); 
			break;
		case "hattackL": 
			createNewAttackFrame(plr, EnelKickL, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] }); 
			break;
		case "punch2R": 
			createNewAttackFrame(plr, EnelPunch2R, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] });
			break;
		case "punch2L": 
			createNewAttackFrame(plr, EnelPunch2L, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] }); 
			break;
		case "punch3R": 
			createNewAttackFrame(plr, EnelPunch3R, 0, 0, { onFrames: [1,2,3,4,5,6,7,8,9] }); 
			break;
		case "punch3L": 
			createNewAttackFrame(plr, EnelPunch3L, 0, 0, { onFrames: [1,2,3,4,5,6,7,8,9] });
			break;
		case "lightningFormR": 
			createNewAttackFrame(plr, EnelLightningFormR, 0, 0, { onFrames: [10,11,12,13,14] }); 
			break;
		case "lightningFormL":
			createNewAttackFrame(plr, EnelLightningFormL, 0, 0, { onFrames: [10,11,12,13,14] });
			break;
		case "specialR": createNewAttackFrame(plr, EnelSpecialR, 0, 0, { onFrames: [14,15,16,17,18,19,20] }); 
			createNewAttackFrame(plr, EnelSpecialR, 0, 0, {onFrames: [2,3] }); 
			var cloud = new AnimatedProjectile(
				returnOpponent(plr).x + 25,
				returnOpponent(plr).y + returnOpponent(plr).height-EnelCloud.height,
				EnelCloud.width,
				EnelCloud.height,
				EnelCloud.src,
				EnelCloud.speed,
				0,
				EnelSpecialR.damage,
				2100,
				plr.name,
				EnelCloud
			);
			break;	 
		case "specialL": 
			createNewAttackFrame(plr, EnelSpecialR, 0, 0, {onFrames: [2,3] }); 
			var cloud = new AnimatedProjectile(
				returnOpponent(plr).x + 25,
				returnOpponent(plr).y + returnOpponent(plr).height-EnelCloud.height,
				EnelCloud.width,
				EnelCloud.height,
				EnelCloud.src,
				EnelCloud.speed,
				0,
				EnelSpecialR.damage,
				2100,
				plr.name,
				EnelCloud
			);
			break;
		default: 
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called."); 
			break;
	}
}
