var buttons = [];

canvas.addEventListener("click", function(e){
	if (playing) { return; }
	var mouseXY = getXY(canvas,e)
	mouseClicked(mouseXY.x,mouseXY.y);
});

function removeButton(bName){
	for (var i = 0; i < buttons.length; i++){
		if (buttons[i].name == bName){
			buttons[i].splice(i,1);
		}
	}	
}

function removeAllButtons(){
	buttons = [];
}

function removeAllText(){
	menuTexts = [];
}

function changeScreen(screen){
	lastScreen = currentScreen;
	currentScreen = screen;
}

function mainMenuButtons(){
	var story =      new Button("Story",  		0,			canvasHeight/2-135+(bSize[1]*0+(5*0)),	bSize[0],bSize[1],"green","Story",	  [canvasWidth/2-bSize[0]/2, canvasHeight/2-135+(bSize[1]*0+(5*0)), 80,  0],[25,"Ariel","black"], [true,"Images/MainMenu/MenuButton1.png"])
	var vs =		 new Button("VS",			canvasWidth,canvasHeight/2-135+(bSize[1]*1+(5*1)),	bSize[0],bSize[1],"green","VS",		  [canvasWidth/2-bSize[0]/2, canvasHeight/2-135+(bSize[1]*1+(5*1)), 80, 80],[25,"Ariel","black"], [true,"Images/MainMenu/MenuButton1.png"]);
	var tutorial =   new Button("Tutorial",		0,			canvasHeight/2-135+(bSize[1]*2+(5*2)),	bSize[0],bSize[1],"green","Tutorial", [canvasWidth/2-bSize[0]/2, canvasHeight/2-135+(bSize[1]*2+(5*2)), 80,160],[25,"Ariel","black"], [true,"Images/MainMenu/MenuButton1.png"]);
	var settings =   new Button("Settings",		canvasWidth,canvasHeight/2-135+(bSize[1]*3+(5*3)),	bSize[0],bSize[1],"green","Settings", [canvasWidth/2-bSize[0]/2, canvasHeight/2-135+(bSize[1]*3+(5*3)), 80,240],[25,"Ariel","black"], [true,"Images/MainMenu/MenuButton1.png"]);
}

function Button(Name, X, Y, Width, Height, Color, Text, SlideObj, TextObj, Image, buttonFunction){
	this.name = Name;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
	this.color = Color;
	this.text = Text;
	this.slideObj = SlideObj;
	this.textObj = TextObj; //fontsize fontfamily fontcolor
	this.image = Image;
	this.delayTime = SlideObj[3];
	this.ignore = true;
	if (typeof buttonFunction != "undefined"){
		this.pressed = buttonFunction;
	} else {
		this.pressed = function(){ }
	}
	
	this.removeDelay = function(b){
		setTimeout(function(){
			b.ignore = false;
		},b.delayTime);
	}
	this.removeDelay(this);
	
	this.ticked = [
		Math.floor((SlideObj[0]-X)/SlideObj[2]),
		Math.floor((SlideObj[1]-Y)/SlideObj[2]) 
	];
	this.slide = function(bb){
		if (bb.ignore){ return; }
		if (bb.ticked[0] < 0){ 
			var bSlide = setInterval(function(){ 
				bb.x += bb.ticked[0]; 
				if (bb.x < bb.slideObj[0]){ 
					bb.x = bb.slideObj[0]; 
					clearInterval(bSlide); 
				} 
			},bb.slideObj[2]); 
		}
		if (bb.ticked[0] > 0){ 
			var bSlide = setInterval(function(){ 
				bb.x += bb.ticked[0]; 
				if (bb.x > bb.slideObj[0]){ 
					bb.x = bb.slideObj[0]; 
					clearInterval(bSlide); 
				} 
			},bb.slideObj[2]); 
		}
	}
	this.remove = function(bb){
		for (var i = 0; i < buttons.length; i++){
			if (bb == buttons[i]){ buttons.splice(i,1); }
		}
	}
	this.clicked = function(bb){
		switch (bb.name){
			case "Menu":
				mainMenuButtons();
				break;
			case "Arcade":  
			
				break;
			case "VS": 
				changeScreen("VS");
				removeAllButtons();
				var pvp = new Button("PVP",0,		    canvasHeight/2-100+(bSize[1]*0+(5*0)),bSize[0],bSize[1],"green","PvP",[canvasWidth/2-bSize[0]/2,canvasHeight/2-135+(bSize[1]*0+(5*0)),80,  0],[25,"Ariel","black"],[true,"Images/MainMenu/MenuButton1.png"]);
				var pvc = new Button("PVC",canvasWidth, canvasHeight/2-100+(bSize[1]*1+(5*1)),bSize[0],bSize[1],"green","PvC",[canvasWidth/2-bSize[0]/2,canvasHeight/2-135+(bSize[1]*1+(5*1)),80, 80],[25,"Ariel","black"],[true,"Images/MainMenu/MenuButton1.png"]);
				var back = new Button("Back",0,			canvasHeight/2-100+(bSize[1]*2+(5*2)),bSize[0],bSize[1],"green","Back",[canvasWidth/2-bSize[0]/2,canvasHeight/2-135+(bSize[1]*2+(5*2)),80, 80],[25,"Ariel","black"],[true,"Images/MainMenu/MenuButton1.png"]);
				break;
			case "PVC": 
				menuScreen = false; 
				changeScreen("PlayPvC");
				break;
			case "PVP": 
				menuScreen = false; 
				changeScreen("PlayPvP");
				break;
			case "Story":
				changeScreen("Story");
				break;
			case "Tutorial":
				changeScreen("Tutorial");
				break;
			case "Settings":
				changeScreen("Settings");
				removeAllButtons();
				var controls = new Button("Controls",0,canvasHeight/2-100+(bSize[1]*0+(5*0)),bSize[0],bSize[1],"green","Controls",[canvasWidth/2-bSize[0]/2,canvasHeight/2-135+(bSize[1]*0+(5*0)),80,  0],[25,"Ariel","black"],[true,"Images/MainMenu/MenuButton1.png"],
					function(){
						removeAllButtons();
						//console.log(returnKeyValue(pControls["Player 1"]["up"]));
						
						var p1c = new menuImage("P1C", 100, 75, 200, 40, "Images/MainMenu/P1ControlsImage.png");
							var p1B = new Button("P1B", 0, 120, 50, 50, "black", returnKeyValue(pControls["Player 1"]["up"]), [230, 120, 80, 0], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Up", 100, 155, "Up", [30, "One Piece", "black"]);
							var p1B = new Button("P1B", 0, 175, 50, 50, "black", returnKeyValue(pControls["Player 1"]["down"]), [230, 175, 80, 100], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Down", 100, 210, "Down", [30, "One Piece", "black"]);
							var p1B = new Button("P1B", 0, 230, 50, 50, "black", returnKeyValue(pControls["Player 1"]["left"]), [230, 175, 80, 200], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Left", 100, 265, "Left", [30, "One Piece", "black"]);
							var p1B = new Button("P1B", 0, 285, 50, 50, "black", returnKeyValue(pControls["Player 1"]["right"]), [230, 175, 80, 300], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Right", 100, 320, "Right", [30, "One Piece", "black"]);
							var p1B = new Button("P1B", 0, 340, 50, 50, "black", returnKeyValue(pControls["Player 1"]["light"]), [230, 175, 80, 400], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Light", 100, 375, "Light", [30, "One Piece", "black"]);
							var p1B = new Button("P1B", 0, 395, 50, 50, "black", returnKeyValue(pControls["Player 1"]["heavy"]), [230, 175, 80, 500], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Heavy", 100, 430, "Heavy", [30, "One Piece", "black"]);
							var p1B = new Button("P1B", 0, 450, 50, 50, "black", returnKeyValue(pControls["Player 1"]["special"]), [230, 175, 80, 600], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Special", 100, 485, "Special", [30, "One Piece", "black"]);
								
						var p2c = new menuImage("P2C",canvasWidth-300,75,200,40,"Images/MainMenu/P2ControlsImage.png");
							var p2B = new Button("P2B", canvasWidth, 120, 50, 50, "black", returnKeyValue(pControls["Player 2"]["up"]), [canvasWidth-175, 120, 80, 0], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Up", canvasWidth-300, 155, "Up", [30, "One Piece", "black"]);
							var p2B = new Button("P2B", canvasWidth, 175, 50, 50, "black", returnKeyValue(pControls["Player 2"]["down"]), [canvasWidth-175, 175, 80, 100], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Down", canvasWidth-300, 210, "Down", [30, "One Piece", "black"]);
							var p2B = new Button("P2B", canvasWidth, 230, 50, 50, "black", returnKeyValue(pControls["Player 2"]["left"]), [canvasWidth-175, 175, 80, 200], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Left", canvasWidth-300, 265, "Left", [30, "One Piece", "black"]);
							var p2B = new Button("P2B", canvasWidth, 285, 50, 50, "black", returnKeyValue(pControls["Player 2"]["right"]), [canvasWidth-175, 175, 80, 300], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Right", canvasWidth-300, 320, "Right", [30, "One Piece", "black"]);
							var p2B = new Button("P2B", canvasWidth, 340, 50, 50, "black", returnKeyValue(pControls["Player 2"]["light"]), [canvasWidth-175, 175, 80, 400], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Light", canvasWidth-300, 375, "Light", [30, "One Piece", "black"]);
							var p2B = new Button("P2B", canvasWidth, 395, 50, 50, "black", returnKeyValue(pControls["Player 2"]["heavy"]), [canvasWidth-175, 175, 80, 500], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Heavy", canvasWidth-300, 430, "Heavy", [30, "One Piece", "black"]);
							var p2B = new Button("P2B", canvasWidth, 450, 50, 50, "black", returnKeyValue(pControls["Player 2"]["special"]), [canvasWidth-175, 175, 80, 600], [30,"Ariel","black"], [true, "Images/MainMenu/ControlsButton.png"], function(){ console.log("fsdfasdf"); });
								var p1BText = new menuText("Special", canvasWidth-300, 485, "Special", [30, "One Piece", "black"]);
					}
				);
				var back = new Button("Back",canvasWidth,canvasHeight/2-100+(bSize[1]*1+(5*1)),bSize[0],bSize[1],"green","Back",[canvasWidth/2-bSize[0]/2,canvasHeight/2-135+(bSize[1]*1+(5*1)),80, 80],[25,"Ariel","black"],[true,"Images/MainMenu/MenuButton1.png"]);
				break;
			case "Back": 
				removeAllButtons();
				changeScreen(lastScreen);
				bb.clicked({name:currentScreen});
				break;
			default: 
				console.log(bb.name + " is not a button"); 
				break;
		}
	}
	buttons.push(this);
}

function removeButton(bb){ 
	for (var i = 0; i < buttons.length; i++){ 
		if (bb == buttons[i] || bb == buttons[i].name){
			buttons.splice(i,1); 
		} 
	} 
}

function getXY(Canvas, event){
    var rect = canvas.getBoundingClientRect(),
        x = event.clientX - rect.left,         
        y = event.clientY - rect.top;  
    return {x:x, y:y};                         
}

function mouseClicked(cordX, cordY){
	//console.log("X: " + cordX + " Y: " + cordY);
	var co = characterOptions;
	/*if (!playing && !paused){
		if (cordX > startX && cordX < startX + (imgX*ipr) && cordY > startY && cordY < startY + (imgY*ipc)){ 
			var rr = (cordX / imgX) - (startX / imgX); 
			var cc = (cordY / imgY) - (startY / imgY); 
			for (var i = 0; i < co.length; i++){ 
				if (rr > co[i][3][0] && rr < co[i][3][1] && cc > co[i][4][0] && cc < co[i][4][1]){ 
					selectedChar = co[i][0]; 
				} 
			} 
		}
	}*/
	if (menuScreen){
		//check Buttons
		var hasClicked = false;
		for (var i = 0; i < buttons.length; i++){
			if (typeof buttons[i] == "undefined"){ return; }
			var bX = buttons[i].x; 
			var bY = buttons[i].y; 
			var bWidth = buttons[i].width; 
			var bHeight = buttons[i].height;
			if (cordX > bX && cordX < bX + bWidth && cordY > bY && cordY < bY + bHeight){
				buttons[i].pressed();
				buttons[i].clicked(buttons[i]);
				hasClicked = true;
			}
			if (hasClicked){ break; }
		}
	}
}
