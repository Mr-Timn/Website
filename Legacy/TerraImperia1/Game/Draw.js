var menuImages = [];
var menuTexts = [];

function drawPlayer(plr){  
	switch(plr.character){
		case "Luffy": 	plr.charHealthGui = "Images/OnePiece/Characters/Luffy/0_Picture_2.png";  Luffy(plr);  break;
		case "Mihawk": 	plr.charHealthGui = "Images/OnePiece/Characters/Mihawk/0_Picture_2.png"; Mihawk(plr); break;
		case "Kizaru": 	plr.charHealthGui = "Images/OnePiece/Characters/Kizaru/0_Picture_2.png"; Kizaru(plr); break;
		case "Ace": 	plr.charHealthGui = "Images/OnePiece/Characters/Ace/0_Picture_2.png";    Ace(plr); 	  break;
		case "Franky": 	plr.charHealthGui = "Images/OnePiece/Characters/Franky/0_Picture_2.png"; Franky(plr); break;
		case "Enel": 	plr.charHealthGui = "Images/OnePiece/Characters/Enel/0_Picture_2.png";   Enel(plr);   break;
		default: plr.charHealthGui = ""; ctx.fillStyle = plr.color; ctx.fillRect(plr.x, plr.y, plr.width, plr.height); break;
	}
}

function drawHealthBar(plr){
	var xpos = plr.healthPos[0];
	var ypos = plr.healthPos[1];
	
	if (plr.health < 0){ 
		plr.health = 0; 
		plr.dead = true;
	}
	if (plr.spAttack > 100){
		plr.spAttack = 100; 
	}
	
	if (xpos == 1){
		ctx.fillStyle = "red";
		ctx.fillRect(60, 10 + (ypos*30), (width/2.5) - 60, (ypos+1)*30);
		
		ctx.fillStyle = "green";
		ctx.fillRect(60, 10 + (ypos*30), ((width/2.5)-60) * (plr.health / plr.maxHealth), (ypos+1)*30)
		
		ctx.fillStyle = "yellow";
		ctx.fillRect(60,10 + ((ypos + 1) * 30), 300 * (plr.spAttack / plr.maxSPAttack), (ypos+1)*30);
		
		ctx.beginPath();
		ctx.moveTo(width/2.5,10 + (ypos * 30));
		ctx.lineTo(60,10 + (ypos * 30));
		ctx.lineTo(60,10 + ((ypos + 1) * 30));
		ctx.lineTo(width/2.5,10 + ((ypos + 1) * 30));
		ctx.lineTo(width/2.5,10 + (ypos * 30));
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(60,10 + ((ypos + 1) * 30));
		ctx.lineTo(360,10 + ((ypos + 1) * 30));
		ctx.lineTo(360,10 + ((ypos + 2) * 30));
		ctx.lineTo(10,10 + ((ypos + 2) * 30));
		ctx.stroke()
		
		var img = new Image();
		img.src = plr.charHealthGui;
		ctx.drawImage(img,10,10+(ypos*30),50,68);
	} else{
		
		ctx.fillStyle = "red";
		ctx.fillRect(width-(width/2.5), 10 + (ypos*30), (width/2.5) - 60, (ypos+1)*30);
		
		ctx.fillStyle = "green";
		ctx.fillRect(width-60, 10+(ypos*30), -((width/2.5)-60) * (plr.health / plr.maxHealth),(ypos+1)*30);
		
		ctx.fillStyle = "yellow";
		ctx.fillRect(width-60,10 + ((ypos + 1) * 30), -300 * (plr.spAttack / plr.maxSPAttack), (ypos+1)*30);
		
		ctx.beginPath();
		ctx.moveTo(width-60,10 + ((ypos + 1) * 30));
		ctx.lineTo(width-360,10 + ((ypos + 1) * 30));
		ctx.lineTo(width-360,10 + ((ypos + 2) * 30));
		ctx.lineTo(width-10,10 + ((ypos + 2) * 30));
		ctx.stroke()
		
		ctx.beginPath();
		ctx.moveTo(width-60,10+(ypos*30));
		ctx.lineTo(width-(width/2.5),10+(ypos*30));
		ctx.lineTo(width-(width/2.5),10+((ypos+1)*30));
		ctx.lineTo(width-60,10+((ypos+1)*30));
		ctx.lineTo(width-60,10+(ypos*30));
		ctx.stroke();
		
		var img = new Image();
		img.src = plr.charHealthGui;
		ctx.drawImage(img,width-60,10+(ypos*30),50,68);
	}
}

function displayPaused(){
	ctx.fillStyle = "blue"
	ctx.fillRect(0,0,width,height);
	ctx.fillText("Paused",width/2,height/2);
	
	ctx.fillStyle = "black";
	ctx.font = "30px Comic Sans MS";
	var whatKey;
	switch (onInput){
		case 0:
			whatKey = "Up";
			break;
		case 1:
			whatKey = "Block";
			break;
		case 2:
			whatKey = "Right";
			break;
		case 3:
			whatKey = "Left";
			break;
		case 4:
			whatKey = "Attack 1";
			break;
		case 5:
			whatKey = "Attack 2";
			break;
		case 6:
			whatKey = "Special";
			break;
		default:
			break;
	}
	ctx.fillText(
		"Please press Player " + (inputingFor+1) + "'s " + whatKey + " key.",
		(width/2)-100,
		height/2
	)
	
}

function drawOptions(){
	var co = characterOptions;
	ctx.moveTo(startX			,startY);
	ctx.lineTo(startX+(ipr*imgX),startY);
	ctx.lineTo(startX+(ipr*imgX),startY+(ipc*imgY));
	ctx.lineTo(startX			,startY+(ipc*imgY));
	ctx.lineTo(startX			,startY);
	ctx.stroke();
	for (var i = 0; i < co.length; i++){
		var imgg = new Image();
		imgg.src = co[i][1];
		ctx.drawImage(
			imgg,
			startX + (cipr*imgX),
			startY + (cipc*imgY)
		)
		cipr++;
		if (cipr >= ipr){
			cipr = 0;
			cipc++;
		}
	}
	cipr = 0; 
	cipc = 0;
	
	var cs2 = canvasWidth - (imgX*ipr) - startX;
	ctx.moveTo(cs2			 	,startY);
	ctx.lineTo(cs2+(ipr*imgX)	,startY);
	ctx.lineTo(cs2+(ipr*imgX)	,startY+(ipc*imgY));
	ctx.lineTo(cs2				,startY+(ipc*imgY));
	ctx.lineTo(cs2				,startY);	
	ctx.stroke();
	
	for (var i = 0; i < co.length; i++){
		var imgg = new Image();
		imgg.src = co[i][1];
		ctx.drawImage(
			imgg,
			cs2 + (cipr*imgX),
			startY + (cipc*imgY)
		)
		cipr++;
		if (cipr >= ipr){
			cipr = 0;
			cipc++;
		}
	}
	cipr = 0; cipc = 0;
	
}

function drawSelectedCharacter(){
	changeSelChar(1);
	changeSelChar(2);
	for (var i = 0; i < co.length; i++){
		if (co[i][0] == selectedChar){
			var selImg = new Image();
			selImg.src = co[i][2];
			ctx.drawImage(
				selImg,
				bimgX,
				bimgY,
				bimgW,
				bimgH
			)
		}
	}
	var cs2 = canvasWidth - (imgX*ipr) - startX;
	for (var i = 0; i < co.length; i++){
		if (co[i][0] == selectedChar2){
			var selImg = new Image();
			selImg.src = co[i][2];
			ctx.drawImage(
				selImg,
				bimgX2,
				bimgY,
				bimgW,
				bimgH
			)
		}
	}
}

function drawVs(){
	var co = characterOptions;
	var cimg = new Image();
	if (currentPlr1 && currentPlr2){ cimg.src = "Images/MainMenu/Ready.png"; var cimgW = 65; } else { cimg.src = ""; var cImgW = 0; }
	ctx.drawImage(cimg,(width/2)-(cimgW/2),0,cimgW,45);
	
	ctx.fillText("Back",0,10);
	ctx.fillText("(BackSp)",0,20);
	ctx.fillText("Confirm",27,10);
	ctx.fillText("(Enter)",27,20);
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(65,0);
	ctx.lineTo(65,26);
	ctx.lineTo(0,26);
	ctx.moveTo(25,0);
	ctx.lineTo(25,26);
	ctx.stroke();

	var vsImg = new Image();
	vsImg.src = "Images/MainMenu/VS.png";
	ctx.drawImage(vsImg,(width/2)-50,200,100,100);
	for (var i = 0; i < co.length; i++){
		if (currentPlr1 == co[i][0]){
			var vsImg = new Image();
			vsImg.src = co[i][2];
			ctx.drawImage(
				vsImg,
				100,
				50,
				300,
				350
			)
		}
		if (currentPlr2 == co[i][0]){
			var vsImg = new Image();
			vsImg.src = co[i][2];
			ctx.drawImage(
				vsImg,
				width-400,
				50,
				300,
				350
			)
		}
	}
}

function menuImage(Name, X, Y, Width, Height, Image){
	this.name = Name;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this.image = Image;
	menuImages.push(this);
}

function menuText(Name, X, Y, Text, TextObj){
	this.name = Name;
	this.x = X;
	this.y = Y;
	this.text = Text;
	this.textObj = TextObj;
	menuTexts.push(this);
}

function drawMenuObjects(){
	for (var i = 0; i < menuImages.length; i++){
		var ci = menuImages[i];
		var nImage = new Image();
		nImage.src = menuImages[i].image;
		ctx.drawImage(nImage, ci.x, ci.y, ci.width, ci.height);
	}
	for (var i = 0; i < menuTexts.length; i++){
		var ct = menuTexts[i];
		ctx.font = ct.textObj[0] + "px " + ct.textObj[1];
		ctx.fillStyle = ct.textObj[2];
		ctx.fillText(ct.text, ct.x, ct.y);
	}
}

function drawButtons(){
	var b = buttons;
	for (var i = 0; i < b.length; i++){
		if (b[i].ignore){ return; }
		b[i].slide(b[i]);
		var bTextLen = b[i].text.split("");
		if (b[i].image[0] == false){
			ctx.fillStyle = b[i].color;
			ctx.fillRect(b[i].x,b[i].y,b[i].width,b[i].height);
		} else {
			var bImage = new Image();
			bImage.src = b[i].image[1];
			ctx.drawImage(bImage,b[i].x,b[i].y,b[i].width,b[i].height);
		}
		
		var fontSize = b[i].textObj[0];
		var font = b[i].textObj[1];
		var fontColor = b[i].textObj[2];		
		var textWidth = ctx.measureText(b[i].text).width;
		
		ctx.fillStyle = fontColor; 
		ctx.font = fontSize + "px " + font;
		ctx.fillText(
			b[i].text,
			(b[i].x+b[i].width/2) - (textWidth/2),
			b[i].y+(b[i].height/2)+fontSize/3
		);
	}
}
