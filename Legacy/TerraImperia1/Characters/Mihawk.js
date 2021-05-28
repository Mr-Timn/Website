console.log("Loaded Mihawk");

if (true){
	var MihawkStandR = {
		src: "Images/OnePiece/Characters/Mihawk/StandingR.png",
		frames: 4,
		framesStart: [0,79,159,239,320],
		width: 320,
		height: 72,
		speed: 270
	};
	var MihawkStandL = {
		src: "Images/OnePiece/Characters/Mihawk/StandingL.png",
		frames: 4,
		framesStart: [0,80,161,241,320],
		width: 320,
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
		framesStart: [0,85,187,275,397,519,639,759,879,950,9997],
		width: 950,
		height: 122,
		speed: 60,
		damage: 3.5,
		push: [6,3.6]
	};
	var MihawkSpecialL = {
		src: "Images/OnePiece/Characters/Mihawk/SpecialL.png",
		frames: 10,
		framesStart: [0,85,187,275,397,519,639,759,879,950,9997],
		width: 950,
		height: 122,
		speed: 60,
		damage: 3.5,
		push: [6,3.6]
	};
	
	//UNIQUE ATTACKS
	var MihawkPunch2R = {
		src: "Images/OnePiece/Characters/Mihawk/Punch2R.png",
		frames: 7,
		framesStart: [0,92,186,290,386,445,510,597,710],
		width: 710,
		height: 110,
		speed: 70 ,
		damage: 2,
		push: [5,3]
	};
	var MihawkPunch2L = {
		src: "Images/OnePiece/Characters/Mihawk/Punch2L.png",
		frames: 7,
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

function Mihawk(plr){
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
	
	var wc = checkForComboMihawk(plr);
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
		case "standR":
			createNewFrame(plr, MihawkStandR, 0, 0); 
			break;
		case "standL":
			createNewFrame(plr, MihawkStandL, 0, 0);
			break;
		case "runR":
			createNewFrame(plr, MihawkRunR, 0, 0); 
			break;
		case "runL":
			createNewFrame(plr, MihawkRunL, 0, 0); 
			break;
		case "jumpR":
			createNewFrame(plr, MihawkJumpR, 0, 0); 
			break;
		case "jumpL":
			createNewFrame(plr, MihawkJumpL, 0, 0);
			break;
		case "hurtR":
			createNewFrame(plr, MihawkHurtR, 0, 0); 
			break;
		case "hurtL":
			createNewFrame(plr, MihawkHurtL, 0, 0);
			break;
		case "blockR":
			createNewFrame(plr, MihawkblockR, 0, 0);
			break;
		case "blockL":
			createNewFrame(plr, MihawkblockL, 0, 0); 
			break;
		case "dead":
			createNewFrame(plr, MihawkDead, 0, 0);
			break;	
		/* ATTACKS */
		case "lattackR":
			createNewAttackFrame(plr, MihawkPunchR, 0, 0, { onFrames: [1,2,3,4,5,6] });
			break;
		case "lattackL":
			createNewAttackFrame(plr, MihawkPunchL, 0, 0, { onFrames: [1,2,3,4,5,6] }); 
			break;
		case "punch2R":
			createNewAttackFrame(plr, MihawkPunch2R, 0, 0, { onFrames: [1,2,3,4,5,6,7] }); 
			break;
		case "punch2L":
			createNewAttackFrame(plr, MihawkPunch2L, 0, 0, { onFrames: [1,2,3,4,5,6,7] }); 
			break;
		case "kick2R":
			createNewAttackFrame(plr, MihawkKick2R, 0, 0, { onFrames: [1,2,3,4,5,6,7] }); 
			break;
		case "kick2L":
			createNewAttackFrame(plr, MihawkKick2L, 0, 0, { onFrames: [1,2,3,4,5,6,7] }); 
			break;
		case "hattackR":
			createNewAttackFrame(plr, MihawkKickR, 0, 0, { onFrames: [1,2,3,4,5,6,7] });
			break;
		case "hattackL":
			createNewAttackFrame(plr, MihawkKickL, 0, 0, { onFrames: [1,2,3,4,5,6,7] });
			break;
		case "SlashR":
			createNewAttackFrame(plr, MihawkSlashR, 0, 0, { onFrames: [1,2,3,4,5,6,7,8,9] });
			break;
		case "SlashL":
			createNewAttackFrame(plr, MihawkSlashL, 0, 0, { onFrames: [1,2,3,4,5,6,7,8,9] });
			break;
		/* Special */
		case "specialR":
			createNewFrameWithProjectile(plr, MihawkSpecialR, 0, 0, 
				{
					isSpecial: true,
					fireOnFrame: 5,
					x: plr.x+plr.width,
					y: plr.y-90,
					width: 150,
					height: 180,
					img: "Images/OnePiece/Characters/Mihawk/Projectile_1_R.png",
					speed: 16,
					direction: "right",
					damage: 35,
					lifetime: 5 * 1000,
					name: plr.name
				}
			);
			break;
		case "specialL":
			createNewFrameWithProjectile(plr, MihawkSpecialL, 0, 0, 
				{
					isSpecial: true,
					fireOnFrame: 5,
					x: plr.x,
					y: plr.y-90,
					width: 150,
					height: 180,
					img: "Images/OnePiece/Characters/Mihawk/Projectile_1_L.png",
					speed: 16,
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