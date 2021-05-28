var canvasHeight = 720 //window.innerHeight - (window.innerHeight*.03)
var canvasWidth = 1080 //window.innerWidth - (window.innerWidth*.02)
var defaultGround = 0;

var canvas = document.getElementById("game"), 
	ctx = canvas.getContext("2d"), 
	width = canvasWidth, 
	height = canvasHeight;
canvas.width = width;
canvas.height = height;

var paused = false;
var onInput = 0;
var inputingFor = 0;
var keysToIgnore = [
	112,113,114,115,116,117,118,119,120,121,122,123, //f keys
	13, //enter
	8, //space
	27, //escape
	37,38,39,40 //arrow keys
];
var whatToInput = ["up","right","left","attack 1","attack 2","block","special"];

var restarting = false;
var playing = false;
var currentChar = 0;
var currentChar2 = 0;
var selectedChar = "Luffy";
var selectedChar2 = "Luffy";
var changingKey = [false,"None"]

var pControls = {
	"Player 1": {
		"up": getKeyCode("w"),
		"down": getKeyCode("s"),
		"right": getKeyCode("d"),
		"left": getKeyCode("a"),
		"light": getKeyCode("f"),
		"heavy": getKeyCode("g"),
		"special": getKeyCode("t")
	},
	"Player 2": {
		"up": getKeyCode("up"),
		"down": getKeyCode("down"),
		"right": getKeyCode("right"),
		"left": getKeyCode("left"),
		"light": getKeyCode("j"),
		"heavy": getKeyCode("k"),
		"special": getKeyCode("o")
	}	
}

var currentPlr1 = false;
var currentPlr2 = false;

var startX = 50; 
var startY = 450;
var imgX = 51;
var imgY = 39;
var ipr = 8; //images per row
var cipr = 0; //current image row
var ipc = 10; //image per column
var cipc = 0; // current image column

var bimgW = 100;
var bimgH = 100;
var bimgX = startX + (imgX*ipr) - bimgW;
var bimgY = 350;
var bimgX2 = (canvasWidth - (imgX*ipr) - startX);

var keys = [];
var bg = "Images/Backgrounds/Background1.png";

var menuScreen = true;
var currentScreen = "Menu";
var lastScreen = "Menu";
var bSize = [120,40];











