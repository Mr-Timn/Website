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


var lldelay = 0;
var lltop = 1;
var llbuffer = 1; // Middle buffer
var llsize = 48.5;  // (100 - ((lltop*2) + llbuffer)) / 2
var llbottom = 50.5; // lltop + llbuffer + llsize

var indexItemsSettled, 
	hoveredLL, hoveredLLHold, 
	maxNotes, 
	maxMail,
	maxLightningBalls;
var llcanvashandle = null;

var cranepos = { x: 0, y: 0, flap: true };
var seqdataobj = { 
	mode: 0, 
	gcount: 0, 
	shaking: 0, 
	oletters: null,
	opos: null
};

var snake = null;
var lbcontrol = {
	ox: 0, oy: 0
};

var lightningballs = [];
var lightningballimg = [];

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
		
		<div id="LLDiv"></div>	
	`;

	indexItemsSettled = 0;
	hoveredLL = "";
	hoveredLLHold = false;
	maxNotes = 15;
	maxMail = 30;
	maxLightningBalls = 11;

	resizeHandler = Index_ResizeHandle;
	canvasHandle = Index_WelcomeAnimation;
	
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
	changeCSSProperty("--ll-size"  , llsize   + "vmin");
	changeCSSProperty("--ll-top"   , lltop    + "vmin");
	changeCSSProperty("--ll-bottom", llbottom + "vmin");
	changeCSSProperty("--ll-left"  , "calc(" + document.getElementById("Navigation").clientWidth + "px + 2vmin)");
}

/***** LargeLink Mouse Handles *****/
function Index_LLMouseIn(Item, Modifier) {
	if (Modifier == 0 || indexItemsSettled != 4) return;

	var blowupbox = document.getElementById(Item);
	var blowupmode = 0;
	var dogrow = Modifier == 1;
	var blowupval = dogrow ? 0 : 70;
	var leftoffset, topoffset, oriwidth, oriheight, status;
	
	// Disabling/commenting out for stability
	// If reenabled, scrnadj interval needs to be fixed
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
				blowupbox.style.top = topoffset + "%";*/
				blowupbox.style.alt = null;
				
				if (hoveredLL == Item) hoveredLL = "";
			}

			clearInterval(llblowup);
		}
		
		/*blowupbox.style.width = "calc(" + oriwidth + "% + " + blowupval + "px)";
		blowupbox.style.height = "calc(" + oriheight + "% + " +  blowupval + "px)";
		blowupbox.style.left = "calc(" + leftoffset + "% - " + (blowupval / 2) + "px)";
		blowupbox.style.top = "calc(" + topoffset + "% - " + (blowupval / 2) + "px)";*/
	}, 5);
}
function Index_LLMouseOut(Item) {
	Index_LLMouseIn(Item.id, -1);
}

/***** LargeLink Animation *****/
function Index_SlideInElement(Item, IsTop, Delay, Modifier) {
	var ele = document.getElementById(Item);

	var abspos = IsTop ? lltop : llbottom;
	
	var slidein = Modifier == 1;
	var topgoal = abspos;
	var topvalue = slidein ? (-2 * llsize - 5) : 0;
	var mode = slidein ? 1 : 3;

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
	}, Delay);
}
function Index_SlideIn() { 
	indexItemsSettled = 0;

	Index_SlideInElement("LLOther"   , false, lldelay + 0  , 1);
	Index_SlideInElement("LLProjects", false, lldelay + 300, 1);
	Index_SlideInElement("LLContact" , true , lldelay + 600, 1);
	Index_SlideInElement("LLAbout"   , true , lldelay + 900, 1);

	Index_AboutAnimation();
}
function Index_SlideOut() {
	indexItemsSettled = 0;

	Index_SlideInElement("LLAbout"   , true , 0  , -1.75);
	Index_SlideInElement("LLContact" , true , 100, -1.75);
	Index_SlideInElement("LLProjects", false, 200, -1.75);
	Index_SlideInElement("LLOther"   , false, 300, -1.75);
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
	var llother = document.getElementById("LLOther");
	var llorect = llother.getBoundingClientRect();

	if (hoveredLL == "LLOther") {
		ctx.strokeStyle = "rgba(20, 80, 255 , 255)";

		lbcontrol.ox = llorect.left - windowRect.left;
		lbcontrol.oy = llorect.top - windowRect.top;
		
		var mposx = relMouseX(llorect);
		var mposy = relMouseY(llorect);
		
		for (var i = 0; i < lightningballs.length; i++) {
			var tlb = lightningballs[i];

			var mrelx = mposx - (tlb.x + (60/2));
			var mrely = mposy - (tlb.y + (60/2)); //console.log(mrelx + " - " + mrely);
			var mabsx = Math.abs(mrelx);
			var mabsy = Math.abs(mrely); //console.log(mabsx + " - " + mabsy);
			var mdirabs = Math.sqrt((mabsx * mabsx) + (mabsy * mabsy)); //console.log(mdirabs);

			if (mdirabs < 100) {
				Index_LightningStrike(tlb, mposx, mposy, mrelx, mrely, mdirabs);
			}

			if ((tlb.frame += 1) >= 120) tlb.frame = 0;

			tlb.x += tlb.vx;
			tlb.y += tlb.vy;
			
			if (tlb.x < 0) tlb.x = llorect.width - 80;
			else if (tlb.x > llorect.width - 80) tlb.x = 0;
			if (tlb.y < 0) tlb.y = llorect.height - 80;
			else if (tlb.y > llorect.height - 80) tlb.y = 0;

			ctx.drawImage(lightningballimg[tlb.frame], lbcontrol.ox + tlb.x, lbcontrol.oy + tlb.y, 60, 60);
		}
	} else {
		llcanvashandle = null;
		lightningballs = [];
	}
}

/***** Pet Snake *****/
function Snake() {
	this.x = 0; 
	this.y = 0; 
	this.ox = 0; 
	this.oy = 0; 
	this.dw = 0; 
	this.dh = 0;
	this.body = [ ]; 
	this.food = { x: 0, y: 0 };
	this.color = 0;
	this.boundw = 0; 
	this.boundh = 0; 
	this.dir = { x: 0, y: 0, l: 1 }; 
	this.lagam = 2; 
	this.lagct = 0;
	this.diddraw = false;
	
	this.behavior = {
		mode: 0,
		getfood: false,
		mid: { x: 0, y: 0 },
		deg: 0,
		off: 0
	}
}
function Index_SnakeHandle() {
	if (hoveredLL == "LLProjects") {
		var llproj = document.getElementById("LLProjects");
		var snakebounds = llproj.getBoundingClientRect();
		snake.boundw = snakebounds.width;
		snake.boundh = snakebounds.height;			
		snake.ox = snakebounds.left - windowRect.left;
		snake.oy = snakebounds.top - windowRect.top;
		snake.dw = snake.boundw / 50;
		snake.dh = snake.boundh / 50;

		var mposx = relMouseX(snakebounds);
		var mposy = relMouseY(snakebounds);
		var mrelx = mposx - snake.x;
		var mrely = mposy - snake.y;
		var mabsx = Math.abs(mrelx);
		var mabsy = Math.abs(mrely); 									//console.log(mabsx + " - " + mabsy);
		var mdirabs = Math.sqrt((mabsx * mabsx) + (mabsy * mabsy)); 	//console.log(mdirabs);

		switch (snake.behavior.mode) {
			case 0: {
				if (snake.behavior.getfood) {
					mposx = snake.food.x;
					mposy = snake.food.y;
					mabsx = Math.abs(mposx - snake.x);
					mabsy = Math.abs(mposy - snake.y);
					mdirabs = Math.sqrt(mabsx, 2) + Math.sqrt(mabsy, 2); //console.log(mdirabs);

					snake.dir.l = mabsx > mabsy ? 1 : 2;

					if (mdirabs <= 6) {
						snake.behavior.mode = 1;
						snake.behavior.getfood = false;

						snake.body.push({ x: snake.x, y: snake.y });
					}
				} else {
					if (mdirabs > 50) {
						snake.dir.l = mabsx > mabsy ? 1 : 2;
					} else {
						snake.dir.l = 0;
						snake.behavior.mode = 1;
					}
				}
				
				if (snake.dir.l == 1) {
					// Direction
					if (snake.x < mposx) snake.dir.x = 0; else if (snake.x > mposx) snake.dir.x = 1; 
					// Move
					if (snake.dir.x == 0) snake.x += snake.dw; else snake.x -= snake.dw;
				} else if (snake.dir.l == 2) {
					// Direction
					if (snake.y < mposy) snake.dir.y = 0; else if (snake.y > mposy) snake.dir.y = 1;
					// Move
					if (snake.dir.y == 0) snake.y += snake.dh; else snake.y -= snake.dh;
				}

				break;
			}
			case 1: {
				if (mdirabs > 80) {
					snake.behavior.mode = 0;
				} else {
					if ((snake.behavior.deg += (Math.PI / 10)) >= 2 * Math.PI) snake.behavior.deg = 0;

					snake.behavior.mid = { x: mposx / snake.dw , y: mposy / snake.dh };
					
					var sdeg = snake.behavior.deg; //console.log(sdeg);
					var smid = snake.behavior.mid; //console.log(smid);
					var srad = 30;

					var spinx = (smid.x * snake.dw) + (Math.cos(sdeg) * srad);
					var spiny = (smid.y * snake.dh) + (Math.sin(sdeg) * srad);

					//ctx.fillRect(snake.ox + spinx, snake.oy + spiny, snake.dw, snake.dw);
					//ctx.strokeStyle = "rgba(" + scolor.r + ", " + scolor.g + ", " + scolor.b + ", " + scolor.a + ")";
					//ctx.beginPath(); ctx.arc(snake.ox + (smid.x * snake.dw) , snake.oy + (smid.y * snake.dw), srad, 0, 2 * Math.PI); ctx.stroke();
					
					// Circle spin
					//snake.x = spinx; snake.y = spiny;
					
					// Square spin
					var didadj = false;
					var qpi = Math.PI / 4;
					var ppi = Math.PI / 8;

					// Compensation
					if (Math.abs(sdeg - qpi) < ppi || Math.abs(sdeg - (5 * qpi)) < ppi) {
						//console.log("Y: " + snake.y + " - " + spinx);
						if (snake.y < spiny) {
							//snake.oy -= mposy - snake.y; //console.log(mposx - snake.x);
							snake.y += snake.dh;
							didadj = true;
						} else if (snake.y > spiny) {
							//snake.oy -= mposy - snake.y;
							snake.y -= snake.dh;
							didadj = true;
						}
					} else if (Math.abs(sdeg - (3 * qpi)) < ppi || Math.abs(sdeg - (7 * qpi)) < ppi) {
						//console.log("X: " + snake.x + " - " + spinx)
						if (snake.x < spinx) {
							//snake.ox -= mposx - snake.x;
							snake.x += snake.dw;
							didadj = true;
						} else if (snake.x > spinx) {
							//snake.ox -= mposx - snake.x;
							snake.x -= snake.dw;
							didadj = true;
						}
					}
					
					if (!didadj) {
						if (sdeg > (7 * qpi) || sdeg <= qpi)       snake.y += snake.dh;
						else if (sdeg > qpi       && sdeg <= (3 * qpi)) snake.x -= snake.dw;
						else if (sdeg > (3 * qpi) && sdeg <= (5 * qpi)) snake.y -= snake.dh;
						else if (sdeg > (5 * qpi) && sdeg <= (7 * qpi)) snake.x += snake.dw; 
					}

					if (Math.random() * 1000 < 10) {
						snake.behavior.getfood = true;
						snake.behavior.mode = 0;
						snake.food = { x: Math.floor(Math.random() * snake.boundw), y: Math.floor(Math.random() * snake.boundh) };
					}

					break;
				}
			}
		}

		if (snake.x > snake.boundw - snake.dw) snake.x = 0;
		else if (snake.x < 0) snake.x = snake.boundw - snake.dw;
		if (snake.y > snake.boundh - snake.dh) snake.y = 0;
		else if (snake.y < 0) snake.y = snake.boundh - snake.dh;
		
		if ((snake.color += 1) > 360) snake.color = 0;
		var scolor = HueToRGB(snake.color, 255); //console.log(scolor.r + ", " + scolor.g + ", " + scolor.b);
		ctx.fillStyle = "rgba(" + scolor.r + ", " + scolor.g + ", " + scolor.b + ", " + scolor.a + ")";
		for (var i = snake.body.length - 1; i > 0; i--) {
			snake.body[i].x = snake.body[i - 1].x;
			snake.body[i].y = snake.body[i - 1].y;

			ctx.fillRect(Math.ceil(snake.ox + snake.body[i].x), Math.ceil(snake.oy + snake.body[i].y), Math.ceil(snake.dw), Math.ceil(snake.dh));
		}
		snake.body[0].x = snake.x;
		snake.body[0].y = snake.y;
		
		ctx.fillRect(Math.ceil(snake.ox + snake.body[0].x), Math.ceil(snake.oy + snake.body[0].y), Math.ceil(snake.dw), Math.ceil(snake.dh));
		ctx.fillRect(Math.ceil(snake.ox + snake.x)		  , Math.ceil(snake.oy + snake.y)        , Math.ceil(snake.dw), Math.ceil(snake.dh));
		
		if (snake.behavior.getfood) 
			ctx.fillRect(Math.ceil(snake.ox + (snake.food.x)), Math.ceil(snake.oy + snake.food.y), Math.ceil(snake.dw), (snake.dh));
	} else {
		llcanvashandle = null;
	}
}

/***  ***/
function Index_WelcomeAnimation() {
	if (llcanvashandle != null) llcanvashandle();
}

/***** Main Handler *****/
function Index_AboutAnimation() {
	/// Index ///
	var lltitle = document.getElementsByClassName("LLTitle")[0];
	var llabout = document.getElementById("LLAbout");
	var llcontact = document.getElementById("LLContact");
	var llprojects = document.getElementById("LLProjects");
	
	/// Crane ///
	var craneele = document.getElementById("LLCraneGIF");
	var cranecpy = document.getElementById("LLCraneGIFcpy");
	cranepos.x = craneele.offsetLeft;
	cranepos.y = craneele.offsetTop;
	craneele.style.position = "absolute";
	cranecpy.style.position = "absolute";
	cranecpy.style.opacity = 0.0;

	/// Piano ///
	var notebox = document.getElementById("LLNotes");	
	for (var i = 0; i < maxNotes; i++) {
		notebox.innerHTML += '<div id="LLNote' + i + '"></div>';
	}

	/// Sequence ///
	var seqdata = document.getElementById("LLSequenceData");
	var sequence = document.getElementById("LLSequence");
	var oriseqletters = document.getElementsByClassName("LLSeqLet");
	var oriseqletterchar = [];
	var oriseqletterpos = [];
	var lettersreturning = false;
	var onletter = 0;
	var lettertickc = 0;
	shakeori = "calc(50% - " + (sequence.clientWidth / 2) + "px)";
	sequence.style.left = shakeori;
	for (var i = 0; i < oriseqletters.length; i++) {
		oriseqletterchar.push(oriseqletters[i].innerHTML);
		oriseqletterpos.push(oriseqletters[i].offsetLeft + "-" + oriseqletters[i].clientTop);
	}
	seqdataobj.oletters = oriseqletterchar;
	seqdataobj.opos = oriseqletterpos;

	// Mail
	var postOffice = document.getElementById("LLPostOffice");
	for (var i = 0; i < maxMail; i++) {
		postOffice.innerHTML += '<img src="Images/index/mail.png" class="LLMail"/>';
	}
	var allMail = document.getElementsByClassName("LLMail");
	var allLetters = [];
	for (var i = 0; i < allMail.length; i++) {
		var mrandx = Math.random() * (llcontact.clientWidth - allMail[i].clientWidth);
		var mrandy = Math.random() * 120 - 60;
		var mrandvx = (Math.random() * 2 - 1);
		allLetters.push(
			{
				x: mrandx,
				y: mrandy,
				vx: mrandvx,
				vy: (Math.random() * 2 + 1),
				s: (Math.random() * (2 * Math.PI))
			}
		);
		
		allMail[i].style.left = mrandx + "px";
		allMail[i].style.top = mrandy + "px";
	}

	// Snake
	snake = new Snake();
	var snakerect = llprojects.getBoundingClientRect();
	snake.x = snakerect.left + snakerect.width / 2;
	snake.y = snakerect.top + snakerect.height / 2;
	snake.body.push({ x: snake.x, y: snake.y });
	snake.body.push({ x: snake.x, y: snake.y });
	snake.body.push({ x: snake.x, y: snake.y }); 

	// 
	var changeletter = (seqletter) => {
		var randletter;
		if (Math.floor(Math.random() * 2) == 1) randletter = String.fromCharCode(Math.floor(Math.random() * 25) + 65); // A - Z [ 65 - 90 ]
		else randletter = String.fromCharCode(Math.floor(Math.random() * 25) + 97); // a - z [ 97 - 122 ]
		seqletter.innerHTML = randletter;
	}
	var rotateletter = (seqletter) => {
		var charval = seqletter.innerHTML.charCodeAt(0);
		charval++;

		if (charval < 97 && charval > 90) charval = 97;
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
					else if (tseqletter.innerHTML == goalletter) onletter++;
					else rotateletter(tseqletter);
				}
				
				return 1;
			} else if (lettersreturning == false) {
				//console.log("Done");
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
						
						//console.log("Shake start");
						var shakelib = 0;
						var shake = setInterval(() => {
							//console.log("Shaking " + shakelib);
							if (shakelib % 2 == 0) sequence.style.left = "calc(50% - " + ((sequence.clientWidth/2) - (4 * seqdataobj.gcount)) + "px)"; //"calc(" + shakeori + "% - 3px)";
							else sequence.style.left = "calc(50% - " + ((sequence.clientWidth/2) + (4 * seqdataobj.gcount)) + "px)"; //"calc(" + shakeori + "% + 3px)";
							
							if (shakelib++ > (2 * seqdataobj.gcount) + 1) {
								//console.log("shake done. Countdown " + seqdataobj.gcount);
								sequence.style.left = shakeori;
								seqshaking = false;
								if (seqdataobj.gcount >= 6) seqdataobj.mode = 1;
								else seqdataobj.gcount++;

								clearInterval(shake);
							}
						}, 20);
					}
				} else if (seqmode == 0) {
					seqdata.style.left = shakeori;
				} else if (seqmode == 1) {
					var flyaway;

					if (seqletter.style.alt == null || seqletter.style.alt == "") {
						var tvx = ((Math.random() * 15 + 5) * ((Math.floor(Math.random() * 2) == 1) ? 1 : -1));
						var opos = seqdataobj.opos[i]; //console.log(opos);
						var oposx = opos.substring(0, opos.indexOf("-")); //console.log(oposx);
						var oposy = opos.substring(opos.indexOf("-") + 1); //console.log(oposy);
						
						var seqstat = 
							'{ "x": ' + oposx
							+ ', "y": ' + oposy
							+ ', "r": 0.0'
							+ ', "ox": ' + oposx
							+ ', "oy": ' + oposy
							+ ', "vx": ' + tvx
							+ ', "vy": ' + ((Math.random() * 3 - 1.5))
							+ ', "vr": ' + (Math.random())
							//+ ', "limx": ' + (tvx > 0 ? lltitle.clientWidth : 0)
							+ ', "limy": ' + ((llabout.clientHeight + lltitle.clientHeight) / 2 + (seqletter.clientHeight / 2))
							+ ' }';
						//console.log(seqstat);
						flyaway = JSON.parse(seqstat);
						seqletter.style.alt = seqstat;
						seqletter.style.position = "absolute";
						//console.log(seqletter);
					} else {
						flyaway = JSON.parse(seqletter.style.alt); //console.log(flyaway);
					}

					if (Math.random() * 1000 < 20) {
						changeletter(seqletter);
					}
					
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

			for (var i = 0; i < seqletters.length; i++) {
				letterreturn(seqletters[i], i);
			}
		}
		if (lettersreturning) {
			if (lettertickc < 80) lettertickc++;
			else lettertickc = 1000;
			
			if (onletter >= oriseqletters.length - 1) {
				//console.log("Finished");
				lettersreturning = false;
			}
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
			if (llcanvashandle == null) {
				llcanvashandle = Index_SnakeHandle;
			} 
		}

		/// Other ///
		else if (hoveredLL == "LLOther") {
			var llother = document.getElementById("LLOther");
			var llorect = llother.getBoundingClientRect();

			if (lightningballimg.length == 0) {
				for (var i = 0; i < 120; i++) {
					var nimg = new Image();
					nimg.src = "Images/index/LightningBall/" + i + ".png";
					lightningballimg.push(nimg);
				}
			}

			if (lightningballs.length == 0) {
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
