var startingSel = [0,0];
var startingSel2 = [0,0];

function createPlayer(p){
	if (p[0] == "1"){
		players[0] = new Player(
			"Player 1",
			100,
			height/2,
			50,
			65,
			5,
			"red",
			0,
			0,
			height,
			.9,
			.2,
			6,
			230,
			100,
			100,
			[1,0],
			"standR",
			"right",
			["w","s","d","a","f","g","t"],
			true,
			selectedChar,
			p[1]
		);
	} else if (p[0] == "2" && currentScreen != "PlayPvC"){
		players[1] = new Player(
			"Player 2",
			width-100,
			height/2,
			50,
			65,
			5,
			"red",
			0,
			0,
			height,
			.9,
			.2,
			6,
			230,
			100,
			100,
			[2,0],
			"standR",
			"right",
			["up","down","right","left","k","l","o"],
			true,
			selectedChar2,
			p[1]
		);
	} else if (p[0] == "2" && currentScreen == "PlayPvC"){
		players[1] = new AIPlayer(
			"Player 2",
			width-100,
			height/2,
			50,
			65,
			5,
			"red",
			0,
			0,
			height,
			.9,
			.2,
			6,
			230,
			100,
			100,
			[2,0],
			"standR",
			"right",
			["up","down","right","left","k","l","o"],
			true,
			selectedChar2,
			p[1]
		);
	}
}

function changeSelChar(c){
	if (c == 1){
		for (var i = 0; i < co.length; i++){
			if (co[i][3][0] == startingSel[0]){
				if (co[i][3][1] == startingSel[1]){
					selectedChar = co[i][0];
				}
			}
		}
	} else if (c == 2){
		for (var i = 0; i < co.length; i++){
			if (co[i][3][0] == startingSel2[0]){
				if (co[i][3][1] == startingSel2[1]){
					selectedChar2 = co[i][0];
				}
			}
		}
	}
}

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

document.body.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
	
	if(keysToIgnore.indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
	
	if (e.keyCode == getKeyCode("f") && !playing){ 
		currentPlr1 = selectedChar; 
		createPlayer(["1","Player"]); 
	}
	if (e.keyCode == getKeyCode("k") && !playing){ 
		currentPlr2 = selectedChar2; 
		createPlayer(["2","Player"]); 
	}
	if (e.keyCode == 13){ 
		if (currentPlr1 && currentPlr2){ 
			if (players[0].character == "Random"){
				players[0].character = co[Math.ceil(Math.random() * characterOptions.length)][0];
			} 
			if (players[1].character == "Random"){
				players[1].character = co[Math.ceil(Math.random() * characterOptions.length)][0];
			}
			playing = true; 
		} 
	}
	
	if (e.keyCode == 37){ 
		if (startingSel2[0] > 0){ 
			startingSel2[0] -= 1; 
		}
	} else if (e.keyCode == 38){ 
		if (startingSel2[1] > 0){ 
			startingSel2[1] -= 1;
		} 
	} else if (e.keyCode == 39){ 
		if (startingSel2[0] < 7){ 
			startingSel2[0] += 1; 
		} 
	} else if (e.keyCode == 40){ 
		if (startingSel2[1] < 1){ 
			startingSel2[1] += 1; 
		} 
	}
	if (e.keyCode == getKeyCode("a")){ 
		if (startingSel[0] > 0){ 
			startingSel[0] -= 1; 
		}
	} else if (e.keyCode == getKeyCode("w")){ 
		if (startingSel[1] < 1){ 
			startingSel[1] -= 1; 
		} 
	} else if (e.keyCode == getKeyCode("d")){ 
		if (startingSel[0] < 7){ 
			startingSel[0] += 1; 
		} 
	} else if (e.keyCode == getKeyCode("s")){ 
		if (startingSel[1] > 0){ 
			startingSel[1] += 1; 
		} 
	}
});
