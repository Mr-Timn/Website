
var platforms = [
	floor = [0, canvasHeight, canvasWidth, 10, "black"],
	ceil =  [0, 0,			  canvasWidth, 1,  "black"]
];

function createSolidPlatform(newX, newY, newWidth, newHeight, newColor){
	ctx.fillStyle = newColor;
	ctx.fillRect(newX, newY, newWidth , newHeight);
}

function checkSollidPlatformCollision(plr, obj, topC, bottomC, rightC, leftC){
	var plrX = plr.x;
	var plrY = plr.y;
	var plrH = plr.height;
	var plrW = plr.width;
	
	var objX = obj.x;
	var objY = obj.y;
	var objH = obj.height;
	var objW = obj.width;
	
	for (var i = 0; i < 1; i++){
		if (topC) {
			if (plrY + plrH >= objY && plrY + plrH <= objY + plr.velY){ 				//collide top
				if (plrX + plrW >= objX && plrX <= objX + objW){
					plr.ground = height - (objY - plrH);
					plr.platform = true;
					plr.velY = 0;
					break;
				} 
			}
		}
		
		if (bottomC){
			if (plrY <= objY + objH && plrY >= objY){									//collide Bottom
				if (plrX + plrW >= objX && plrX <= objX + objW && plr.falling !== true){
					plr.y = objY + objH;
					plr.velY = 0;
					break;
				}
			}
		}
		
		if (leftC){
			if (plrX + plrW >= objX && plrX <= objX + plrW){ 							//collide left
				if (plrY + plrH - 1 >= objY && plrY <= objY + objH){
					if (plr.ground !== height - (objY - plrH)){
						plr.x = objX - plrW;
						break;
					}
				}
			}
		}
		
		if (rightC){
			if (plrX <= objX + objW && plrX >= objX + objW - plrW){ 					//collide right
				if (plrY + plrH - 1 >= objY && plrY <= objY + objH){
					if (plr.ground !== height - (objY - plrH)){
						plr.x = objX + objW;
						break;
					}
				}
			}
		}
	}
	
	if (!plr.platform){ plr.ground = defaultGround + plrH; }
}
 
function Platform(newX, newY, newWidth, newHeight, newColor, ccT, ccB, ccR, ccL){
	this.x = newX;
	this.y = canvasHeight - newY;
	this.width = newWidth;
	this.height = newHeight;
	this.color = newColor;
	this.collideTop = ccT;
	this.collideBottom = ccB;
	this.collideLeft = ccL;
	this.collideRight = ccR;
} 