console.log("Loaded Franky");

if (true){
	var FrankyStandR = {
		src: "Images/OnePiece/Characters/Franky/StandingR.png",
		frames: 4,
		framesStart: [0,75,151,227,304],
		width: 304,
		height: 80,
		speed: 250
	};
	var FrankyStandL = {
		src: "Images/OnePiece/Characters/Franky/StandingL.png",
		frames: 4,
		framesStart: [0,75,151,227,304],
		width: 304,
		height: 80,
		speed: 250
	};
	var FrankyRunR = {
		src: "Images/OnePiece/Characters/Franky/RunningR.png",
		frames: 8,
		framesStart: [0,60,114,178,233,296,380,479,556],
		width: 556,
		height: 80,
		speed: 150
	};
	var FrankyRunL = {
		src: "Images/OnePiece/Characters/Franky/RunningL.png",
		frames: 8,
		framesStart: [0,60,114,178,233,296,380,479,556],
		width: 556,
		height: 80,
		speed: 150
	};
	
	var FrankyJumpR = {
		src: "Images/OnePiece/Characters/Franky/JumpingR.png",
		frames: 5,
		framesStart: [0,77,155,237,319,401,9999],
		width: 401,
		height: 94,
		speed: 250
	};
	var FrankyJumpL = {
		src: "Images/OnePiece/Characters/Franky/JumpingL.png",
		frames: 5,
		framesStart: [0,77,155,237,319,401,9999],
		width: 401,
		height: 94,
		speed: 250
	};
	
	var FrankyHurtR = {
		src: "Images/OnePiece/Characters/Franky/HurtR.png",
		frames: 3,
		framesStart: [0,84,178],
		width: 178,
		height: 73,
		speed: 300
	};
	var FrankyHurtL = {
		src: "Images/OnePiece/Characters/Franky/HurtL.png",
		frames: 3,
		framesStart: [0,85,178],
		width: 178,
		height: 73,
		speed: 300
	};
	var FrankyBlockR = {
		src: "Images/OnePiece/Characters/Franky/BlockR.png",
		frames: 1,
		framesStart: [0,80],
		width: 80,
		height: 70,
		speed: 100
	};
	var FrankyBlockL = {
		src: "Images/OnePiece/Characters/Franky/BlockL.png",
		frames: 1,
		framesStart: [0,80],
		width: 80,
		height: 70,
		speed: 100
	};
	var FrankyDead = {
		src: "Images/OnePiece/Characters/Franky/Dead.png",
		frames: 1,
		framesStart: [0,87],
		width: 87,
		height: 34,
		speed: 100
	};
	//ATTACKS
	var FrankyPunchR = {
		src: "Images/OnePiece/Characters/Franky/PunchR.png",
		frames: 7,
		framesStart: [0,99,203,300,410,527,644,703],
		width: 703,
		height: 73,
		speed: 100,
		damage: 2,
		push: [4.8,3]
	};
	var FrankyPunchL = {
		src: "Images/OnePiece/Characters/Franky/PunchL.png",
		frames: 7,
		framesStart: [0,99,203,300,410,527,644,703],
		width: 703,
		height: 73,
		speed: 100,
		damage: 2,
		push: [4.8,3]
	};
	var FrankyKickR = {
		src: "Images/OnePiece/Characters/Franky/KickR.png",
		frames: 8,
		framesStart: [0,92,190,289,382,475,582,687,787],
		width: 787,
		height: 116,
		speed: 50,
		damage: 3.5,
		push: [6,3.6]
	};
	var FrankyKickL = {
		src: "Images/OnePiece/Characters/Franky/KickL.png",
		frames: 8,
		framesStart: [0,92,190,289,382,475,582,687,787],
		width: 787,
		height: 116,
		speed: 50,
		damage: 3.5,
		push: [6,3.6]
	};
	var FrankySpecialR = {
		src: "Images/OnePiece/Characters/Franky/SpecialR.png",
		frames: 31,
		framesStart: [0,87,171,255,339,423,507,591,677,763,839,920,1001,1082,1163,1245,1327,1410,1493,1579,1663,1759,1855,1938,2021,2103,2196,2283,2371,2457,2546,9997],
		width: 2630,
		height: 118,
		speed: 150,
		damage: 35,
		push: [10,5]
	};
	var FrankySpecialL = {
		src: "Images/OnePiece/Characters/Franky/SpecialL.png",
		frames: 31,
		framesStart: [0,87,171,255,339,423,507,591,677,763,839,920,1001,1082,1163,1245,1327,1410,1493,1579,1663,1759,1855,1938,2021,2103,2196,2283,2371,2457,2546,9997],
		width: 2630,
		height: 118,
		speed: 150,
		damage: 35,
		push: [10,5]
	};
	//Unique Attacks
	var FrankyPunch2R = {
		src: "Images/OnePiece/Characters/Franky/Punch2R.png",
		frames: 6,
		framesStart: [0,52,100,211,327,426,502],
		width: 502,
		height: 76,
		speed: 50,
		damage: 2.5,
		push: [6,3.6]
	}
	var FrankyPunch2L = {
		src: "Images/OnePiece/Characters/Franky/Punch2L.png",
		frames: 6,
		framesStart: [0,52,100,211,327,426,502],
		width: 502,
		height: 76,
		speed: 50,
		damage: 2.5,
		push: [6,3.6]
	}
	var FrankyPunch3R = {
		src: "Images/OnePiece/Characters/Franky/Punch3R.png",
		frames: 8,
		framesStart: [0,89,180,327,474,621,705,804,9998],
		width: 804,
		height: 76,
		speed: 150,
		damage: 3.5,
		push: [6,3.6]
	}
	var FrankyPunch3L = {
		src: "Images/OnePiece/Characters/Franky/Punch3L.png",
		frames: 8,
		framesStart: [0,89,180,327,474,621,705,804,9998],
		width: 804,
		height: 76,
		speed: 150,
		damage: 3.5,
		push: [6,3.6]
	}
	var FrankyCrushR = {
		src: "Images/OnePiece/Characters/Franky/CrushR.png",
		frames: 11,
		framesStart: [0,77,165,278,396,511,655,823,992,1161,1235,9998],
		width: 1235,
		height: 111,
		speed: 100,
		damage: 5,
		push: [6,3.6]
	}
	var FrankyCrushL = {
		src: "Images/OnePiece/Characters/Franky/CrushL.png",
		frames: 11,
		framesStart: [0,77,165,278,396,511,655,823,992,1161,1235,9998],
		width: 1235,
		height: 111,
		speed: 100,
		damage: 5,
		push: [6,3.6]
	}
}

function checkForComboFranky(plr){
	var c = plr.combo;
	
	var lak = 	plr.controls[1].light;
	var hak = 	plr.controls[1].heavy;
	
	var combos = [
		punch3 = {
			name: "punch3",
			combination: [lak,lak,lak]
		},
		crush = {
			name: "crush",
			combination: [hak,lak,hak]
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

function Franky(plr){
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
	var wc = checkForComboFranky(plr);
	if (wc != "nothing"){ 
		plr.isCombo = true; 
		plr.currentAnimation = wc; 
	}
	if (plr.currentAnimation == "tryAndAttack"){ 
		for (var i = 0; i < players.length; i++){ 
			var tarPlr = players[i]; 
			if (tarPlr.name != plr.name){ 
				if (tarPlr.blocking){ 
					plr.currentAnimation = "standR"; 
				} else { 
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
			createNewFrame(plr, FrankyStandR, 0, 0);
			break;
		case "standL": 
			createNewFrame(plr, FrankyStandL, 0, 0);
			break;
		case "runR": 
			createNewFrame(plr, FrankyRunR, 0, 0); 
			break;
		case "runL": 
			createNewFrame(plr, FrankyRunL, 0, 0); 
			break;
		case "jumpR":
			createNewFrame(plr, FrankyJumpR, 0, 0); 
			break;
		case "jumpL": 
			createNewFrame(plr, FrankyJumpL, 0, 0); 
			break;
		case "hurtR": 
			createNewFrame(plr, FrankyHurtR, 0, 0); 
			break;
		case "hurtL": 
			createNewFrame(plr, FrankyHurtL, 0, 0);
			break;
		case "blockR": 
			createNewFrame(plr, FrankyBlockR, 0, 0); 
			break;
		case "blockL":
			createNewFrame(plr, FrankyBlockL, 0, 0);
			break;
		case "dead":
			createNewFrame(plr, FrankyDead, 0, 0); 
			break;
		/* Attacks */
		case "lattackR":
			createNewAttackFrame(plr, FrankyPunchR, 0, 0, { onFrames: [1,2,3,4,5] }); 
			break;
		case "lattackL": 
			createNewAttackFrame(plr, FrankyPunchL, 0, 0, { onFrames: [1,2,3,4,5] }); 
			break;
		case "hattackR": 
			createNewAttackFrame(plr, FrankyKickR, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] }); 
			break;
		case "hattackL": 
			createNewAttackFrame(plr, FrankyKickL, 0, 0, { onFrames: [1,2,3,4,5,6,7,8] }); 
			break;	
		case "punch2R": 
			createNewAttackFrame(plr, FrankyPunch2R, 0, 0, { onFrames: [2,3,4,5,6] });
			break;
		case "punch2L": 
			createNewAttackFrame(plr, FrankyPunch2L, 0, 0, { onFrames: [2,3,4,5,6] });
			break;
		case "punch3R": 
			createNewAttackFrame(plr, FrankyPunch3R, 0, 0, { onFrames: [2,3,4,5,6] });
			break;
		case "punch3L": 
			createNewAttackFrame(plr, FrankyPunch3L, 0, 0, { onFrames: [2,3,4,5,6] });
			break;	
		case "crushR":
			createNewAttackFrame(plr, FrankyCrushR, 0, 0, { onFrames: [5,6,7,8,9] }); 
			break;
		case "crushL": 
			createNewAttackFrame(plr, FrankyCrushL, 0, 0, { onFrames: [5,6,7,8,9] });
			break;
		case "specialR":
			createNewFrameWithProjectile(plr, FrankySpecialR, 0, 0, 
				{
					isSpecial: true,
					fireOnFrame: 20,
					x: plr.x+plr.width,
					y: plr.y-plr.height/2,
					width: 150,
					height: 180,
					img: "Images/OnePiece/Characters/Franky/Projectile1R.png",
					speed: 13,
					direction: "right",
					damage: 35,
					lifetime: 5 * 1000,
					name: plr.name
				}
			); 
			break;
		case "specialL":
			createNewFrameWithProjectile(plr, FrankySpecialL, 0, 0, 
				{
					isSpecial: true,
					fireOnFrame: 20,
					x: plr.x,
					y: plr.y-plr.height/2,
					width: 150,
					height: 180,
					img: "Images/OnePiece/Characters/Franky/Projectile1L.png",
					speed: 13,
					direction: "left",
					damage: 35,
					lifetime: 5 * 1000,
					name: plr.name
				}
			); 
			break;
		default:
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called.");
			break;
	}
}