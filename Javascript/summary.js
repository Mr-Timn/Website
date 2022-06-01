//
// Made by Jordan Hoosman
//

var LHEAD = null;
var SummaryLetters = [];
var SummaryFrame, SummaryContinue, IgnoreContinue, ContinueMessage;
var CurrentHue, HueIncDelay;
var SummaryFontSize = -1;
var AdjCanvasWidth = -1, NavBuffer = -1, IntroDiv1 = -1, IntroBuffer1 = -1, IntroBuffer2 = -1;

function SUMMARY_PAGE_LOAD() {
	//console.log("Loaded summary");

	LHEAD = new SLett("\\");
	SummaryLetters = [];
	CurrentHue = 0;
	HueIncDelay = 0;
	SummaryFrame = 0;
	SummaryFontSize = -1;
	SummaryContinue = true;
	IgnoreContinue = false;

	canvasHandle = Summary_CanvasHandle;
	keyDownHandle = Summary_KeyDownHandle;
	keyUpHandle = Summary_KeyUpHandle;
	resizeHandler = Summary_ResizeHandle;
	clickHandler = Summary_ClickHandle;

	// Start Summary
	var wait = setInterval(function() {
		if (SummaryContinue) {
			SummaryContinue = false;
			if (Summary_Intro_Reload()) clearInterval(wait);
			SummaryFrame++;
		}
	}, 250);
}
function SUMMARY_PAGE_UNLOAD() {
	pageUnloadTimer = 0;
}

/***** Playing Summary *****/
function AutoContinue(Duration) {
	IgnoreContinue = true;
	setTimeout(function() { SummaryContinue = true; IgnoreContinue = false; }, Duration);
}

/*

var msgs_c1 = [
	{ w: -1, spx: 5, spy: 5, hide: false, m: "My name is Jordan Hoosman"        },
	{ w: -1, spx: 5, spy: 5, hide: false, m: "And I'm a Computer Engineer"      },
	{ w: -1, spx: 5, spy: 5, hide: false, m: "With a minor in Cyber Security"   },
	{ w: -1, spx: 0, spy: 5, hide:  true, m: "" },
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "But what does that mean exactly???" },
];
var msgs_c2 = [
	{ w: -1, spx: 5, spy: 5, hide: false, m: "It means cools stuff like this! " }, // len = 32(4 * [8])

	{ w: -1, spx: 5, spy: 5, hide:  true, m: "Meet Anton" },
	{ w: -1, spx: 0, spy: 20, hide: true, m: "" },
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "Anton is an AI that I made" },
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "that can recognize individual" },
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "faces and interpret speech!" },

	{ w: -1, spx: 5, spy: 5, hide:  true, m: "Using this attachment" },
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "Anton can unlock my door" }, 
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "when I ask it while my face" },
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "is visible" },

	{ w: -1, spx: 5, spy: 5, hide:  true, m: "Check out" },
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "my demo on" },
	{ w: -1, spx: 5, spy: 5, hide:  true, m: "TikTok!", link: "https://www.tiktok.com/@theycallmethelegend/video/7019523974321229061?is_copy_url=1&is_from_webapp=v1" },
];
var msgs_c3 = [
	{ w: -1, spx: 0, spy: 2, hide: false, m: "My library JCode is nearing an official release" },
	{ w: -1, spx: 0, spy: 2, hide: false, m: "so stay tuned for more! You can still check out" },
	{ w: -1, spx: 0, spy: 2, hide: false, m: "my other projects on my projects page."  },
	{ w: -1, spx: 0, spy: 2, hide: false, m: "RPS Simulator is my current favorite project" },
	{ w: -1, spx: 0, spy: 2, hide: false, m: "---> [Check them out here] <---", link: "src://PROJECTS" },
	
	{ w:  0, spx: 0, spy: 2, hide: false, m: "" },
	{ w: -1, spx: 0, spy: 2, hide: false, m: "If you're interested in the code for this website" },
	{ w: -1, spx: 0, spy: 2, hide: false, m: "Click the J on the top of the navigation bar :)" },
	
	{ w:  0, spx: 0, spy: 0, hide: false, m: "" },
	{ w: -1, spx: 0, spy: 2, hide: false, m: "Replay", link: "src://SUMMARY" },
	{ w:  0, spx: 0, spy: 0, hide: false, m: "" },
	{ w: -1, spx: 0, spy: 2, hide: false, m: "Home", link: "src://INDEX" },
];

function Summary_Intro_Reload() {
	NavBuffer = GetElementXWidth("Navigation");
	AdjCanvasWidth = windowWidth - NavBuffer;
	
	IntroDiv1 = AdjCanvasWidth / 3;
	IntroBuffer1 = NavBuffer + (AdjCanvasWidth / 2);
	IntroBuffer2 = (NavBuffer + IntroDiv1) + ((windowWidth - (NavBuffer + IntroDiv1)) / 2);
	
	// Start message 1
	if (SummaryFrame >= 0 && SummaryFrame <= 3) {
		if (SummaryFrame != 0) UpdateMessageWidth(msgs_c1);
		
		if (SummaryFrame == 0) {
			Summary_NewMessage(msgs_c1);
			AutoContinue(2000);
		} else if (SummaryFrame == 1) {
			MessageShow(msgs_c1, 4, 4);
		// Free float message
		} else if (SummaryFrame == 2) {
			for (var i = 0; i < SummaryLetters.length; i++) { SummaryLetters[i].gx = -1; SummaryLetters[i].gy = -1; }
			AutoContinue(1000);
		// Fly off screen
		} else if (SummaryFrame == 3) {	
			PositionMessage(msgs_c1, 0, msgs_c1.length - 1, -1, -1, 15);
			AutoContinue(1250);
		}

		if (SummaryFrame <= 1) PositionMessage(msgs_c1, 0, msgs_c1.length - 1, -IntroBuffer1, 120, 15);
	}

	// Start message 2
	else if (SummaryFrame >= 4 && SummaryFrame <= 9) {
		if (SummaryFrame != 4) UpdateMessageWidth(msgs_c2);

		// About Anton
		if (SummaryFrame == 4) {
			Summary_NewMessage(msgs_c2);
			PositionMessage(msgs_c2, 0, 0, -IntroBuffer1, 120, 60, 5);

			CanvasAddImage("Images/summary/Anton.png"    , 0, 0);
			CanvasAddImage("Images/summary/doorlock1.png", 0, 0);
			CanvasAddImage("Images/summary/doorlock2.png", 0, 0);
			CanvasAddImage("Images/summary/redarrow.png" , 20, 20);
		}
		if (SummaryFrame >= 5 && SummaryFrame <= 9) {
			if (SummaryFrame == 5) MessageShow(msgs_c2, 1, 5);
			
			if (windowHeight > windowWidth) {
				canvasImages[0].width = AdjCanvasWidth / 2; canvasImages[0].height = windowHeight / 2;
				canvasImages[1].width = AdjCanvasWidth / 6; canvasImages[1].height = AdjCanvasWidth / 4;
				canvasImages[2].width = AdjCanvasWidth / 6; canvasImages[2].height = AdjCanvasWidth / 4;

				PositionMessage(msgs_c2, 1, 5, -IntroBuffer1, (windowHeight / 2 + 70), 15);
			} else {
				canvasImages[0].width = IntroDiv1;          canvasImages[0].height = windowHeight - 150;
				canvasImages[1].width = AdjCanvasWidth / 6; canvasImages[1].height = AdjCanvasWidth / 5;
				canvasImages[2].width = AdjCanvasWidth / 6; canvasImages[2].height = AdjCanvasWidth / 5;
				
				PositionMessage(msgs_c2, 1, 5, -IntroBuffer2, 100, 15);
			}
			
			var dir = 0;
			SummaryLetters[0].setgoal(NavBuffer + 20, 15);
			for (var i = 1; i < SummaryLetters.length; i++) {
				var ilett = SummaryLetters[i];
				var jlett = SummaryLetters[i - 1];
				switch (dir) {
					case 0: ilett.setgoal(jlett.gx + ((AdjCanvasWidth - 50) / 8), jlett.gy); break;
					case 1: ilett.setgoal(jlett.gx                    , jlett.gy + ((windowHeight - (30 + 40)) / 8)); break;
					case 2: ilett.setgoal(jlett.gx - ((AdjCanvasWidth - 50) / 8), jlett.gy); break;
					case 3: ilett.setgoal(jlett.gx                    , jlett.gy - ((windowHeight - (30 + 40)) / 8)); break;
				}
				if (i % 8 == 0) dir++;
			}
		}
		if (SummaryFrame == 6) {
			if (windowHeight > windowWidth) {
				ShrinkMessages(msgs_c2, 1, 5, -IntroBuffer1, (windowHeight / 2 + 70), 15);
			} else {
				ShrinkMessages(msgs_c2, 1, 5, -IntroBuffer2, 100, 10);
			}
			
			AutoContinue(1500); 
		}
		if (SummaryFrame == 7) {
			MessageHide(msgs_c2, 1, 5); 
			MessageShow(msgs_c2, 6, 12);
			
			if (windowHeight > windowWidth) {
				GrowMessages(msgs_c2,  6,  9, -IntroBuffer1, windowHeight / 2 + 40, 15);
				GrowMessages(msgs_c2, 10, 12, windowWidth - (msgs_c2[11].w + 10), 230, 25);
			} else {
				GrowMessages(msgs_c2,  6,  9, -IntroBuffer2,                   100, 15);
				GrowMessages(msgs_c2, 10, 12, -IntroBuffer1, -(AdjCanvasWidth / 5), 25);
			}
			
			AutoContinue(2000);
		}
		if (SummaryFrame == 8) {
			if (windowHeight > windowWidth) {
				PositionMessage(msgs_c2,  6,  9, -IntroBuffer1, windowHeight / 2 + 40, 10);
				PositionMessage(msgs_c2, 10, 12,  windowWidth - (msgs_c2[11].w + 10), 230, 10);
			} else {
				PositionMessage(msgs_c2,  6,  9, -IntroBuffer2,                   100, 10);
				PositionMessage(msgs_c2, 10, 12, -IntroBuffer1, -(AdjCanvasWidth / 5), 10);
			}
			
		}
		if (SummaryFrame == 9) {
			PositionMessage(msgs_c2, 0, msgs_c2.length - 1, -1, -1, 15);
			AutoContinue(1500);
		}
	}

	// Start message 3
	else if (SummaryFrame == 10) {
		Summary_NewMessage(msgs_c3);
		
		if (msgs_c3[0].w > AdjCanvasWidth) {
			
		}

		GrowMessages(msgs_c3, 0, msgs_c3.length - 1, -IntroBuffer1, 100, 10);
	}

	// Done
	else return true;
}*/

var msgs_c1 = [
	{ w: -1, spx: 5, spy: 5, hide: false, m: "My name is Jordan Hoosman"        },
	{ w: -1, spx: 5, spy: 5, hide: false, m: "And I'm a Computer Engineer"      },
	{ w: -1, spx: 5, spy: 5, hide: false, m: "With a minor in Cyber Security"   },
	{ w: -1, spx: 0, spy: 5, hide: false, m: "" },
	{ w: -1, spx: 5, spy: 5, hide: false, m: "I really enjoy programming!"      },
	{ w: -1, spx: 5, spy: 5, hide: false, m: "Check out what I've made so far!" },
	
];
function Summary_Intro_Reload() {
	NavBuffer = GetElementXWidth("Navigation");
	AdjCanvasWidth = windowWidth - NavBuffer;
	
	IntroDiv1 = AdjCanvasWidth / 3;
	IntroBuffer1 = NavBuffer + (AdjCanvasWidth / 2);
	IntroBuffer2 = (NavBuffer + IntroDiv1) + ((windowWidth - (NavBuffer + IntroDiv1)) / 2);

	if (SummaryFrame >= 0 && SummaryFrame <= 2) {
		if (SummaryFrame != 0) UpdateMessageWidth(msgs_c1);
		
		if (SummaryFrame == 0) {
			Summary_NewMessage(msgs_c1);
			PositionMessage(msgs_c1, 0, msgs_c1.length - 1, -IntroBuffer1, 120, 10);
		} else if (SummaryFrame == 1) {
			PositionMessage(msgs_c1, 0, msgs_c1.length - 2, -1, -1, 10);
			
			var dir = 0; let start = 109; // SummaryLetters[5]
			SummaryLetters[start].setgoal(NavBuffer + 20, 15);
			for (var i = 1; i < 32; i++) {
				var ilett = SummaryLetters[start + i];
				var jlett = SummaryLetters[start + i - 1];
				switch (dir) {
					case 0: ilett.setgoal(jlett.gx + ((AdjCanvasWidth - 50) / 8), jlett.gy); break;
					case 1: ilett.setgoal(jlett.gx                    , jlett.gy + ((windowHeight - (30 + 40)) / 8)); break;
					case 2: ilett.setgoal(jlett.gx - ((AdjCanvasWidth - 50) / 8), jlett.gy); break;
					case 3: ilett.setgoal(jlett.gx                    , jlett.gy - ((windowHeight - (30 + 40)) / 8)); break;
				}
				if (i % 8 == 0) dir++;
			}
		} else if (SummaryFrame == 2) {

		}

		return false;
	}
	// Done
	else return true;
}
function Summary_NewMessage(msg) {
	LHEAD.right = null;
	SummaryLetters = [];

	// Add Letters
	for (var i = 0; i < msg.length; i++) {
		for (var j = 0; j < msg[i].m.length; j++) {
			var lett = Add_SLett(msg[i].m[j], msg[i].hide);
			if (msg[i].link != null) lett.link = msg[i].link;	
		}	
	}

	UpdateMessageWidth(msg);
}

/***** Input Handlers *****/
function Summary_CanvasHandle() {
	ctx.clearRect(0, 0, windowWidth, windowHeight);
	
	ctx.strokeStyle = "white";
	ctx.font = SummaryFontSize + "px serif";
	if (SummaryFrame == 2 || SummaryFrame == 5 || SummaryFrame == 9) ctx.strokeText("[ Click to continue ]", IntroBuffer1 - 150, windowHeight - 100, 300);
	if (SummaryFrame == 6) ctx.strokeText("[ Click to continue ]", IntroBuffer2 - 150, windowHeight - 100, 300);

	if (SummaryFrame >= 5 && SummaryFrame <= 9) {
		var pp = MessageLength(msgs_c2, 0, 0);
		ctx.drawImage(canvasImages[0].img, SummaryLetters[pp - 1].x + 40, SummaryLetters[0].y + 40, canvasImages[0].width, canvasImages[0].height);

		if (SummaryFrame >= 8) {
			var ix = SummaryLetters[SummaryLetters.length - 1].x + SummaryLetters[SummaryLetters.length - 1].w;
			var iy = SummaryLetters[SummaryLetters.length - 1].y;

			ctx.drawImage(canvasImages[1].img, SummaryLetters[12].x - (AdjCanvasWidth / 3), SummaryLetters[5].y + 30, canvasImages[1].width, canvasImages[1].height);
			ctx.drawImage(canvasImages[2].img, SummaryLetters[13].x - (AdjCanvasWidth / 6), SummaryLetters[6].y + 30, canvasImages[2].width, canvasImages[2].height);
			
			ctx.drawImage(canvasImages[3].img, ix, iy, canvasImages[3].width, canvasImages[3].height);
			ctx.font = "15px serif";
			ctx.strokeText("[Click Here!]", ix + canvasImages[3].width + 5, iy + 5);
		}
		
		//
		if (SummaryFrame >= 6) {
			var obj = null, last = SummaryLetters[0];
			for (var i = 1; i < msgs_c2[0].m.length - 2; i++) {
				obj = SummaryLetters[i];

				ctx.strokeStyle = obj.strinvcolor;
				ctx.beginPath();
				ctx.moveTo(last.x + (last.w / 2), last.y + (last.h / 2));
				ctx.lineTo(obj.x + (obj.w / 2), obj.y + (obj.h / 2));
				ctx.lineWidth = 3;
				ctx.stroke();

				last = obj;
			}

			ctx.strokeStyle = obj.strinvcolor;
			ctx.beginPath();
			ctx.moveTo(last.x + (last.w / 2), last.y + (last.h / 2));
			ctx.lineTo(SummaryLetters[0].x + (SummaryLetters[0].w / 2), SummaryLetters[0].y + (SummaryLetters[0].h / 2));
			ctx.lineWidth = 2;
			ctx.stroke();
		}
	}

	HueIncDelay = (HueIncDelay + 1) % 10;
	SummaryFontSize = Math.max(windowWidth / 55, 25);
	ctx.font = SummaryFontSize + "px serif";
	ctx.textBaseline = "top"
	for (var i = 0; i < SummaryLetters.length; i++) {
		var lett = SummaryLetters[i];
		if (lett.hide) continue;
		if (lett.canmove) lett.move();
		if (!(SummaryFrame <= 9 && lett.l == " ")) lett.draw();

		if (SummaryFrame == 11 && HueIncDelay == 0) lett.reloadcolor(lett.hue + 1);
	}
}
function Summary_ResizeHandle(diff) {
	for (var i = 0; i < SummaryLetters.length; i++) SummaryLetters[i].reloadsize();
	SummaryFrame--;
	Summary_Intro_Reload();
	SummaryFrame++;

}
function Summary_ClickHandle() {
	var clickedlink = false;
	for (var i = 0; i < SummaryLetters.length; i++) {
		var lett = SummaryLetters[i]; if (lett.hide) continue;
		if (lett.link != null) {
			if (mouseX > lett.x && mouseX < lett.x + lett.w && mouseY > lett.y && mouseY < lett.y + lett.h) {
				clickedlink = true;
				if (lett.link == "src://SUMMARY") SUMMARY_PAGE_LOAD();
				else if (lett.link.indexOf("src://") != -1) NavButtonClick(lett.link.substring(6), false);
				else window.open(lett.link, "_blank");
				break;
			}
		}
	}

	if (!clickedlink && !IgnoreContinue) SummaryContinue = true;
}
function Summary_KeyDownHandle(e) {
	
}
function Summary_KeyUpHandle(e) {
	// Spacebar
	if (e.keyCode == 32 && !IgnoreContinue) SummaryContinue = true;
	
	// Escape
	if (e.keyCode == 27) {
		SummaryFrame -= 2;
		if (SummaryFrame <= 2) SummaryFrame = 0;
		Summary_Intro_Reload();
	}
}

/***** SLett *****/
function SLett_Infect(Virus, ID, Obj, Dir, Delay) {
	if (ID == -1) ID = Math.floor(Math.random() * 999999999999999);

	if (ID in Obj.infections) return;
	Obj.infections.push(ID);
	
	Virus(Obj);
	setTimeout(function() {
		if (((Dir & 0x1) >> 0) && Obj.up    != null) Obj.up.infect(   Virus, ID, Dir, Delay);
		if (((Dir & 0x2) >> 1) && Obj.down  != null) Obj.down.infect( Virus, ID, Dir, Delay);
		if (((Dir & 0x4) >> 2) && Obj.left  != null) Obj.left.infect( Virus, ID, Dir, Delay);
		if (((Dir & 0x8) >> 3) && Obj.right != null) Obj.right.infect(Virus, ID, Dir, Delay);
	}, Delay);
}
function SLett(Letter) {
	this.l = Letter;
	this.hide = false;
	this.canmove = true;

	this.left = null;
	this.right = null;
	this.up = null;
	this.down = null;
	this.xbuf = 10;
	this.infections = [];

	var s = Math.floor(Math.random() * 4);
	switch (s) {
		case 0: this.x = Math.floor(Math.random() * windowWidth); this.y = -100; break;
		case 1: this.x = windowWidth + 100;                       this.y = Math.floor(Math.random() * windowHeight); break;
		case 2: this.x = Math.floor(Math.random() * windowWidth); this.y = windowHeight + 100; break;
		case 3: this.x = -100;                                    this.y = Math.floor(Math.random() * windowHeight); break;
	}
	
	/// Functions ///
	this.draw = function() {
		ctx.fillStyle = this.strcolor;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		
		ctx.fillStyle = this.strinvcolor;
		ctx.fillText(Letter, this.x + (this.xbuf / 2), this.y, this.w);
	};
	this.setgoal = function(GX, GY) {
		this.gx = GX;
		this.gy = GY;
		this.reloadgoal();
	}
	this.cleargoal = function() {
		this.tgx = -1; this.tgy = -1;
		this.gx  = -1; this.gy  = -1;
		this.dx  = -1; this.dy  = -1;
		this.gct = 0;
	}
	this.reloadgoal = function() {
		var rrx = 15;
		var rry = 8;
		this.tgx = this.gx + ((Math.random() * rrx) - (rrx / 2));
		this.tgy = this.gy + ((Math.random() * rry) - (rry / 2));

		var diffx = this.x - this.tgx;
		var diffy = this.y - this.tgy;
		
		if (Math.abs(diffx) < 40) this.gct = 80; else this.gct = 50; 
		if (Math.abs(diffy) < 40) this.gct = 80; else this.gct = 50; 

		this.dx = (diffx / this.gct);
		this.dy = (diffy / this.gct);
	}
	this.reloadcolor = function(Hue) {
		this.hue = Hue % 360;
		this.color = HueToRGB(this.hue, 255);
		this.strcolor    = "rgb(" +  this.color.r         + "," +  this.color.g         + "," +  this.color.b         + ")";
		this.strinvcolor = "rgb(" + (this.color.r ^ 0xFF) + "," + (this.color.g ^ 0xFF) + "," + (this.color.b ^ 0xFF) + ")";
	}
	this.reloadsize = function() {
		ctx.font = SummaryFontSize + "px serif";
		var buff = ctx.measureText(this.l);
		this.w = buff.width + this.xbuf;
		this.h = SummaryFontSize;	
	}
	this.newspeed = function () {
		this.speed = Math.random() * 1.5 + 1.5;
		this.vx = this.speed * (Math.random() * 2 > 0.5 ? 1 : -1);
		this.vy = this.speed * (Math.random() * 2 > 0.5 ? 1 : -1);
	}
	this.collidedwith = function(obj) {
		var coll = this.x < obj.x + obj.w && this.x + this.w > obj.x && this.y < obj.y + obj.w && this.y + this.h > obj.y;
        return coll;
	}
	this.move = function() {
		this.collision();
		
		if (this.gx == -1 && this.gy == -1) {
			this.x += this.vx;
			this.y += this.vy;
		} else {
			this.x -= this.dx;
			this.y -= this.dy;

			if (this.gct <= 0) this.reloadgoal(); else this.gct--;
		}

		while (this.up    != null && this.y < this.up.y)    Swap_SLett_UD(this.up, this);
		while (this.down  != null && this.y > this.down.y)  Swap_SLett_UD(this, this.down); 
		while (this.left  != null && this.x < this.left.x)  Swap_SLett_LR(this.left, this); 
		while (this.right != null && this.x > this.right.x) Swap_SLett_LR(this, this.right);
	}
	this.collision = function() {
		if (this.x < 0) { this.newspeed(); this.vx = Math.random() * this.speed; } else if (this.x + this.w > windowWidth)  { this.newspeed(); this.vx = -Math.random() * this.speed; }
		if (this.y < 0) { this.newspeed(); this.vy = Math.random() * this.speed; } else if (this.y + this.h > windowHeight) { this.newspeed(); this.vy = -Math.random() * this.speed; }
		
		if (this.up    != null && !this.up.hide    && this.collidedwith(this.up))    { this.vy = Math.abs(this.vy);  /*this.y = this.up.y + this.up.h;*/ }
		if (this.down  != null && !this.down.hide  && this.collidedwith(this.down))  { this.vy = -Math.abs(this.vy); /*this.y = this.down.y - this.h;*/ }
		if (this.left  != null && !this.left.hide  && this.collidedwith(this.left))  { this.vx = Math.abs(this.vx);  /*this.x = this.left.x + this.left.w;*/ }
		if (this.right != null && !this.right.hide && this.collidedwith(this.right)) { this.vx = -Math.abs(this.vx); /*this.x = this.right.x - this.w;*/ }
	}
	
	this.infect = function(Virus, ID, Dir, Delay) {
		SLett_Infect(Virus, this, ID, Dir, Delay);
	}
	this.clearinfections = function() {
		this.infections = [];
	}
	
	this.reloadsize();
	this.newspeed();
	this.cleargoal();
	this.reloadcolor(CurrentHue++);
}
function Add_SLett(Letter, Hide) {
	var lett = new SLett(Letter);
	lett.hide = Hide;
	
	if (LHEAD.down == null) {
		LHEAD.down = lett;
	} else {
		var temp = LHEAD;
		do {
			if (temp.down == null || lett.y <= temp.down.y) break;
			else temp = temp.down;
		} while (true);

		if (temp == LHEAD) {
			lett.down = LHEAD.down;
			if (lett.down != null) lett.down.up = lett;
			LHEAD.down = lett;
		} else if (temp == LHEAD.down) {
			if (lett.x < temp.x) {
				lett.down    = LHEAD.down;
				lett.down.up = lett;
				LHEAD.down   = lett;
			} else {
				lett.down       = temp.down;
				lett.up         = LHEAD.down;
				LHEAD.down.down = lett;
			}
		} else Swap_SLett_UD(lett, temp);
	}

	if (LHEAD.right == null) {
		LHEAD.right = lett;
	} else {
		var temp = LHEAD;
		do {
			if (temp.right == null || lett.x <= temp.right.x) break;
			else temp = temp.right;
		} while (true);

		if (temp == LHEAD) {
			lett.right = LHEAD.right;
			if (lett.right != null) lett.right.left = lett;
			LHEAD.right = lett;
		} else if (temp == LHEAD.right) {
			if (lett.x < temp.x) {
				lett.right      = LHEAD.right;
				lett.right.left = lett;
				LHEAD.right     = lett;
			} else {
				lett.right        = temp.right;
				lett.left         = LHEAD.right;
				LHEAD.right.right = lett;
			}
		} else Swap_SLett_LR(lett, temp);
	}
	
	/*var v = "", temp = LHEAD.right;
	while (temp != null) { v += temp.x + " "; temp = temp.right; }
	console.log(v);*/

	SummaryLetters.push(lett);
	return lett;
}
function Swap_SLett_UD(lett1, lett2) {
	lett1.down = lett2.down;
	lett2.down = lett1;
	
	lett2.up = lett1.up;
	lett1.up = lett2;

	if (lett1.down != null) lett1.down.up = lett1;
	if (lett2.up != null)   lett2.up.down = lett2;
	
	if (LHEAD.down == lett1) { LHEAD.down = lett2; lett2.up = null; }
	if (LHEAD.down.up != null) LHEAD.down.up = null;
}
function Swap_SLett_LR(lett1, lett2) {
	lett1.right = lett2.right;
	lett2.right = lett1;
	
	lett2.left = lett1.left;
	lett1.left = lett2;

	if (lett1.right != null) lett1.right.left = lett1;
	if (lett2.left != null)  lett2.left.right = lett2;

	if (LHEAD.right == lett1) { LHEAD.right = lett2; lett2.left = null; }
	if (LHEAD.right.left != null) LHEAD.right.left = null;
}

/// Positioning ///
function PositionSLett(tlet, ind, goalx, goaly, delay) {
	setTimeout(function() {
		tlet.canmove = true;
		if (goalx == -1 && goaly == -1) {
			var s = Math.floor(Math.random() * 4);
			switch (s) {
				case 0: tlet.setgoal(Math.floor(Math.random() * windowWidth), -100); break;
				case 1: tlet.setgoal(windowWidth + 100                      , Math.floor(Math.random() * windowHeight)); break;
				case 2: tlet.setgoal(Math.floor(Math.random() * windowWidth), windowHeight + 100); break;
				case 3: tlet.setgoal(-100                                   , Math.floor(Math.random() * windowHeight)); break;
			}
		} else {
			tlet.setgoal(goalx, goaly);
		}
	}, ind * delay);
}
function UnpositionSLett(tlet) {
	tlet.canmove = true;
	tlet.cleargoal();
}
/// Sizing ///
function SLettSizeHandler(tlet, ind, x, y, adj, delay) {
	tlet.canmove = false;

	setTimeout(function() {	
		var i = 0, div = 75.0;
		var gw = adj * (tlet.w / div);
		var gh = adj * (tlet.h / div);
		
		tlet.x = x;
		tlet.y = y;
		
		if (adj > 0) {
			tlet.w = 0;
			tlet.h = 0;
		}

		var grow = setInterval(function() {
			tlet.w += gw; 
			tlet.h += gh;

			if (i++ == div) {
				clearInterval(grow); 
			}
		}, 5);
	}, ind * delay);
}
function ShrinkSLett(tlet, ind, x, y, delay) {
	SLettSizeHandler(tlet, ind, x, y, -1, delay);
}
function GrowSLett(tlet, ind, x, y, delay) {
	SLettSizeHandler(tlet, ind, x, y, 1, delay);
}

/***** Messages *****/
function MessageLength(msg, start, end) {
	var ret = 0;
	for (var i = start; i <= end; i++) ret += msg[i].m.length;
	return ret;	
}
function MessageShow(msg, start, end) {
	var si; if (start == 0) si = 0; else si = MessageLength(msg, 0, start - 1);
	for (var i = 0; i < MessageLength(msg, start, end); i++) SummaryLetters[si + i].hide = false;
}
function MessageHide(msg, start, end) {
	var si; if (start == 0) si = 0; else si = MessageLength(msg, 0, start - 1);
	for (var i = 0; i < MessageLength(msg, start, end); i++) SummaryLetters[si + i].hide = true;
}
function UpdateMessageWidth(msg) {
	ctx.font = SummaryFontSize + "px serif";
	for (var i = 0; i < msg.length; i++) msg[i].w = ctx.measureText(msg[i].m).width + ((msg[i].spx + SummaryLetters[0].xbuf) * msg[i].m.length);
}

/// ///
function AnimateMessageHandler(msg, mstart, mend, startx, starty, delay, animatefunc) {
	var si; if (mstart == 0) si = 0; else si = MessageLength(msg, 0, mstart - 1);
	
	if (startx == -1 && starty == -1) {
		for (var i = mstart; i <= mend; i++) {	
			for (var j = 0; j < msg[i].m.length; j++) 
				animatefunc(SummaryLetters[si++], ct++, -1, -1, delay);
		}
	} else {
		if (starty < 0) starty += windowHeight;
		var sy = starty, ct = 0;

		for (var i = mstart; i <= mend; i++) {
			var tlet, sx; if (startx < 0) sx = (-startx) - (msg[i].w / 2); else sx = startx;
			
			for (var j = 0; j < msg[i].m.length; j++) {
				tlet = SummaryLetters[si++];
				animatefunc(tlet, ct++, sx, sy, delay);
				sx += (tlet.w + msg[i].spx);
			}
			sy += (tlet.h + msg[i].spy);
		}
	}
}
function UnpositionMessage(msg, mstart, mend) {
	AnimateMessageHandler(msg, mstart, mend, -1, -1, UnpositionSLett);
}
function PositionMessage(msg, mstart, mend, startx, starty, delay) {
	AnimateMessageHandler(msg, mstart, mend, startx, starty, delay, PositionSLett);
}
function GrowMessages(msg, mstart, mend, startx, starty, delay) {
	AnimateMessageHandler(msg, mstart, mend, startx, starty, delay, GrowSLett);
}
function ShrinkMessages(msg, mstart, mend, startx, starty, delay) {
	AnimateMessageHandler(msg, mstart, mend, startx, starty, delay, ShrinkSLett);
}
