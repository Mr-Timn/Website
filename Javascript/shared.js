//
// Made by Jordan Hoosman
//

/***** Page Sync *****/ 
function LoadSharedContent() {
	document.body.innerHTML += `
		<div id="Background">
			<!-- Video -->
			<div id="BackgroundVideo">
				<video id="VideoPlayer" autoplay loop muted>
					<source id="VideoSource" src="Media/deepspace.mp4" type="video/mp4">
				</video>
				<div id="VideoShade"></div>
			</div>

			<!-- Canvas -->
			<canvas id="BackgroundCanvas"></canvas>
			<div id="BackgroundPause" onclick="VideoToggle()"><h1>Pause Background</h1></div>
		</div>

		<div id="Navigation">
			<div id="NavButtons">
				<a href="https://github.com/Mr-Timn/Website">
				<img class="NavItem"                                    onmousemove="NavRotateItem(this)" id="NavLogo"    src="Images/nav/Logo3.png"    alt="GitHub"/>
				</a>
				<img class="NavItem" onclick=NavButtonClick('INDEX')    onmousemove="NavRotateItem(this)" id="NavHome"    src="Images/nav/home.png"     alt="Home"     />
				<img class="NavItem" onclick=NavButtonClick('ABOUT')    onmousemove="NavRotateItem(this)" id="NavAbout"   src="Images/nav/about.png"    alt="About"    />
				<img class="NavItem" onclick=NavButtonClick('CONTACT')  onmousemove="NavRotateItem(this)" id="NavContact" src="Images/nav/contact.png"  alt="Contact"  />
				<img class="NavItem" onclick=NavButtonClick('PROJECTS') onmousemove="NavRotateItem(this)" id="NavProject" src="Images/nav/projects.png" alt="Projects" />
				<img class="NavItem" onclick=NavButtonClick('OTHER')    onmousemove="NavRotateItem(this)" id="NavOther"   src="Images/nav/other.png"    alt="Other"    />
			</div>
			
			<div id="NavHoverText"><h3 id="NavHoverTextH3"></h3></div>
		</div>
	`;

	pageContent = document.getElementById("PageContent");
}

/***** Index Main *****/
window.onload = function() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	windowRect = document.body.getBoundingClientRect();
	
	LoadSharedContent();
	
	navMenu = document.getElementById("Navigation");

	NavInit();
	VideoInit();
	CanvasInit();
	KeyboardInit();
	
	NavButtonClick("INDEX", true);

	CanvasTick();
}
window.onresize = function() {
	WindowResized();
}
window.onclick = function() {
	if (clickHandler != null) clickHandler();
}

/*****  *****/
function WindowResized() {
	let diff = [ 
		window.innerWidth - windowWidth,
		window.innerHeight - windowHeight
	];

	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	windowRect = document.body.getBoundingClientRect();
	
	ctx.canvas.width = windowWidth;
	ctx.canvas.height = windowHeight;

	changeCSSProperty("--nav-height", "100%");
	if (windowHeight > windowWidth) {
		changeCSSProperty("--nav-width", "25vmin");
	} else {
		changeCSSProperty("--nav-width", "8vmax");
	}

	if (resizeHandler != null) resizeHandler(diff);
}

/***** URL *****/
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/***** Mouse *****/
function relMouseX(Rect) {
	return mouseX - Rect.x;
}
function relMouseY(Rect) {
	return mouseY - Rect.y;
}
function ItemMouseOut(Item, ItemHandle, Delay) {
	let elewaitmouseout = setInterval(() => {
		if (!(mouseX > Item.offsetLeft && mouseX < Item.offsetLeft + Item.offsetWidth) 
		 || !(mouseY > Item.offsetTop  && mouseY < Item.offsetTop + Item.offsetHeight)) {
			ItemHandle(Item);
			clearInterval(elewaitmouseout);
		}
	}, Delay);
}

/***** Keyboard *****/
function KeyboardInit() {
	document.addEventListener('keydown', e => { //console.log(e);
		if (keyDownHandle != null) keyDownHandle(e);
	});

	document.addEventListener('keyup', e => { //console.log(e);
		if (keyUpHandle != null) keyUpHandle(e);
	});
}

/***** Cookies *****/
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + '=' + cvalue + '; samesite=strict; ' + expires + ';path=/';
}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
	  	while (c.charAt(0) == ' ') c = c.substring(1);
	  	
	  	if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	
	return "";
}

/***** Navigation Bar *****/
function NavInit() {
	rotateControl = true;

	document.addEventListener('mousemove', function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
	
	navHoverText = document.getElementById("NavHoverText");
}
function NavRotateItem(Item) {
	if (!rotateControl) return;

	rotateControl = false;
	rotatedItem = Item;

	var rotateval = 0;
	var rotateitem = setInterval(() => {
		rotateval += 1;
		Item.style.transform = "rotate(" + rotateval + "deg)";
		if (rotateval >= 35) clearInterval(rotateitem); 
	}, 3);
	
	document.getElementById("NavHoverTextH3").innerText = Item.alt;
	
	navHoverTextInterval = setInterval(() => {
		navHoverText.style.left = (mouseX + 20) + "px";
		navHoverText.style.top = (mouseY - 45) + "px";
		
		if (mouseX > NavButtons.offsetWidth || !(mouseY > Item.offsetTop && mouseY < Item.offsetTop + Item.offsetHeight)) {
			NavRotateUndo(rotatedItem, true);
			rotateControl = true;
			rotatedItem = null;
		}
	}, 25);
}
function NavRotateUndo(Item, Override) {
	if (rotatedItem != null && !Override) return;
	
	var rotateval = 35;
	var rotateitem = setInterval(() => {
		rotateval -= 1;
		Item.style.transform = "rotate(" + rotateval + "deg)";
		if (rotateval <= 0) clearInterval(rotateitem); 
	}, 4);

	clearInterval(navHoverTextInterval);
	Item.style.transform = "rotate(0deg)";
	document.getElementById("NavHoverTextH3").innerText = "";
}
function NavSlideItem(Item, Delay) {
	setTimeout(function() {
		var slidegoal = Item.offsetWidth, slideval = -slidegoal;
		var mode = 1;
		var navslide = setInterval(() => {
			if (mode == 1) {
				slideval += 2.25;
				if (slideval >= 45) mode = 2;
			} else if (mode == 2) {
				slideval -= 1.5;
				if (slideval <= 5) mode = 3;
			} else {
				clearInterval(navslide);
			}

			Item.style.left = slideval + "px";  
		}, 5);

	}, Delay);
}
function NavSlideIn() {
	var navitems = document.getElementsByClassName("NavItem");
	for (var i = 0; i < navitems.length; i++) {
		var item = navitems[i];
		item.style.top = `calc(10px + (((100vh / 7) + 10px) * ` + i + `))`;
		NavSlideItem(item, i * 100);
	}
}
function NavButtonClick(Item, Override) {
	if (Item == CURRENTPAGE || Item == "" || (!Override && !pageUnloaded)) return;

	if (Override == null || !Override) {
		window[CURRENTPAGE + "_PAGE_UNLOAD"]();
		pageUnloaded = false;
		
		setTimeout(function() {
			pageUnloaded = true;
		}, pageUnloadTimer);
	} else {
		pageUnloaded = true;
	}

	var waitforunload = setInterval(() => {
		if (pageUnloaded) {
			resizeHandler = null;
			keyDownHandle = null,
    		keyUpHandle = null;
			scrollHandler = null;
			clickHandler = null;
			canvasHandle = null;
			
			pageContent.innerHTML = "";
			
			WindowResized();

			window[Item + "_PAGE_LOAD"]();
			
			CURRENTPAGE = Item;
			
			clearInterval(waitforunload);
		}
	}, 50);
}

/***** Background Video *****/
function VideoInit() {
	backgroundVideo = document.getElementById("VideoPlayer");
	var ispaused = getCookie("videop");
	if (ispaused == "true") {
		backgroundVideo.pause();
	}

	//setTimeout(function() {
		VideoFadeIn();
	//});
}
function VideoFadeIn() {
	if (DO_VIDEOFADEIN && !DISABLE_VIDEO) {
		var fadevalue = 0.0;
		var vidfadein = setInterval(() => {
			fadevalue += 0.01;
			backgroundVideo.style.opacity = fadevalue;

			if (fadevalue >= 1) {
				NavSlideIn();
				clearInterval(vidfadein);
			}
		}, 20);
	} else {
		if (!DISABLE_VIDEO) backgroundVideo.style.opacity = 1.0;
		else {
			backgroundVideo.style.opacity = 0.0;
			document.body.style.backgroundColor = "rgb(180, 180, 180)";
		}
		NavSlideIn();
	}
}
function VideoToggle() {
	backgroundVideo.paused ? backgroundVideo.play() : backgroundVideo.pause();
	setCookie("videop", backgroundVideo.paused, 365);
}

/***** Background Canvas*****/
function CanvasInit() {
	canvas = document.getElementById("BackgroundCanvas");
	ctx = canvas.getContext("2d");
	ctx.canvas.width = windowWidth;
	ctx.canvas.height = windowHeight;
}
function CanvasTick() {
	ctx.clearRect(0, 0, windowWidth, windowHeight);
	if (canvasHandle != null) canvasHandle();
	requestAnimationFrame(CanvasTick);
}
function CanvasCreateImage(Src, Width, Height) {
	img = new Image();
	img.src = Src;
	if (Width != null) img.width = Width;
	if (Height != null) img.height = Height;
	return img;
}
function CanvasAddImage(Src, Width, Height) {
	var img = new CanvasCreateImage(Src, Width, Height);

	canvasImages.push({
		"img": img,
		"width": Width,
		"height": Height
	});
}

/***** Other ******/
function arrayContains(Array, Object) {
	for (var i = 0; i < Array.length; i++) {
		if (Array[i] == Object) return true;
	}

	return false;
}
function changeCSSProperty(Property, Value) {
	document.documentElement.style.setProperty(Property, Value);
}
function HueToRGB(H, A) {
	var R, G, B;

	var S = 1.0;
	var L = 0.5;

	var c = (1.0 - Math.abs((2.0 * L) - 1.0)) * S;
	var x = c * (1.0 - Math.abs( ((H / 60.0) % 2.0) - 1.0));
	var m = L - (c / 2.0);

		 if (H >= 0   && H < 60)  { R = c; G = x; B = 0 }
	else if (H >= 60  && H < 120) { R = x; G = c; B = 0 }
	else if (H >= 120 && H < 180) { R = 0; G = c; B = x }
	else if (H >= 180 && H < 240) { R = 0; G = x; B = c }
	else if (H >= 240 && H < 300) { R = x; G = 0; B = c }
	else if (H >= 300 && H < 360) { R = c; G = 0; B = x }

	return { 
		r: (R + m) * 255.0,
		g: (G + m) * 255.0,
		b: (B + m) * 255.0,
		a: A
	};
}
function RandomLetter() {
	if (Math.floor(Math.random() * 2) == 1) 
		return String.fromCharCode(Math.floor(Math.random() * 25) + 65); // A - Z [ 65 - 90 ]
	else 
		return String.fromCharCode(Math.floor(Math.random() * 25) + 97); // a - z [ 97 - 122 ]
} 
function RandomText(Text, PreserveSpace) {
	var rtxt = "";
	for (var i = 0; i < Text.length; i++) {
		if (PreserveSpace && Text[i] == " ") rtxt += " ";
		else rtxt += RandomLetter();
	}
	return rtxt;
}

function GetElementX(Element) {
	return document.getElementById(Element).offsetLeft;
}
function GetElementY(Element) {
	return document.getElementById(Element).offsetTop;
}
function GetElementWidth(Element) {
	return document.getElementById(Element).offsetWidth;
}
function GetElementHeight(Element) {
	return document.getElementById(Element).offsetHeight;
}
function GetElementXWidth(Element) {
	return GetElementX(Element) + GetElementWidth(Element);
}
function GetElementYHeight(Element) {
	return GetElementY(Element) + GetElementHeight(Element);
}
