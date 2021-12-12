
/// Global stuf ///
/*
var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var motdfinished = false;
var motdwords = [],
	usermsg = [];
var motd_letters = {
	"": {
		width: 0,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ]
		]
	},

	"0": {
		width: 45,
		height: 100,
		wrap: true,
		adj: [  ],
		pic: [ [8],
			[ "-", "1", "0", "-" ],
			[ "-", "-", "-", "-" ],
			[ "2", "-", "-", "7" ],
			[ "-", "-", "-", "-" ],
			[ "-", "-", "-", "-" ],
			[ "3", "-", "-", "6" ],
			[ "-", "-", "-", "-" ],
			[ "-", "4", "5", "-" ]
		]
	},
	"1": {
		width: 40,
		height: 100,
		wrap: false,
		adj: [ [ "3", "4" ] ],
		pic: [ [5],
			[ "-", "-", "1", "-", "-" ],
			[ "0", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "4", "-", "2", "-", "3" ]
		]
	},
	"2": {
		width: 45,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [8],
			[ "-", "2", "-", "3", "-" ],
			[ "1", "-", "-", "-", "4" ],
			[ "-", "0", "-", "-", "-" ],
			[ "-", "-", "-", "-", "5" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "6", "-", "-", "-", "7" ]
		]
	},
	"3": {
		width: 40,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [12],
			[ "-", "1", "-", "-", "-", "2", "-" ],
			[ "0", "-", "-", "-", "-", "-", "3" ],
			[ "-", "-", "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-", "4", "-" ],
			[ "-", "-", "5", "-", "-", "-", "-" ],
			[ "-", "-", "6", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-", "7", "-" ],
			[ "-", "-", "-", "-", "-", "-", "-" ],
			[ "11", "-", "-", "-", "-", "-", "8" ],
			[ "-", "10", "-", "-", "9", "-", "-" ]
		]
	},
	"4": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [4],
			[ "-", "-", "-", "1", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "2", "-", "-", "-", "3" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "0", "-" ]
		]
	},
	"5": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [11],
			[ "1", "-", "-", "-", "0", "-" ],
			[ "-", "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-", "-" ],
			[ "2", "-", "-", "-", "-", "-" ],
			[ "-", "3", "-", "-", "4", "-" ],
			[ "-", "-", "-", "-", "-", "5" ],
			[ "-", "-", "-", "-", "-", "6" ],
			[ "10", "-", "-", "-", "7", "-" ],
			[ "-", "9", "-", "8", "-", "-" ]
		]
	},
	"6": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [10],
			[ "-", "-", "1", "0", "-" ],
			[ "-", "2", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "8", "7", "-" ],
			[ "3", "-", "-", "-", "-" ],
			[ "-", "9", "-", "-", "6" ],
			[ "-", "4", "-", "5", "-" ]
		]
	},
	"7": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [4],
			[ "1", "-", "-", "-", "2" ],
			[ "0", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "3", "-", "-", "-", "-" ]
		]
	},
	"8": {
		width: 60,
		height: 100,
		wrap: true,
		adj: [  ],
		pic: [ [12],
			[ "-", "10", "-", "-", "9", "-" ],
			[ "11", "-", "-", "-", "-", "8" ],
			[ "-", "-", "0", "7", "-", "-" ],
			[ "1", "-", "-", "-", "-", "6" ],
			[ "2", "-", "-", "-", "-", "5" ],
			[ "-", "3", "-", "-", "4", "-" ]
		]
	},
	"9": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [8],
			[ "-", "3", "-", "2", "-" ],
			[ "4", "-", "-", "-", "1" ],
			[ "5", "-", "-", "-", "-" ],
			[ "-", "6", "-", "-", "7" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "0" ]
		]
	},

	"A": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [ [ "3", "4" ] ],
		pic: [ [5],
			[ "-", "-", "1", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "3", "-", "4", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "0", "-", "-", "-", "2" ]
		]
	},
	"B": {
		width: 50,
		height: 100,
		wrap: true,
		pic: [ [7], 
			[ "0", "-", "6", "-" ],
			[ "-", "-", "-", "5" ],
			[ "-", "-", "4", "-" ],
			[ "-", "-", "-", "3" ],
			[ "1", "-", "2", "-" ]
		]
	},
	"C": {
		width: 50,
		height: 100,
		wrap: false,
		pic: [ [8],
			[ "-", "2", "-", "1", "-" ],
			[ "3", "-", "-", "-", "0" ],
			[ "-", "-", "-", "-", "-" ],
			[ "4", "-", "-", "-", "7" ],
			[ "-", "5", "6", "-", "-" ]
		]
	},
	"D": {
		width: 60,
		height: 100,
		wrap: true,
		adj: [  ],
		pic: [ [6],
			[ "0", "-", "1", "-" ],
			[ "-", "-", "-", "2" ],
			[ "-", "-", "-", "-" ],
			[ "-", "-", "-", "-" ],
			[ "-", "-", "-", "3" ],
			[ "5", "-", "4", "-" ]
		]
	},
	"E": {
		width: 40,
		height: 100,
		wrap: false,
		adj: [ [ "5", "2" ] ],
		pic: [ [6],
			[ "1", "-", "-", "0" ],
			[ "-", "-", "-", "-" ],
			[ "2", "-", "-", "5" ],
			[ "-", "-", "-", "-" ],
			[ "3", "-", "-", "4" ]
		]
	},
	"F": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [ [ "3", "4" ] ],
		pic: [ [5],
			[ "1", "-", "-", "-", "2" ],
			[ "-", "-", "-", "-", "-" ],
			[ "3", "-", "-", "-", "4" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "0", "-", "-", "-", "-" ]
		]
	},
	"G": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [9],
			[ "-", "2", "-", "1", "-" ],
			[ "3", "-", "-", "-", "0" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "8", "-", "7" ],
			[ "4", "-", "-", "-", "-" ],
			[ "-", "5", "-", "-", "6" ]
		]
	},
	"H": {
		width: 40,
		height: 100,
		wrap: false,
		adj: [ [ "2", "3" ], [ "4", "5"] ],
		pic: [ [6],
			[ "0", "-", "-", "-", "4" ],
			[ "-", "-", "-", "-", "-" ],
			[ "2", "-", "-", "-", "3" ],
			[ "-", "-", "-", "-", "-" ],
			[ "1", "-", "-", "-", "5" ]
		]
	},
	"I": {
		width: 35,
		height: 100,
		wrap: false,
		adj: [ [ "2", "3" ], [ "4", "5" ] ],
		pic: [ [6],
			[ "0", "-", "4", "-", "1" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "2", "-", "5", "-", "3" ]
		]
	},
	"J": {
		width: 60,
		height: 100,
		wrap: false,
		adj: [ [ "2", "3" ] ],
		pic: [ [8],
			[ "0", "-", "-", "-", "2", "-", "-", "1" ],
			[ "-", "-", "-", "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-", "-", "-", "-" ],
			[ "7", "-", "-", "-", "-", "-", "-", "-" ],
			[ "6", "-", "-", "-", "3", "-", "-", "-" ],
			[ "-", "5", "-", "4", "-", "-", "-", "-" ]
		]
	},
	"K": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [ [ "2", "3" ] ],
		pic: [ [5],
			[ "0", "-", "-", "-", "4" ],
			[ "-", "-", "-", "-", "-" ],
			[ "3", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "1", "-", "-", "-", "2" ]
		]
	},
	"L": {
		width: 35,
		height: 100,
		wrap: false,
		pic: [ [3],
			[ "0", "-", "-" ],
			[ "-", "-", "-" ],
			[ "-", "-", "-" ],
			[ "-", "-", "-" ],
			[ "1", "-", "2" ]
		]
	},
	"M": {
		width: 55,
		height: 100,
		wrap: false,
		pic: [ [5],
			[ "-", "1", "-", "-", "-", "3", "-" ],
			[ "-", "-", "-", "2", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-", "-", "-" ],
			[ "0", "-", "-", "-", "-", "-", "4" ]	
		]
	},
	"N": {
		width: 55,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [4],
			[ "1", "-", "3" ],
			[ "-", "-", "-" ],
			[ "-", "-", "-" ],
			[ "-", "-", "-" ],
			[ "-", "-", "-" ],
			[ "0", "-", "2" ]
		]
	},
	"O": {
		width: 60,
		height: 100,
		wrap: true,
		pic: [ [12],
			[ "-", "-", "1", "-", "0", "-", "-" ],
			[ "-", "2", "-", "-", "-", "11", "-" ],
			[ "3", "-", "-", "-", "-", "-", "10" ],
			[ "-", "-", "-", "-", "-", "-", "-" ],
			[ "4", "-", "-", "-", "-", "-", "9" ],
			[ "-", "5", "-", "-", "-", "8", "-" ],
			[ "-", "-", "6", "-", "7", "-", "-" ]
		]
	},
	"P": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [7],
			[ "1", "-", "-", "2", "-" ],
			[ "-", "-", "-", "-", "3" ],
			[ "-", "-", "-", "-", "4" ],
			[ "6", "-", "-", "5", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "0", "-", "-", "-", "-" ]
		]
	},
	"Q": {
		width: 60,
		height: 100,
		wrap: false,
		adj: [ [ "12", "13" ] ],
		pic: [ [14],
			[ "-", "-", "4", "-", "3",  "-", "-", "-" ],
			[ "-", "5", "-", "-", "-",  "-", "2", "-" ],
			[ "6", "-", "-", "-", "-",  "-", "-", "-" ],
			[ "-", "-", "-", "-", "-",  "-", "-", "1" ],
			[ "7", "-", "-", "-", "12", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-",  "-", "0", "-" ],
			[ "-", "8", "-", "-", "-",  "11", "-", "-" ],
			[ "-", "-", "9", "-", "10", "-", "-", "13" ]
		]
	},
	"R": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [7],
			[ "1", "-", "-", "2", "-" ],
			[ "-", "-", "-", "-", "3" ],
			[ "-", "-", "-", "-", "4" ],
			[ "5", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "0", "-", "-", "-", "6" ]
		]
	},
	"S": {
		width: 55,
		height: 100,
		wrap: false,
		pic: [ [8],
			[ "-", "1", "-", "-", "0" ],
			[ "2", "-", "-", "-", "-" ],
			[ "-", "3", "-", "4", "-" ],
			[ "-", "-", "-", "-", "5" ],
			[ "7", "-", "-", "6", "-" ]
		]
	},
	"T": {
		width: 55,
		height: 100,
		wrap: false,
		adj: [ [ "2", "3" ] ],
		pic: [ [4],
			[ "0", "-", "2", "-", "1" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "3", "-", "-" ]
		]
	},
	"U": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [8],
			[ "0", "-", "-", "-", "-", "-", "7" ],
			[ "-", "-", "-", "-", "-", "-", "-" ],
			[ "1", "-", "-", "-", "-", "-", "6" ],
			[ "-", "-", "-", "-", "-", "-", "-" ],
			[ "-", "2", "-", "-", "-", "5", "-" ],
			[ "-", "-", "3", "-", "4", "-", "-" ]
		]
	},
	"V": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [5],
			[ "0", "-", "-", "-", "4" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "1", "-", "3", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "2", "-", "-" ]
		]
	},
	"W": {
		width: 60,
		height: 100,
		wrap: false,
		pic: [ [5],
			[ "0", "-", "-", "-", "4" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "2", "-", "-" ],
			[ "-", "1", "-", "3", "-" ]
		]
	},
	"X": {
		width: 50,
		height: 100,
		wrap: false,
		adj: [ [ "2", "3" ] ],
		pic: [ [4],
			[ "0", "-", "-", "-", "2" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "3", "-", "-", "-", "1" ]
		]
	},
	"Y": {
		width: 45,
		height: 100,
		wrap: false,
		adj: [ [ "5", "2" ] ],
		pic: [ [6],
			[ "0", "-", "-", "-", "4" ],
			[ "-", "1", "-", "3", "-" ],
			[ "-", "-", "2", "-", "-" ],
			[ "-", "-", "5", "-", "-" ],
		]
	},
	"Z": {
		width: 60,
		height: 100,
		wrap: false,
		adj: [  ],
		pic: [ [4],
			[ "0", "-", "-", "-", "1" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "-", "-", "-", "-", "-" ],
			[ "2", "-", "-", "-", "3" ]
		]
	},

	coords: {  },
	getcoords: function(Letter, Num) {
		if (this.coords[Letter] == null) return null;

		return this.coords[Letter][Num];
	},
	generatecoords: function() {
		var tlett;
		for (var lett = 0; lett < ABC.length; lett++) {
			tlett = ABC[lett];
			if (this[tlett] == null) continue;

			this.coords[tlett] = [];
			for (var x = 0; x < this[tlett].pic[1].length; x++) {
				for (var y = 1; y < this[tlett].pic.length; y++) {
					if (this[tlett].pic[y][x] != "-") {
						//console.log(this[tlett][y][x] + ": " + x + ", " + y);
						
						this.coords[tlett][this[tlett].pic[y][x]] = {
							"x": x, "y": y, 
							"lenx": this[tlett].pic[1].length, 
							"leny": this[tlett].pic.length, 
							"wrap": this[tlett].wrap, 
							"adj": this[tlett].adj,
							"width": this[tlett].width,
							"height": this[tlett].height
						};
					}
				}
			}
		}
	}
}


var message_dots = [];
var welcome_message = [ 
	{ text: "WELCOME", align: "center" }, 
	{ text: "TO_MY"  , align: "center" },
	{ text: "WEBSITE", align: "center" }
];
var user_message = [
	{ text: "", align: "center" }
];
var umessage_offset = 0;
var windowwidthlimit = 1100;
*/

/// --- ///
/*
function INDEX_PAGE_LOAD() {
	motdwords = [];
	usermsg = [];
	motdfinished = false;

	message_dots = [];
	welcome_message = [ 
		{ text: "WELCOME", align: "center" }, 
		{ text: "TO_MY"  , align: "center" },
		{ text: "WEBSITE", align: "center" }
	];
	user_message = [
		{ text: "", align: "center" }
	];
	
	motd_letters.generatecoords();
}
*/

/// --- ///
/*
function Index_ResizeHandle(Diff) {
	[ ... ] 

	var lldiv = document.getElementById("LLDiv");
	for (var i = 0; i < 20; i++) message_dots[i] = (new MessageDot(lldiv.offsetLeft, 100, 50));

	motdwords = Index_GenerateMOTD(welcome_message, lldiv.offsetLeft, lldiv.offsetTop + 50, [ 1, 1], false, { chk: true, copy: motdwords });
	usermsg = Index_GenerateMOTD(user_message, lldiv.offsetLeft, lldiv.offsetTop + 400, [ 1, 1 ], true, { chk: true, copy: usermsg });
	
}
*/

/// Functions ///
/*
function MessageDot(startx, width, height) {
	this.x = Math.floor(Math.random() * width);
	this.y = Math.floor(Math.random() * height);
	this.vx = Math.random() * 4 - 2;
	this.vy = Math.random() * 4 - 2;
	this.ox = startx + 10;
	this.oy = windowHeight - height - 20;
}
function MOTDEdge(Coords, Scale, XOffsett, YOffset, Override) {
	if (Override) {
		this.x = this.goalx = (((Coords.x / Coords.lenx) * (Coords.width * Scale[0])) + 25) + XOffsett;
		this.y = this.goaly = (((Coords.y / Coords.leny) * (Coords.height * Scale[1]))) + YOffset;
		this.wrap = Coords.wrap;
		this.adj = Coords.adj;
		this.drawline = true;
	} else {
		var randdot = message_dots[Math.floor(Math.random() * message_dots.length)];
		this.x = Math.floor(randdot.x);
		this.y = Math.floor(randdot.oy + randdot.y);

		if (Coords != null) {
			this.goalx = (((Coords.x / Coords.lenx) * (Coords.width * Scale[0])) + 25) + XOffsett;
			this.goaly = (((Coords.y / Coords.leny) * (Coords.height * Scale[1]))) + YOffset;
			this.wrap = Coords.wrap;
			this.adj = Coords.adj;
		} else {
			this.goalx = XOffset;
			this.goaly = YOffset;
		}
		
		this.relx = (this.x - this.goalx) / Math.floor(Math.random() * 50 + 50);
		this.rely = (this.y - this.goaly) / Math.floor(Math.random() * 50 + 50);
		
		this.delay = 0; //Math.floor(Math.random() * 40 + 20);
	}
	
	this.xv = 0;
	this.vy = 0;
	this.drawline = false;
}
function MOTDLetter(LetterInd, Word, Scale, XOffsett, YOffset, Override) {
	this.letter = Word.charAt(LetterInd);
	
	this.edges = [];
	var motdletter = motd_letters[Word.charAt(LetterInd)];
	if (motdletter != null) {
		for (var i = 0; i < motd_letters[Word.charAt(LetterInd)].pic[0][0]; i++) {
			var coords = motd_letters.getcoords(this.letter, i);
			
			this.edges.push(new MOTDEdge(coords, Scale, XOffsett, YOffset, Override));	
		}
		
		this.width = (motdletter.width * Scale[0]);
		this.height = (motdletter.height * Scale[1]);
	} else if (this.letter == "_") this.width = 60 * Scale[0];
}
function Index_GenerateMOTD(MOTD, StartX, StartY, Scale, Override, CopyChk) {
	var templetters = [];
	var tempword;
	var xoffset = 0, yoffset = 0;
	var nletter;
	
	genwords = [];

	for (var i = 0; i < MOTD.length; i++) {
		tempword = MOTD[i]; //console.log(tempword);

		xoffset = 0;

		for (var j = 0; j < tempword.text.length; j++) {
			if (CopyChk.chk && CopyChk.copy[i] != null && j < CopyChk.copy[i].word.length) {
				nletter = CopyChk.copy[i].word[j];
			} else {
				nletter = new MOTDLetter(j, tempword.text, Scale, xoffset, yoffset, Override);
			}
			
			templetters.push(nletter);

			xoffset += nletter.width + 5;
		}
		
		if (nletter != null) yoffset += nletter.height;
		
		genwords.push(
			{
				word: templetters,
				startx: StartX,
				starty: StartY,
				width: xoffset,
				align: tempword.align
			}
		); 

		templetters = [];
	}

	return genwords;
}
function Index_DrawMOTD(motd, xoffset) {
	var mword, malign, mwidth, mstartx, mstarty, mletter;
	var totaloffsetx = 0,
		totaloffsety = 0;

	var lldiv = document.getElementById("LLDiv");
	var remainingw = windowWidth - lldiv.offsetLeft;

	for (var i = 0; i < motd.length; i++) {
		mword = motd[i].word;
		malign = motd[i].align;
		mwidth = motd[i].width;
		mstartx = motd[i].startx;
		mstarty = motd[i].starty;
		
		if (malign == null || malign == "left") xoffset = 0;
		else if (malign == "center") xoffset = (remainingw - mwidth) / 2;
		else if (malign == "right") xoffset = (remainingw - mwidth);
		
		for (var j = 0; j < mword.length; j++) {
			mletter = mword[j]; //if (i == 0 && j == 0) console.log(mletter);

			var lastedge = mletter.edges[0];
			
			for (var k = 0; k < mletter.edges.length; k++) {
				medge = mletter.edges[k]; //if (i == 0 && j == 0 && k == 0) console.log(medge);
				
				if (medge.delay > 0) {
					medge.delay -= 1;
					continue;
				}
				
				var absx = Math.abs(medge.x - medge.goalx) < 4;
				var absy = Math.abs(medge.y - medge.goaly) < 4;

				if (!absx) medge.x -= medge.relx;
				if (!absy) medge.y -= medge.rely;
				if (absx && absy) medge.drawline = true;

				totaloffsetx = mstartx + xoffset;
				totaloffsety = mstarty;

				ctx.beginPath();
				ctx.arc(totaloffsetx + medge.x, totaloffsety + medge.y, 2, 0, 2 * Math.PI);
				ctx.fill();

				if (k != 0) {
					var doline = true;

					if (medge.adj != null) {
						for (var m = 0; m < medge.adj.length; m++) {
							var e1 = medge.adj[m][0];
							var e2 = medge.adj[m][1];
							if (e1 == k) {
								if (mletter.edges[e1].drawline && mletter.edges[e2].drawline) {
									ctx.beginPath();
									ctx.moveTo(totaloffsetx + mletter.edges[e1].x, totaloffsety + mletter.edges[e1].y);
									ctx.lineTo(totaloffsetx + mletter.edges[e2].x, totaloffsety + mletter.edges[e2].y);
									ctx.stroke();
								}

								doline = false;
							}
						}
					} 
					
					if (doline && lastedge.drawline && medge.drawline) {
						ctx.beginPath();
						ctx.moveTo(totaloffsetx + lastedge.x, totaloffsety + lastedge.y);
						ctx.lineTo(totaloffsetx + medge.x   , totaloffsety + medge.y);
						ctx.stroke();
					}

					lastedge = medge;
				}
			}
			
			if (lastedge != null && lastedge.wrap && lastedge.drawline) {
				ctx.beginPath();
				ctx.moveTo(totaloffsetx + lastedge.x        , totaloffsety + lastedge.y);
				ctx.lineTo(totaloffsetx + mletter.edges[0].x, totaloffsety + mletter.edges[0].y);
				ctx.stroke();
			}
		}
	}
}
function Index_WelcomeAnimation() {
	ctx.fillStyle = "rgba(255, 255, 255, 255)";
	ctx.strokeStyle = "rgba(255, 255, 255, 255)";

	var lldiv = document.getElementById("LLDiv");
	if (lldiv == null) return;

	var boxw = windowWidth - lldiv.offsetLeft - 20;
	var boxh = 50;
	
	//ctx.beginPath();
	//ctx.rect(message_dots[0].ox, message_dots[0].oy, boxw, boxh);
	//ctx.stroke();
	
	var tempdot;
	for (var i = 0; i < message_dots.length; i++) {
		tempdot = message_dots[i];
		tempdot.x += tempdot.vx;
		tempdot.y += tempdot.vy;

			 if (tempdot.x < 0) tempdot.x = boxw;
		else if (tempdot.x > boxw) tempdot.x = 0;
			 if (tempdot.y < 0) tempdot.y = boxh;
		else if (tempdot.y > boxh) tempdot.y = 0;
		
		//ctx.beginPath();
		//ctx.arc(tempdot.ox + tempdot.x, tempdot.oy + tempdot.y, 2, 0, 2 * Math.PI);
		//ctx.fill();
	}
	
	Index_DrawMOTD(motdwords);
	Index_DrawMOTD(usermsg);

	if (llcanvashandle != null) llcanvashandle();
}
function Index_KeyDown(e) {

}
function Index_KeyUp(e) {
	var nmax = 12;
	var tlen = user_message[user_message.length - 1].text.length; 				//console.log("tlen: " + tlen);
	var tind = Math.floor((tlen + (nmax * (user_message.length - 1))) / nmax);	//console.log("tind: " + tind);
	
	if (user_message.length == tind) user_message.push({ text: "", align: user_message[0].align });
	
	if (e.keyCode == 8) {
		if (user_message[tind].text.length == 0 && tind > 0) {
			user_message[tind - 1].text = user_message[tind - 1].text.substring(0, nmax - 1);
			user_message.pop();
		} else {
			user_message[tind].text = user_message[tind].text.substring(0, tlen - 1);
		}
	}
	else if (e.keyCode == 13) user_message.push({ text: "", align: user_message[0].align });
	else if (e.keyCode == 32) user_message[tind].text += "_"; 
	else if (
		!(
			(e.keyCode >= 65 && e.keyCode <= 90) 
			|| 
			(e.keyCode >= 48 && e.keyCode <= 57)
			)
		) return; 
	else user_message[tind].text += (e.key).toUpperCase();
	
	var lldiv = document.getElementById("LLDiv");
	usermsg = Index_GenerateMOTD(user_message, lldiv.offsetLeft, 400, [ 1, 1 ], false, { chk: true, copy: usermsg });
}
*/


/*

	function Index_AboutAnimation() {
		[ ... ]

		// MOTD
		keyDownHandle = Index_KeyDown;
		keyUpHandle = Index_KeyUp;
		canvasHandle = Index_WelcomeAnimation;

		[ ... ]
	}
*/





