window.onload = function() { 
	mainMenuButtons();
	update();
};
	
function update(){
	ctx.clearRect(0,0,width,height);
	if (menuScreen){
		var menuImg = new Image(); menuImg.src = "Images/MainMenu/MenuBackground.jpg";
		ctx.drawImage(menuImg,0,0,width,height);
		drawButtons();
		drawMenuObjects();
	} else if (!menuScreen && (currentScreen == "PlayPvP" || currentScreen == "PlayPvC")) {
		if (playing && !paused){
			var im = new Image();
			im.src = bg;
			ctx.drawImage(im,0,0,width,height);
			/* 	PLAYERS AND PLATFORMS */
			for (var i = 0; i < players.length; i++){
				checkPlayerInput(players[i]);
				setAnimationFromInput(players[i]);
				playerPhysicsAndBoundries(players[i]);
				drawHealthBar(players[i]);
				players[i].platform = false;
				for (var o = 0; o < platforms.length; o++){
					checkSollidPlatformCollision(
						players[i], 
						platforms[o], 
						platforms[o].collideTop, 
						platforms[o].collideBottom, 
						platforms[o].collideRight,
						platforms[o].collideLeft
					);
					createSolidPlatform(
						platforms[o].x, 
						platforms[o].y, 
						platforms[o].width, 
						platforms[o].height, 
						platforms[o].color
					);
				}
				if (players[i].dead){
					players[i].stunned = true;
					players[i].currentAnimation = "dead";
					if(players[i].name == "Player 1"){
						ctx.fillStyle = "black";
						ctx.fillText("Player 2 Won!",width/2,height/2);
					} else {
						ctx.fillStyle = "black";
						ctx.fillText("Player 1 Won!",width/2,height/2);
					}
					setTimeout(function(){
						if (!restarting){
							resetGame();
							restarting = true;
						}
					},5000);
				}
				drawPlayer(players[i]);
			}
			moveProjectile();
			drawProjectile();
			moveOnHitProjectile();
			drawOnHitProjectile();
			drawParticle();
			animateProjectile();
		} else if(!playing && !paused){
			drawOptions();
			drawSelectedCharacter();
			drawVs();
		} else if(paused){
			displayPaused();
		}
	}
	requestAnimationFrame(update);
}
