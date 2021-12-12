//
// Made By Jordan Hoosman
//

// 
// DEVELOPER NOTE: 
// 		> This pages could functionally be better but everything runs fine on my garbage laptop with an AMD A12-9720P 
//		> Everything works ¯\_(ツ)_/¯ 
//		> "No point in fixing something that isn't broken" - A very dumb person
// 

// TODO
// - Reimplement MOTD - Don't want to reprogram positioning right now so commenting out for now
//   - Moving code to 000archive.js


var lltop, llbuffer, llwidth, llheight;

var llcanvashandle = null;
var lltitle, llabout, llcontact, llprojects;
var indexItemsSettled, hoveredLL, hoveredLLHold;

const maxNotes = 15;
const maxMail = 30;
const maxLightningBalls = 11;

const MESSAGES = [
	{ font: [ 45, 90 ], c: "", l: "",        m: "Welcome to my website!" },
	{ font: [ 30, 55 ], c: "", l: "SUMMARY", m: "If you want to see a short intro/animation of who I am click here!" },
	{ font: [ 12, 25 ], c: "", l: "",        m: "[Hint] Hover your mouse over each box and see what happens!" }
];

var cranepos = { x: 0, y: 0, flap: true };
var seqdataobj = { 
	mode: 0, 
	gcount: 0, 
	shaking: 0, 
	oletters: null,
	opos: null
};

var snake = null;
var lbcontrol = { ox: 0, oy: 0 };
var lightningballs = [], lightningballimg = [];

/***** Page Loading *****/
function INDEX_PAGE_LOAD() {
	//console.log("Loading index page");

	pageContent.innerHTML += `
		<div id="LargeLinks">
			<div class="LL LLLeft" onmousemove="Index_LLMouseIn('LLAbout', 1)" id="LLAbout">
				<img src="Images/index/crane.gif" id="LLCraneGIF"/>
				<img src="Images/index/crane.gif" id="LLCraneGIFcpy" width="75px" height="75px"/>

				<img src="Images/index/pianoshadow.png" id="LLPianoShadow"/>
				<div id="LLNotes"></div>

				<div id="LLSequence">
					<div id="LLSequenceData"></div>
					<h2 class="LLSeqLet" id="LLSeq1">J</h2>
					<h2 class="LLSeqLet" id="LLSeq2">o</h2>
					<h2 class="LLSeqLet" id="LLSeq3">r</h2>
					<h2 class="LLSeqLet" id="LLSeq4">d</h2>
					<h2 class="LLSeqLet" id="LLSeq5">a</h2>
					<h2 class="LLSeqLet" id="LLSeq6">n</h2>
					<h2 class="LLSeqLet" id="LLSeqSpace"> </h2>
					<h2 class="LLSeqLet" id="LLSeq7">H</h2>
					<h2 class="LLSeqLet" id="LLSeq8">o</h2>
					<h2 class="LLSeqLet" id="LLSeq9">o</h2>
					<h2 class="LLSeqLet" id="LLSeq10">s</h2>
					<h2 class="LLSeqLet" id="LLSeq11">m</h2>
					<h2 class="LLSeqLet" id="LLSeq12">a</h2>
					<h2 class="LLSeqLet" id="LLSeq13">n</h2>
				</div>

				<div class="LLTitle" onclick=NavButtonClick('ABOUT')><h3>About</h3></div>
			</div>
			<div class="LL LLRight" onmousemove="Index_LLMouseIn('LLContact', 1)" id="LLContact">
				<div id="LLPostOffice"></div>
				
				<div class="LLTitle" onclick=NavButtonClick('CONTACT')><h3>Contact</h3></div>
			</div>
			<div class="LL LLLeft" onmousemove="Index_LLMouseIn('LLProjects', 1)" id="LLProjects">
				<div class="LLTitle" onclick=NavButtonClick('PROJECTS')><h3>Projects</h3></div>
			</div>
			<div class="LL LLRight" onmousemove="Index_LLMouseIn('LLOther', 1)" id="LLOther">
				<div id="LLLightningBalls"></div>

				<div class="LLTitle" onclick=NavButtonClick('OTHER')><h3>Other</h3></div>
			</div>
		</div>

		<div id="WelcomeAnimation"></div>
	`;

	lltitle = document.getElementsByClassName("LLTitle")[0];
	llabout = document.getElementById("LLAbout");
	llcontact = document.getElementById("LLContact");
	llprojects = document.getElementById("LLProjects");
	llother = document.getElementById("LLOther");

	indexItemsSettled = 0;
	hoveredLL = "";
	hoveredLLHold = false;

	resizeHandler = Index_ResizeHandle;
	canvasHandle = Index_Canvas;

	Index_Welcome_Animation();
	Index_ResizeHandle(0);
	Index_SlideIn();
}
function INDEX_PAGE_UNLOAD() {
	//console.log("Unloading index page");
	
	pageUnloadTimer = 1500;

	while (lightningballs.length > 0) lightningballs.pop();

	Index_SlideOut();
}

function Index_ResizeHandle(Diff) {
	let wa = document.getElementById("WelcomeAnimation");
	
	llbuffer = 1;
	if (windowHeight > windowWidth) {
		lltop    = 30;
		llwidth  = 100;
		llheight = 48.5;

		wa.style.top    = "10px";
		wa.style.left   = "calc(var(--nav-width) + 2vmin)";
		wa.style.width  = "100vmin";
		wa.style.height = "270px";

		llother.className = "LL LLeft";
		llcontact.className = "LL LLLeft";

		for (var i = 0; i < MESSAGES.length - 1; i++) document.getElementById("WAText" + i).style.fontSize = MESSAGES[i].font[1] + "px";
	} else {
		lltop    = 1;
		llwidth  = 48.5;
		llheight = 48.5;

		wa.style.top = "100px";
		wa.style.left = "calc(var(--nav-width) + (2 * (var(--ll-width) + var(--ll-buffer))) )";
		wa.style.width = "calc(" + windowWidth + "px - (var(--ll-left) + 100vmin))";
		wa.style.height = "calc(100% - 100px)";

		llother.className = "LL LLRight";
		llcontact.className = "LL LLRight";

		for (var i = 0; i < MESSAGES.length - 1; i++) document.getElementById("WAText" + i).style.fontSize = MESSAGES[i].font[0] + "px";
	}
	
	changeCSSProperty("--ll-buffer" , "1vmin");
	changeCSSProperty("--ll-width"  , llwidth  + "vmin");
	changeCSSProperty("--ll-height" , llheight + "vmin");
	changeCSSProperty("--ll-top"    , lltop    + "vmin");
	changeCSSProperty("--ll-left"   , "calc(var(--nav-width) + 2vmin)");
}

/***** Welcome *****/
function Load_Message(n) {
	var msg = document.getElementById("WAText" + n);
	var s = 0, t = 0, len = MESSAGES[n].m.length;

	var growmsg = setInterval(function() {
		if (s++ >= len) {
			var fixmsg = setInterval(function() {
				if (t++ == len) clearInterval(fixmsg);
				msg.innerHTML = MESSAGES[n].m.substring(0, t) + MESSAGES[n].c.substring(t + 1);
			}, 20);
			clearInterval(growmsg); 
		}

		msg.innerHTML = MESSAGES[n].c.substr(0, s);
	}, 15);
}
function Index_Welcome_Animation() {
	for (var i = 0; i < MESSAGES.length; i++) {
		document.getElementById("WelcomeAnimation").innerHTML += `
			<div class="WAText" onclick="NavButtonClick('` + MESSAGES[i].l + `', false)" id="WAText` + i + `"><h` + (i + 1) + ` ></h` + (i + 1) + `></div>
		`;
		
		MESSAGES[i].c = RandomText(MESSAGES[i].m, true);
		if (MESSAGES[i].l != "") {
			let link = document.getElementById("WAText" + i);
			link.style.cursor = "pointer";
		}
	}

	setTimeout(function() { Load_Message(0); }, 100);
	setTimeout(function() { Load_Message(1); }, 350);
	setTimeout(function() { Load_Message(2); }, 600);
}

/***** LargeLink Mouse Handles *****/
function Index_LLMouseIn(Item, Modifier) {
	if (Modifier == 0 || indexItemsSettled != 4) return;

	if (Modifier == -1) hoveredLL = "";
	else hoveredLL = Item;

	/*var blowupbox = document.getElementById(Item);
	var blowupmode = 0;
	var dogrow = Modifier == 1;
	var blowupval = dogrow ? 0 : 70;
	var leftoffset, topoffset, oriwidth, oriheight, status;
	
	if (Modifier > 0) {
		if (blowupbox.style.alt == null || blowupbox.style.alt == "") {
			leftoffset = (blowupbox.offsetLeft / windowWidth) * 100;
			topoffset = (blowupbox.offsetTop / windowHeight) * 100;
			oriwidth = (blowupbox.clientWidth / windowWidth) * 100;
			oriheight = (blowupbox.clientHeight / windowHeight) * 100;

			blowupbox.style.alt = 
				'{   "l": ' + leftoffset 
				+ ', "t": ' + topoffset 
				+ ', "w": ' + oriwidth 
				+ ', "h": ' + oriheight
				+ ', "s": "open"'
				+ ' }';
		} else {
			var altval = JSON.parse(blowupbox.style.alt);
			status = altval.s;
			
			if (status == "open") return;
		}
		
		hoveredLL = Item;
		ItemMouseOut(blowupbox, Index_LLMouseOut, 25);
	} else {
		var altval = JSON.parse(blowupbox.style.alt);
		leftoffset = altval.l;
		topoffset = altval.t;
		oriwidth = altval.w;
		oriheight = altval.h;
		status = altval.s;

		if (status != "open") return;
	}
	
	var llblowup = setInterval(() => {
		if (blowupmode == 0) {
			blowupval += (2.5 * Modifier);
			
			if (dogrow && blowupval >= 80) blowupmode = 1;
			else if (!dogrow && blowupval <= 0) {
				blowupval = 0;
				blowupmode = 1;
			}
		} else {
			if (!dogrow) {
				/*blowupbox.style.width = oriwidth + "%";
				blowupbox.style.height = oriheight + "%";
				blowupbox.style.left = leftoffset + "%";
				blowupbox.style.top = topoffset + "%";* /
				blowupbox.style.alt = null;
				
				if (hoveredLL == Item) hoveredLL = "";
			}

			clearInterval(llblowup);
		}
		
		/*blowupbox.style.width = "calc(" + oriwidth + "% + " + blowupval + "px)";
		blowupbox.style.height = "calc(" + oriheight + "% + " +  blowupval + "px)";
		blowupbox.style.left = "calc(" + leftoffset + "% - " + (blowupval / 2) + "px)";
		blowupbox.style.top = "calc(" + topoffset + "% - " + (blowupval / 2) + "px)";* /
	}, 5);*/
}
function Index_LLMouseOut(Item) {
	Index_LLMouseIn(Item.id, -1);
}

/***** LargeLink Animation *****/
function Index_SlideInElement(Item, IsTop, Delay, Modifier) {
	var ele = document.getElementById(Item);

	var slidein = Modifier == 1;
	var mode = slidein ? 1 : 3;
	
	var topgoal;
	if (windowHeight > windowWidth)
		topgoal = lltop + (Delay * (llheight + llbuffer));
	else 
		topgoal = IsTop ? lltop : lltop + (llheight + llbuffer);
	
	var topvalue = slidein ? ((-2 * llheight) - 5) : 0;

	setTimeout(function() {
		var topslide = setInterval(() => {
			if (mode == 1) {
				topvalue += (1.25 * Modifier);
				ele.style.top = topvalue + "vmin";

				if (slidein && topvalue >= topgoal) {
					mode = 2;
					topvalue = 0; 
				} else if (!slidein && topvalue <= -80) {
					mode = 4;
				}
			} else if (mode == 2) {
				topvalue += (5 * Modifier);
				ele.style.top = "calc(" + topgoal + "vmin + " + topvalue + "px)";
				
				if (slidein && topvalue >= 55) mode = 3;
				else if (!slidein && topvalue <= topgoal) mode = 1;
			} else if (mode == 3) {
				topvalue -= (2 * Modifier);
				ele.style.top = "calc(" + topgoal + "vmin + " + topvalue + "px)";

				if (slidein && topvalue <= 0) mode = 4;
				else if (!slidein && topvalue >= 50.5) mode = 2;
			} else {
				indexItemsSettled++;
				clearInterval(topslide);
			}
		}, 10);
	}, 3 * Delay * 80);
}
function Index_SlideIn() { 
	indexItemsSettled = 0;

	Index_SlideInElement("LLOther"   , false, 3, 1);
	Index_SlideInElement("LLProjects", false, 2, 1);
	Index_SlideInElement("LLContact" , true , 1, 1);
	Index_SlideInElement("LLAbout"   , true , 0, 1);

	Index_Animation();
}
function Index_SlideOut() {
	indexItemsSettled = 0;

	Index_SlideInElement("LLAbout"   , true , 3, -1.75);
	Index_SlideInElement("LLContact" , true , 2, -1.75);
	Index_SlideInElement("LLProjects", false, 1, -1.75);
	Index_SlideInElement("LLOther"   , false, 0, -1.75);
}

/***** Mail Letters *****/
function MailLetter(X, Y, VX) {
	this.x = X,
	this.y = Y,
	this.vx = VX,
	this.vy = (Math.random() * 2 + 1),
	this.s = (Math.random() * (2 * Math.PI))
}

/***** Lightning Balls *****/
function LightningBall(X, Y, VX, VY, OX, OY, Frame) {
	this.x = X;
	this.y = Y;
	this.vx = VX;
	this.vy = VY;
	this.ox = OX;
	this.oy = OY;
	this.frame = Frame;

	this.strikediv = 6;
	this.striking = false;
	this.strikecd = false;
	this.strikepath = [];
	this.strikedur = 5;
	this.strikect = 0;
}
function Index_LightningStrike(obj, mposx, mposy, mrelx, mrely, mdirabs) {
	/*ctx.beginPath();
	ctx.moveTo(lbcontrol.ox + obj.x + (60/2), lbcontrol.oy + obj.y + (60/2));
	ctx.lineTo(lbcontrol.ox + mposx, lbcontrol.oy + mposy);
	ctx.stroke();*/

	if (obj.striking) {
		if ((obj.strikect += 1) > obj.strikedur) {
			obj.strikect = 0;
			obj.striking = false;
			setTimeout(function() {
				obj.strikecd = false;
			}, Math.random() * 75 + 75);
		} else {
			ctx.strokeStyle = "rgba(40, 200, 255, 255)";
			ctx.beginPath();

			var lastpt = { x: obj.strikepath[0], y: obj.strikepath[0].y }; 
			var nextpt;

			for (var i = 0; i < obj.strikepath.length; i++) {
				nextpt = obj.strikepath[i];
				
				ctx.moveTo(lbcontrol.ox + lastpt.x, lbcontrol.oy + lastpt.y);
				ctx.lineTo(lbcontrol.ox + nextpt.x, lbcontrol.oy + nextpt.y);	

				lastpt = nextpt;
			}

			ctx.stroke();
		}
	} else if (!obj.strikecd) {
		obj.strikecd = true;
		obj.strikepath = [];

		var angle = Math.atan2(mrely, mrelx);
		var lastpt = { x: obj.x + (60/2), y: obj.y + (60/2) };
		obj.strikepath.push(lastpt);
		var nextpt, randpt;
		for (var i = 0; i < obj.strikediv; i++) {
			randpt = {
				x: Math.round((mdirabs / (obj.strikediv)) * Math.cos(angle + (Math.random() * (Math.PI / 2) - (Math.PI / 4) ))), 
				y: Math.round((mdirabs / (obj.strikediv)) * Math.sin(angle + (Math.random() * (Math.PI / 2) - (Math.PI / 4) ))) 
			};
			nextpt = { 
				x: lastpt.x + randpt.x, 
				y: lastpt.y + randpt.y 
			};

			obj.strikepath.push({ x: nextpt.x, y: nextpt.y });
			lastpt = nextpt;
		}

		obj.strikepath.push({ x: mposx, y: mposy });
		obj.striking = true;
		obj.strikect = 0;
	}
}
function Index_LightningBalls() {
	llother = document.getElementById("LLOther");
	var llorect = llother.getBoundingClientRect();

	if (hoveredLL == "LLOther") {
		ctx.strokeStyle = "rgba(20, 80, 255 , 255)";

		lbcontrol.ox = llorect.left - windowRect.left;
		lbcontrol.oy = llorect.top - windowRect.top;
		
		var mposx = relMouseX(llorect);
		var mposy = relMouseY(llorect);
		
		for (var i = 0; i < lightningballs.length; i++) {
			var tlb = lightningballs[i];

			var mrelx = mposx - (tlb.x + (60 / 2));
			var mrely = mposy - (tlb.y + (60 / 2));
			var mabsx = Math.abs(mrelx);
			var mabsy = Math.abs(mrely);
			var mdirabs = Math.sqrt((mabsx * mabsx) + (mabsy * mabsy));

			if (mdirabs < 100) Index_LightningStrike(tlb, mposx, mposy, mrelx, mrely, mdirabs);
			
			if ((tlb.frame += 1) >= 120) tlb.frame = 0;

			tlb.x += tlb.vx;
			tlb.y += tlb.vy;
			
			if (tlb.x < 0) tlb.x = llorect.width  - 80; else if (tlb.x > llorect.width  - 80) tlb.x = 0;
			if (tlb.y < 0) tlb.y = llorect.height - 80; else if (tlb.y > llorect.height - 80) tlb.y = 0;

			ctx.drawImage(lightningballimg[tlb.frame], lbcontrol.ox + tlb.x, lbcontrol.oy + tlb.y, 60, 60);
		}
	} else {
		llcanvashandle = null;
		lightningballs = [];
	}
}

/***** Pet Snake *****/
function Snake() {
	this.body = [ ]; 
	this.food = { x: 0, y: 0 };
	this.color = 0;
	this.dir = { x: 0, y: 0, l: 1 }; 
	this.lagam = 2; 
	this.lagct = 0;
	
	this.diddraw = false;
	
	this.screen = { id: "LLProjects", x: 0, y: 0, w: 0, h: 0 };
	this.x = 0; 
	this.y = 0;
	this.dw = 0; 
	this.dh = 0;
	this.srad = 30;
	
	this.behavior = {
		mode: 0,
		getfood: false,
		deg: 0,
		off: 0
	}

	this.drawsquare = function(p) {
		ctx.fillRect(Math.ceil(this.screen.x + p.x), Math.ceil(this.screen.y + p.y), Math.ceil(this.dw), Math.ceil(this.dh));
	}
	this.drawbody = function() {
		this.color = (this.color + 1) % 360;

		let scolor = HueToRGB(this.color, 255);
		ctx.fillStyle = "rgba(" + scolor.r + ", " + scolor.g + ", " + scolor.b + ", " + scolor.a + ")";

		for (var i = this.body.length - 1; i > 0; i--) {
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
			this.drawsquare(this.body[i]);
		}
		this.body[0].x = this.x;
		this.body[0].y = this.y;
		this.drawsquare(this.body[0]);
	
		if (this.behavior.getfood) this.drawsquare(this.food);
	}
	this.drawhead = function() {
		this.drawsquare(this);
	}
	this.updatescreen = function() {
		this.screen.x = GetElementX(this.screen.id);
		this.screen.y = GetElementY(this.screen.id);
		this.screen.w = GetElementWidth(this.screen.id);
		this.screen.h = GetElementHeight(this.screen.id);
		this.screen.xw = this.screen.x + this.screen.w;
		this.screen.yh = this.screen.y + this.screen.h;
		
		this.dw = this.screen.w / 50;
		this.dh = this.screen.h / 50;
	}
	this.checkbounds = function() {
		if (this.x > this.screen.w - this.dw) this.x = 0; else if (this.x < 0) this.x = this.screen.w - this.dw;
		if (this.y > this.screen.h - this.dh) this.y = 0; else if (this.y < 0) this.y = this.screen.h - this.dh;
	}
	this.think = function() {
		let mposx, mposy, mabsx, mabsy, mdirabs;

		switch (this.behavior.mode) {
			/// Seek ///
			case 0: {
				// Find food
				if (this.behavior.getfood) {
					mposx = this.x - this.food.x;
					mposy = this.y - this.food.y;
					mabsx = Math.abs(mposx);
					mabsy = Math.abs(mposy);

					this.dir.l = mabsx > mabsy ? 1 : 2;
					if (Math.sqrt((mabsx * mabsx) + (mabsy * mabsy)) <= 6) {
						this.behavior.mode = 1;
						this.behavior.getfood = false;
						this.body.push({ x: this.x, y: this.y });
					}
				// Find mouse
				} else {
					mposx = relMouseX(this.screen);
					mposy = relMouseY(this.screen);
					mabsx = Math.abs(mposx - this.x);
					mabsy = Math.abs(mposy - this.y);
					mdirabs = Math.sqrt((mabsx * mabsx) + (mabsy * mabsy));

					if (mdirabs > 50) this.dir.l = mabsx > mabsy ? 1 : 2;
					// Idle
					else {
						this.dir.l = 0;
						this.behavior.mode = 1;
					}
				}
				
				// Move to position
				if (this.dir.l == 1) {
					// Direction
					if (this.x < mposx) this.dir.x = 0; else if (this.x > mposx) this.dir.x = 1;
					// Move
					if (this.dir.x == 0) this.x += this.dw; else this.x -= this.dw;
				} else if (this.dir.l == 2) {
					// Direction
					if (this.y < mposy) this.dir.y = 0; else if (this.y > mposy) this.dir.y = 1;
					// Move
					if (this.dir.y == 0) this.y += this.dh; else this.y -= this.dh;
				}

				break;
			}
			/// Idle ///
			case 1: {
				mposx = relMouseX(this.screen);
				mposy = relMouseY(this.screen);
				mabsx = Math.abs(mposx - this.x);
				mabsy = Math.abs(mposy - this.y);
				mdirabs = Math.sqrt((mabsx * mabsx) + (mabsy * mabsy));

				if (mdirabs > 80) {
					this.behavior.mode = 0;
				} else {
					if ((this.behavior.deg += (Math.PI / 10)) >= 2 * Math.PI) this.behavior.deg = 0;
					
					// Compensation
					let sdeg = this.behavior.deg;
					if (Math.abs(sdeg - PI_D4) < PI_D8 || Math.abs(sdeg - (5 * PI_D4)) < PI_D8) {
						let yspin = ((mposy / this.dh) * this.dh) + (Math.sin(sdeg) * this.srad);

						this.y += (this.dh * (this.y < yspin ? 1 : -1));
					} else if (Math.abs(sdeg - (3 * PI_D4)) < PI_D8 || Math.abs(sdeg - (7 * PI_D4)) < PI_D8) {
						let xspin = ((mposx / this.dw) * this.dw) + (Math.cos(sdeg) * this.srad);
						
						this.x += (this.dw * (this.x < xspin ? 1 : -1));
					} else {
						     if (sdeg > (7 * PI_D4) || sdeg <= PI_D4)       this.y += this.dh;
						else if (sdeg > PI_D4       && sdeg <= (3 * PI_D4)) this.x -= this.dw;
						else if (sdeg > (3 * PI_D4) && sdeg <= (5 * PI_D4)) this.y -= this.dh;
						else if (sdeg > (5 * PI_D4) && sdeg <= (7 * PI_D4)) this.x += this.dw; 
					}

					// Time to eat
					if (Math.random() * 1000 < 10) {
						this.behavior.getfood = true;
						this.behavior.mode = 0;
						this.food = { x: Math.floor(Math.random() * this.screen.w), y: Math.floor(Math.random() * this.screen.h) };
					}

					break;
				}
			}
		}
	}
}
function Index_SnakeHandle() {
	if (snake == null) {
		snake = new Snake();
		snake.x = GetElementWidth(snake.screen.id) / 2;
		snake.y = GetElementHeight(snake.screen.id) / 2;
		snake.body.push({ x: snake.x, y: snake.y });
		snake.body.push({ x: snake.x, y: snake.y });
		snake.body.push({ x: snake.x, y: snake.y }); 
	}
	if (hoveredLL == "LLProjects") {
		snake.updatescreen();
		snake.checkbounds();
		
		snake.drawhead();
		snake.think();
		snake.drawbody();
	} else {
		llcanvashandle = null;
	}
}

/***** Main Handler *****/
function Index_Canvas() {
	if (llcanvashandle != null) llcanvashandle();
}
function Index_Animation() {
	/// Crane ///
	var craneele = document.getElementById("LLCraneGIF");
	var cranecpy = document.getElementById("LLCraneGIFcpy");
	cranepos.x = craneele.offsetLeft;
	cranepos.y = craneele.offsetTop;

	/// Piano ///
	for (var i = 0; i < maxNotes; i++) document.getElementById("LLNotes").innerHTML += '<div id="LLNote' + i + '"></div>';
	
	/// Sequence ///
	var sequence = document.getElementById("LLSequence");
	var oriseqletters = document.getElementsByClassName("LLSeqLet");
	var lettersreturning = false;
	var onletter = 0;
	var lettertickc = 0;
	shakeori = "calc(50% - " + (sequence.clientWidth / 2) + "px)";
	sequence.style.left = shakeori;

	seqdataobj.oletters = [];
	seqdataobj.opos = [];
	for (var i = 0; i < oriseqletters.length; i++) {
		seqdataobj.oletters.push(oriseqletters[i].innerHTML);
		seqdataobj.opos.push(oriseqletters[i].offsetLeft + "-" + oriseqletters[i].clientTop);
	}

	// Mail
	for (var i = 0; i < maxMail; i++) document.getElementById("LLPostOffice").innerHTML += '<img src="Images/index/mail.png" class="LLMail"/>';
	var allMail = document.getElementsByClassName("LLMail");
	var allLetters = [];
	for (var i = 0; i < allMail.length; i++) {
		var mrandx = Math.random() * (llcontact.clientWidth - allMail[i].clientWidth);
		var mrandy = Math.random() * 120 - 60;
		var mrandvx = (Math.random() * 2 - 1);
		
		allLetters.push(new MailLetter(mrandx, mrandy, mrandvx));
		allMail[i].style.left = mrandx + "px";
		allMail[i].style.top = mrandy + "px";
	}

	// 
	var changeletter = (seqletter) => {
		seqletter.innerHTML = RandomLetter();
	}
	var rotateletter = (seqletter) => {
		var charval = seqletter.innerHTML.charCodeAt(0) + 1;
		if (charval > 90 && charval < 97) charval = 97;
		else if (charval > 122) charval = 65;
		seqletter.innerHTML = String.fromCharCode(charval);
	}
	var lettermove = (tseqletter, tseqalt) => {	
		if (Math.random() * 1000 < 75) changeletter(tseqletter);

		tseqalt.x += tseqalt.vx;
		tseqalt.y += tseqalt.vy;

		tseqletter.style.left = tseqalt.x + "px";
		tseqletter.style.top = tseqalt.y + "px";
		tseqletter.style.transform = "rotate(0.0deg)";
		
		tseqletter.style.alt = JSON.stringify(tseqalt);
	}
	var letterreturn = (tseqletter, ival) => {
		if (tseqletter == null) return;
		
		var tseqalt = JSON.parse(tseqletter.style.alt);
		tseqalt.vx = ((tseqalt.ox - tseqalt.x) / 55);
		tseqalt.vy = ((tseqalt.oy - tseqalt.y) / 55);
		tseqletter.style.alt = JSON.stringify(tseqalt);

		var letreturn = setInterval(() => {
			if (lettertickc < 55) {
				lettermove(tseqletter, JSON.parse(tseqletter.style.alt));
			} else if (lettertickc >= 55 && lettertickc < 80) {
				if (Math.random() * 1000 < 25) changeletter(tseqletter);
				tseqletter.style.left = tseqalt.ox + "px";
				tseqletter.style.top = tseqalt.oy + "px";
				tseqletter.style.transform = "rotate(0.0deg)";
			} else clearInterval(letreturn);
		}, 30);

		var letfinish = setInterval(() => {
			if (lettertickc == 1000 && lettersreturning == true) {
				if (ival == onletter) {
					var goalletter = seqdataobj.oletters[ival];
					
					if (goalletter == " ") { 
						tseqletter.innerHTML = " ";
						onletter++;
					}
					else if (goalletter == tseqletter.innerHTML) onletter++;
					else rotateletter(tseqletter);
				}
				
				return 1;
			} else if (lettersreturning == false) {
				tseqletter.innerHTML = seqdataobj.oletters[ival];
				tseqletter.style.position = "";
				tseqletter.style.transform = "";
				tseqletter.style.alt = "";
	
				clearInterval(letfinish);
	
				return 2;
			} 
		}, 4);
	}

	var allanimations = setInterval(() => {
		if (CURRENTPAGE != "INDEX") clearInterval(allanimations);
		
		var seqletters = document.getElementsByClassName("LLSeqLet");
		
		/// About ///
		if (hoveredLL == "LLAbout") {
			/// Crane Animation ///
			cranepos.x -= ((Math.random() * 5) + 25.0) / 10.0;

			if (cranepos.flap) {
				cranepos.y -= ((Math.random() * 10) + 70.0) / 100.0;
				if (cranepos.y <= 5) cranepos.flap = false;
			} else {
				cranepos.y += ((Math.random() * 15) + 80.0) / 100.0;
				if (cranepos.y >= 55) cranepos.flap = true;
			}
			
			craneele.style.left = cranepos.x + "px";
			craneele.style.top = cranepos.y + "px";
			cranecpy.style.top = cranepos.y + "px";

			if (cranepos.x < 0 - craneele.clientWidth) {
				cranepos.x = llabout.clientWidth - craneele.clientWidth;
			} else if (cranepos.x < 0) {
				cranecpy.style.opacity = "1.0";
				cranecpy.style.left = (llabout.clientWidth + cranepos.x) + "px";
			} else {
				cranecpy.style.opacity = "0.0";
			}

			/// Piano Shadow ///
			var allnotes = document.getElementsByClassName("LLNote");
			if (Math.random() * 100 < 7) {
				var tnote = null;

				for (var i = 0; i < maxNotes; i++) {
					var chknote = document.getElementById("LLNote" + i);
					if (chknote.innerHTML == null || chknote.innerHTML == "") {
						tnote = chknote;
						break;
					}
				}

				if (tnote != null) {
					var randnote = Math.floor(Math.random() * 10);
					var randimg = "Images/index/Notes/" + randnote + ".png"; //console.log(randimg);

					tnote.innerHTML = '<img src="' + randimg + '" class="LLNote"/>';

					setTimeout(function() {
						tnote.innerHTML = "";
					}, Math.floor(Math.random() * 500 + 1000));
				}
			}
			for (var i = 0; i < allnotes.length; i++) {
				var note = allnotes[i];
				
				if (note.style.alt == null || note.style.alt == "") {
					var pianoman = document.getElementById("LLPianoShadow");
					note.style.alt = '{' 
							+ '  "l": ' + (pianoman.offsetLeft + (pianoman.offsetWidth / 2) + Math.floor(Math.random() * 160 - 80))
							+ ', "t": ' + (pianoman.offsetTop + (pianoman.offsetHeight / 2) - Math.floor(Math.random() * 15))
							+ ', "r": 0.0'
							+ ', "vx": ' + ((Math.random() * 16 - 8) / 10.0)
							+ ', "vy": ' + (-(Math.random() * 10) / 10.0)
							+ ', "vr": ' + ((Math.random() * 30 - 15) / 10.0)
						+ ' }';
				}
				
				var altval = JSON.parse(note.style.alt);

				altval.l += altval.vx;
				altval.t += altval.vy;
				altval.r += altval.vr;

				note.style.left = altval.l + "px";
				note.style.top  = altval.t  + "px";
				note.style.transform = "rotate(" + altval.r + "deg)";

				note.style.alt = JSON.stringify(altval);
			}

			/// Name Sequence ///
			var seqmode = seqdataobj.mode;
			var seqshaking = seqdataobj.shaking;
			for (var i = 0; i < seqletters.length; i++) {
				var seqletter = seqletters[i];
				
				if (seqmode == 0 && !seqshaking) { 
					if (Math.random() * 1000 < 4) {
						changeletter(seqletter);
						seqshaking = true;
						
						var shakelib = 0;
						var shake = setInterval(() => {
							if (shakelib % 2 == 0) sequence.style.left = "calc(50% - " + ((sequence.clientWidth / 2) - (4 * seqdataobj.gcount)) + "px)";
							else sequence.style.left = "calc(50% - " + ((sequence.clientWidth / 2) + (4 * seqdataobj.gcount)) + "px)";
							
							if (shakelib++ > (2 * seqdataobj.gcount) + 1) {
								sequence.style.left = shakeori;
								seqshaking = false;
								if (seqdataobj.gcount >= 6) seqdataobj.mode = 1;
								else seqdataobj.gcount++;

								clearInterval(shake);
							}
						}, 20);
					}
				} else if (seqmode == 0) {
					document.getElementById("LLSequenceData").style.left = shakeori;
				} else if (seqmode == 1) {
					var flyaway;

					if (seqletter.style.alt == null || seqletter.style.alt == "") {
						var tvx = ((Math.random() * 15 + 5) * ((Math.floor(Math.random() * 2) == 1) ? 1 : -1));
						var opos = seqdataobj.opos[i];
						var oposx = opos.substring(0, opos.indexOf("-"));
						var oposy = opos.substring(opos.indexOf("-") + 1);
						
						var seqstat = 
							'{ "x": ' + oposx
							+ ', "y": ' + oposy
							+ ', "r": 0.0'
							+ ', "ox": ' + oposx
							+ ', "oy": ' + oposy
							+ ', "vx": ' + tvx
							+ ', "vy": ' + ((Math.random() * 3 - 1.5))
							+ ', "vr": ' + (Math.random())
							+ ', "limy": ' + ((llabout.clientHeight + lltitle.clientHeight) / 2 + (seqletter.clientHeight / 2))
							+ ' }';
						flyaway = JSON.parse(seqstat);
						seqletter.style.alt = seqstat;
						seqletter.style.position = "absolute";
					} else {
						flyaway = JSON.parse(seqletter.style.alt);
					}

					if (Math.random() * 1000 < 20) changeletter(seqletter);
					
					
					flyaway.x += flyaway.vx;
					flyaway.r += flyaway.vr;
					flyaway.y += flyaway.vy; //if (i == 0) console.log(flyaway.y);

					flyaway.vx *= 0.8;
					if (Math.abs(flyaway.vx) < 0.05) {
						if (flyaway.y < flyaway.limy) {
							flyaway.vy = Math.abs(flyaway.vy * 1.1);
						} else {
							flyaway.vy = 0;
							flyaway.y = flyaway.limy;
						}
					} 
					
					seqletter.style.left = flyaway.x + "px";
					seqletter.style.top = flyaway.y + "px";
					seqletter.style.transform = "rotate(" + flyaway.r + "deg)"
					seqletter.style.alt = JSON.stringify(flyaway);
				}
			}
		} else if (hoveredLL != "LLAbout" && seqdataobj.mode == 1) {
			seqdataobj.mode = 0;
			seqdataobj.gcount = 0;
			seqdataobj.shaking = 0;
			sequence.style.left = shakeori;
			
			onletter = 0;
			tickc = 0;
			lettertickc = 0;
			lettersreturning = true;

			for (var i = 0; i < seqletters.length; i++) letterreturn(seqletters[i], i);
		}
		if (lettersreturning) {
			if (lettertickc < 80) lettertickc++;
			else lettertickc = 1000;
			
			if (onletter >= oriseqletters.length - 1) lettersreturning = false;
		}

		/// Contact ///
		else if (hoveredLL == "LLContact") {
			for (var i = 0; i < allMail.length; i++) {
				var mailalt = allLetters[i];
				mailalt.x += mailalt.vx;
				mailalt.y += mailalt.vy;
				if (mailalt.y > llcontact.offsetHeight) {
					mailalt.y = -30 + Math.random() + 20;
					mailalt.x = Math.random() * (llcontact.clientWidth - allMail[i].clientWidth);
					mailalt.vy = (Math.random() * 2 + 1);
				}
				
				mailalt.vx = (3 * Math.cos(mailalt.s += (Math.PI / (Math.random() * 10 + 50))));
				if (mailalt.s > (2 * Math.PI)) mailalt.s = 0;

				var proxchkx = mouseX - llcontact.offsetLeft - mailalt.x;
				var proxchky = mouseY - llcontact.offsetTop - mailalt.y;

				var aproxx = Math.abs(proxchkx);
				var aproxy = Math.abs(proxchky);
				if (aproxx < 50 && aproxy < 35) {
					var mailboost = 50 - aproxx; 
					mailalt.x += ((mouseX - llcontact.offsetLeft) > (mailalt.x + 10)) ? -mailboost : mailboost; 
				}

				allMail[i].style.left = mailalt.x + "px";
				allMail[i].style.top = mailalt.y + "px";
			}
		}
		
		/// Projects ///
		else if (hoveredLL == "LLProjects") {
			if (llcanvashandle == null) llcanvashandle = Index_SnakeHandle;
		}

		/// Other ///
		else if (hoveredLL == "LLOther") {
			var llother = document.getElementById("LLOther");
			if (llother == null) return;
			

			if (lightningballimg.length == 0) {
				for (var i = 0; i < 120; i++) {
					var nimg = new Image();
					nimg.src = "Images/index/LightningBall/" + i + ".png";
					lightningballimg.push(nimg);
				}
			}

			if (lightningballs.length == 0) {
				let llorect = llother.getBoundingClientRect();
				for (var i = 0; i < maxLightningBalls; i++) {
					var nlb = new LightningBall(
						Math.floor(Math.random() * llorect.width),
						Math.floor(Math.random() * llorect.height),
						Math.random() * 2 - 1,
						Math.random() * 2 - 1,
						llorect.left - windowRect.left,
						llorect.top - windowRect.top,
						Math.floor(Math.random() * 120)
					);

					lightningballs.push(nlb);
				}

				llcanvashandle = Index_LightningBalls;
			}
		}
	}, 30);
}
