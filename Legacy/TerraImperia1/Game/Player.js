var players = [];

var characterOptions = [
	["Random", 	"Images/CharacterSelect/Random_3.png",					"Images/CharacterSelect/Random_1.png",				 [0,0]],
	["Luffy",	"Images/OnePiece/Characters/Luffy/0_Picture_3.png",		"Images/OnePiece/Characters/Luffy/0_Picture_1.png",  [1,0]],
	["Mihawk",	"Images/OnePiece/Characters/Mihawk/0_Picture_3.png",	"Images/OnePiece/Characters/Mihawk/0_Picture_1.png", [2,0]],
	["Kizaru",	"Images/OnePiece/Characters/Kizaru/0_Picture_3.png",	"Images/OnePiece/Characters/Kizaru/0_Picture_1.png", [3,0]],
	["Ace", 	"Images/OnePiece/Characters/Ace/0_Picture_3.png",		"Images/OnePiece/Characters/Ace/0_Picture_1.png", 	 [4,0]],
	["Franky", 	"Images/OnePiece/Characters/Franky/0_Picture_3.png",	"Images/OnePiece/Characters/Franky/0_Picture_1.png", [5,0]],
	["Enel", 	"Images/OnePiece/Characters/Enel/0_Picture_3.png",		"Images/OnePiece/Characters/Enel/0_Picture_1.png",	 [6,0]],
];
var co = characterOptions;

function returnOpponent(plr){
	switch(plr.name){
		case "Player 1": 
			return players[1]; 
			break;
		case "Player 0": 
			return players[0]; 
			break;
		default: 
			return "Undefined"; 
			break;
	}
}

function returnPlayer(name){
	for (var i = 0; i < players.length; i++){
		if (players[i].name == name){
			return players[i];
		}
	}
}

function Player(Name, x, y, Width, Height, Speed, color, velx, vely, Ground, Friction, Gravity, JumpPower, AnimationSpeed, Health, MaxHealth, HealthPos, StartAnimation, StartDirection, mKeys, useKeyCode, Character, IsAI){
	this.name = Name;
	this.x = x;
	this.y = y;
	this.width = Width;
	this.height = Height;
	this.speed = Speed;
	this.velX = velx;
	this.velY = vely;
	this.ground = defaultGround;
	this.friction = Friction;
	this.gravity = Gravity;
	this.color = color;
	this.character = Character;
	this.jumpPower = JumpPower;
	this.health = MaxHealth;
	this.maxHealth = MaxHealth;
	this.healthPos = HealthPos;
	
	this.jumping = false;
	this.grounded = false;
	this.platform = false;
	this.falling = false;
	this.waitForFrame = false;
	this.stunned = false;
	this.dead = false;
	this.checked = false;
	this.isCombo = false; 
	this.blocking = false;
	this.runPunch2 = false;
	
	this.dir = StartDirection;
	this.currentFrame = 0;
	this.currentAnimation = StartAnimation;
	this.animationSpeed = AnimationSpeed;
	
	this.attacking = false;
	this.currentAttack = "";
	this.combo = [];
	this.lastCombo = [];
	this.wasDamagedBy = [];
	this.keys = [];
	this.spAttack = 100;
	this.maxSPAttack = 100;
	this.resetComboTime = 1000;
	this.energyGain = 3;
	
	if(useKeyCode){
		this.controls = [
			movement = {
				up: getKeyCode(mKeys[0]),
				down: getKeyCode(mKeys[1]),
				right: getKeyCode(mKeys[2]),
				light: getKeyCode(mKeys[4]),
				left: getKeyCode(mKeys[3])
			},
			attacks = {
				light: getKeyCode(mKeys[4]),
				heavy: getKeyCode(mKeys[5]),
				special: getKeyCode(mKeys[6])
			}
		]
	} else{
		this.controls = [
			movement = {
				up: mKeys[0],
				down: mKeys[1],
				right: mKeys[2],
				left: mKeys[3]
			},
			attacks = {
				light: mKeys[4],
				heavy: mKeys[5],
				special: mKeys[6]
			}
		]
	}
	this.checkIfCombo = function(){ 
		if (this.combo.length >= 4) { 
			this.combo = []; 
			this.lastCombo = []; 
			this.runPunch2 = false;
		} 
		if (this.combo.toString() == this.lastCombo.toString()){ 
			this.combo = []; 
			this.lastCombo = []; 
			this.runPunch2 = false; 
		} 
	}
	this.resetValues = function(){ 
		this.speed = Speed; 
		this.velX = velx; 
		this.velY = vely; 
		this.friction = Friction; 
		this.gravity = Gravity; 
		this.color = color; 
		this.jumpPower = JumpPower; 
		this.animationSpeed = AnimationSpeed; 
		this.stunned = false;
	}
}

function setAnimationFromInput(plr,override){
	if (plr.AI == true){ plr.setAnimationFromInput(plr); }
	if (plr.stunned || plr.AI || plr.isCombo || plr.blocking || plr.currentAnimation == "tryAndAttack") { if (typeof override == "undefined" || override == false) { return; } }
	
	var upKey = 			plr.controls[0].up;
	var downKey = 			plr.controls[0].down;
	var rightKey = 			plr.controls[0].right;
	var leftKey = 			plr.controls[0].left;
	var lightAttackKey = 	plr.controls[1].light;
	var spAttack = 			plr.controls[1].special;
	
	if (keys[spAttack]){
		if (plr.spAttack >= plr.maxSPAttack){
			plr.spAttack = 0;
			plr.currentAnimation = "tryAndAttack";
			return;
		}
	}
	
	if (plr.attacking){
		if (plr.currentAttack == "light"){ 
			if (plr.dir == "right"){ 
				plr.currentAnimation = "lattackR"; 
			} else if (plr.dir == "left"){ 
				plr.currentAnimation = "lattackL"; 
			}
		}
		if (plr.currentAttack == "heavy"){ 
			if (plr.dir == "right"){ 
				plr.currentAnimation = "hattackR"; 
			} else if (plr.dir == "left") { 
				plr.currentAnimation = "hattackL"; 
			}
		}
	} else{
		if (keys[rightKey] && plr.velX < plr.speed){	
			var an = plr.currentAnimation;
			if (!an == "runL" && !an == "runR") {
				plr.currentFrame = 0;
			}
			if (plr.falling !== true){
				plr.currentAnimation = "runR"
				plr.dir = "right"
			} else {
				plr.dir = "right";
			}
		}
			
		if (keys[leftKey] && plr.velX > -plr.speed){
			if (!an == "runL" && !an == "runR") {
				plr.currentFrame = 0;
			}
			if (plr.falling !== true){
				plr.currentAnimation = "runL"
				plr.dir = "left"
			} else {
				plr.dir = "left";
			}
		}
		
		if (plr.velX > -plr.speed/2 && plr.velX < plr.speed/2){
			if (plr.dir == "right"){
				plr.currentAnimation = "standR";
			} else if(plr.dir == "left"){
				plr.currentAnimation = "standL";
			}
		}
		if (plr.jumping){
			if (plr.dir == "right"){ 
				plr.currentAnimation = "jumpR"; 
			} else if (plr.dir == "left"){ 
				plr.currentAnimation = "jumpL"; 
			}
		}
	}
}

function checkPlayerInput(plr,override){
	if (plr.AI == true){ plr.checkPlayerInput(plr); }
	if (plr.stunned || plr.AI || plr.currentAnimation == "tryAndAttack"){ if (typeof override == "undefined" || override == false) { return; } }
	
	var upKey = 			plr.controls[0].up;
	var downKey = 			plr.controls[0].down;
	var rightKey = 			plr.controls[0].right;
	var leftKey = 			plr.controls[0].left;
	var lightAttackKey = 	plr.controls[1].light;
	var heavyAttackKey = 	plr.controls[1].heavy;
	var spAttack =			plr.controls[1].special;
	
	if (keys[downKey]){
		plr.blocking = true;
		if (plr.dir == "right"){
			plr.currentAnimation = "blockR";
		} else if(plr.dir == "left"){
			plr.currentAnimation = "blockL";
		}
		return;
	} else { 
		plr.blocking = false; 
	}
	
	if (keys[upKey] && !plr.jumping && plr.grounded){
		plr.jumping = true;
		plr.grounded = false;
		plr.velY = -1 * plr.jumpPower;
	}
		
	if (keys[rightKey] && plr.velX < plr.speed){
		plr.velX++;
	}
		
	if (keys[leftKey] && plr.velX > -plr.speed){
		plr.velX--;
	}
	
	if (keys[lightAttackKey] && !plr.attacking && !plr.isCombo){
		plr.attacking = true;
		plr.currentFrame = 0;
		plr.speed = plr.speed / 10;
		plr.currentAttack = "light";
		
		plr.combo[plr.combo.length] = lightAttackKey;
		setTimeout(function(){
			if (!plr.combo[0] || plr.isCombo){ return; };
			plr.lastCombo[plr.lastCombo.length] = lightAttackKey;
			var checkPlr = plr.checkIfCombo();
		}, plr.resetComboTime);
		return;
	}
	
	if (keys[heavyAttackKey] && !plr.attacking && !plr.isCombo){
		plr.attacking = true;
		plr.currentFrame = 0;
		plr.speed = plr.speed / 10;
		plr.currentAttack = "heavy";
		
		plr.combo[plr.combo.length] = heavyAttackKey;
		setTimeout(function(){
			if (!plr.combo[0] || plr.isCombo){ return; };
			plr.lastCombo[plr.lastCombo.length] = heavyAttackKey;
			var checkPlr = plr.checkIfCombo();
		}, plr.resetComboTime);
		return;
	}
}

function playerPhysicsAndBoundries(plr){
	plr.velX *= plr.friction;
	plr.velY += plr.gravity;
	
	plr.x += plr.velX;
	plr.y += plr.velY;
	
	if (plr.velY > 0){
		plr.falling = true;
	} 
	
	var curani = plr.currentAnimation;
	
	if(plr.y >= height - plr.ground){
		plr.y = height - plr.ground;
		if (plr.dir == "right" && !plr.grounded && !curani == "specialR" && !curani == "specialL"){
			plr.currentAnimation = "runR";
		} else if(plr.dir == "left" && !plr.grounded ) {
			plr.currentAnimation = "runL";
		}
		plr.grounded = true;
		plr.jumping = false;
		plr.falling = false;
		plr.velY = 0;
	}
	
	if (plr.x >= width-plr.width) {
        plr.x = width-plr.width;
    } else if (plr.x <= 0) {         
        plr.x = 0;     
    } 
}
