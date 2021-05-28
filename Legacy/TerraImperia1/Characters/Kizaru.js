console.log("Loaded Kizaru");

if (true){
	var KizaruStandR = {
		src: "Images/OnePiece/Characters/Kizaru/StandingR.png",
		frames: 4,
		framesStart: [0,37,73,109,146],
		width: 146,
		height: 79,
		speed: 250
	};
	var KizaruStandL = {
		src: "Images/OnePiece/Characters/Kizaru/StandingL.png",
		frames: 4,
		framesStart: [0,37,73,109,146],
		width: 146,
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
		src: "Images/OnePiece/Characters/Kizaru/Kick2L.png",
		frames: 13,
		framesStart: [0,47,98,148,250,368,480,595,695,795,888,975,1057,9998,9994],
		width: 1057,
		height: 88,
		speed: 80,
	};
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
	
	var lak = plr.controls[1].light;
	var hak = plr.controls[1].heavy; 
	var mcmb = [lak,lak]; 
	if (plr.combo.toString() == mcmb.toString() && plr.runPunch2 == false){ 
		if (plr.dir == "right"){ 
			plr.currentAnimation = "punch2R"; 
		} else if(plr.dir == "left"){ 
			plr.currentAnimation = "punch2L"; 
		} 
	}
	
	
	var wc = checkForComboKizaru(plr);
	if (wc != "nothing"){ 
		plr.isCombo = true;
		plr.currentAnimation = wc;
	}
	
	if (typeof plr.canKick == "undefined"){ 
		plr.canKick = true; 
		plr.kickcd = 8000; 
	}
	
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
			createNewFrame(plr, KizaruStandR, 0, 0); break;
		case "standL":
			createNewFrame(plr, KizaruStandL, 0, 0); break;
		case "runR":
			createNewFrame(plr, KizaruRunR, 0, 0); break;
		case "runL":
			createNewFrame(plr, KizaruRunL, 0, 0); break;
		case "jumpR":
			createNewFrame(plr, KizaruJumpR, 0, 0); break;
		case "jumpL":
			createNewFrame(plr, KizaruJumpL, 0, 0); break;
		case "hurtR":
			createNewFrame(plr, KizaruHurtR, 0, 0); break;
		case "hurtL":
			createNewFrame(plr, KizaruHurtL, 0, 0); break;
		case "blockR":
			createNewFrame(plr, KizarublockR, 0, 0); break;
		case "blockL":
			createNewFrame(plr, KizarublockL, 0, 0); break;
		case "dead":
			createNewFrame(plr, KizaruDead, 0, 0); break;
		//ATTACKS
		case "lattackR":
			createNewAttackFrame(plr, KizaruPunchR, 0, 0, {onFrames: [1,2,3,4,5,6,7] }); break;
		case "lattackL":
			createNewAttackFrame(plr, KizaruPunchL, 0, 0, {onFrames: [1,2,3,4,5,6,7] }); break;
		case "hattackR":
			createNewAttackFrame(plr, KizaruKickR, 0, 0, {onFrames: [1,2,3,4,5,6,7,8,9,10] }); break;
		case "hattackL":
			createNewAttackFrame(plr, KizaruKickL, 0, 0, {onFrames: [1,2,3,4,5,6,7,8,9,10] }); break;
		case "special":
			createNewFrameWithOnHitProjectile(plr, KizaruSpecial, 0, 0, 
				{
					isSpecial: true,
					fireOnFrame: 3,
					x: plr.x+(plr.width/2),
					y: plr.y,
					width: 30,
					height: 10,
					img: "Images/OnePiece/Characters/Kizaru/Laser.png",
					speed: 16,
					direction: "growdown",
					damage: 35,
					lifetime: 5 * 1000,
					name: plr.name,
					img2: "Images/OnePiece/Characters/Kizaru/Laser1Explosion.png",
					img2FramesStart: [0,39,88,137,186,245,294,353,435,526,617],
					img2Height: 96,
					img2FrameSpeed: 250
				}
			); break;
		//UNIQUE ATTACKS
		case "kick2R":
			createNewFrameWithOnHitProjectile(plr, KizaruKick2R, 0, 0, 
				{
					isSpecial: true,
					fireOnFrame: 10,
					x: plr.x+plr.width,
					y: plr.y,
					width: 230,
					height: 20,
					img: "Images/OnePiece/Characters/Kizaru/Laser1.png",
					speed: 25,
					direction: "right",
					damage: 8,
					lifetime: 5 * 1000,
					name: plr.name,
					img2: "Images/OnePiece/Characters/Kizaru/Laser1Explosion.png",
					img2FramesStart: [0,39,88,137,186,245,294,353,435,526,617],
					img2Height: 96,
					img2FrameSpeed: 250
				}
			); break;
		case "kick2L":
			createNewFrameWithOnHitProjectile(plr, KizaruKick2L, 0, 0, 
				{
					isSpecial: true,
					fireOnFrame: 10,
					x: plr.x,
					y: plr.y,
					width: 200,
					height: 20,
					img: "Images/OnePiece/Characters/Kizaru/Laser1.png",
					speed: 16,
					direction: "left",
					damage: 10,
					lifetime: 5 * 1000,
					name: plr.name,
					img2: "Images/OnePiece/Characters/Kizaru/Laser1Explosion.png",
					img2FramesStart: [0,39,88,137,186,245,294,353,435,526,617],
					img2Height: 96,
					img2FrameSpeed: 250
				}
			); break;
		case "punch2R":
			createNewAttackFrame(plr, KizaruPunch2R, 0, 0, {onFrames: [1,2,3,4,5] }); break;
		case "punch2L":
			createNewAttackFrame(plr, KizaruPunch2L, 0, 0, {onFrames: [1,2,3,4,5] }); break;
		case "punch3R":
			createNewAttackFrame(plr, KizaruPunch3R, 0, 0, {onFrames: [1,2,3,4,5,6,7] }); break;
		case "punch3L":
			createNewAttackFrame(plr, KizaruPunch3L, 0, 0, {onFrames: [1,2,3,4,5,6,7] }); break;
		default:
			alert("An error occurred. Invalid animation name was called. " + plr.currentAnimation + " was called.");
	}
}