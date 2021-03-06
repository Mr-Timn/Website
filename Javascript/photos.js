//
// Made by Jordan Hoosman
//

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
			<div id="NavShade"></div>

			<a href="https://github.com/Mr-Timn/Website"><img class="NavItem" onmousemove="NavRotateItem(this)" id="NavLogo" src="Images/nav/Logo3.png" alt="GitHub"/></a>
			<div id="NavButtons">
				<img class="NavItem" onclick=NavButtonClick('INDEX')    onmousemove="NavRotateItem(this)" id="NavHome"    src="Images/nav/home.png"     alt="Home"     />
				<img class="NavItem" onclick=NavButtonClick('ABOUT')    onmousemove="NavRotateItem(this)" id="NavAbout"   src="Images/nav/about.png"    alt="About"    />
				<img class="NavItem" onclick=NavButtonClick('CONTACT')  onmousemove="NavRotateItem(this)" id="NavContact" src="Images/nav/contact.png"  alt="Contact"  />
				<img class="NavItem" onclick=NavButtonClick('PROJECTS') onmousemove="NavRotateItem(this)" id="NavProject" src="Images/nav/projects.png" alt="Projects" />
				<img class="NavItem" onclick=NavButtonClick('OTHER')    onmousemove="NavRotateItem(this)" id="NavOther"   src="Images/nav/other.png"    alt="Other"    />
			</div>

			<div class="NavItem" id="NavBorder"></div> 
			
			<div id="NavHoverText"><h3 id="NavHoverTextH3"></h3></div>
		</div>
	`;

	pageContent = document.getElementById("PageContent");
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
	navBorder = document.getElementById("NavBorder");
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

	navHoverTextInterval = setInterval(() => {
		document.getElementById("NavHoverTextH3").innerText = Item.alt;

		navHoverText.style.left = (mouseX + 20) + "px";
		navHoverText.style.top = (mouseY - 45) + "px";

		// onmouseleave/out is inconsistent - doing this instead
		if (mouseX > navBorder.offsetLeft || !(mouseY > Item.offsetTop && mouseY < Item.offsetTop + Item.offsetHeight)) {
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
	setTimeout(function() { //console.log(Item.offsetTop);
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
	var itemdelay = 100;

	// Nav items animation
	for (var i = 0; i < navitems.length; i++) {
		var item = navitems[i];
		if (item.id == "NavBorder") continue;
		
		item.style.height = item.clientWidth + "px";
		
		if (item.id == "NavLogo") {
			item.style.top = "var(--nav-start-logo)";
		} else {
			item.style.top = `calc(var(--nav-start-logo) + var(--nav-width) + (( ` + item.clientWidth + "px"  + ` + 10px ) * ` + i + `))`;
		}

		NavSlideItem(item, i * itemdelay);
	}

	// NavBorder animation
	setTimeout(function() {
		var navbar = document.getElementById("NavBorder");
		navbar.style.left = document.getElementById("NavShade").clientWidth + "px";
		
		var extendvalue = 0, extendadj = 50;
		var extendbar = setInterval(() => {
			extendvalue += 2;
			extendadj -= 1;

			navbar.style.height = extendvalue + "%";
			navbar.style.top = extendadj + "%";

			if (extendvalue >= 100) clearInterval(extendbar);
		}, 10);
	}, 200); 
}
function NavButtonClick(Item, Override) {
	if (Item == CURRENTPAGE) return;

	if (Override == null || !Override) {
		window[CURRENTPAGE + "_PAGE_UNLOAD"]();
		pageUnloaded = false;
			
		setTimeout(function() { //console.log("--New page ready--");
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
			
			pageContent.innerHTML = "";
			
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

window.onload = function() {
	LoadSharedContent();
	NavInit();
	VideoInit();
	
	pageContent.innerHTML = `
		<div class="Folder" id="Summer2021">
			<a href="" id="thumbnail"><img src=""/></a>
		</div>
		<div class="Folder" id="Favorite">
			<a href="" id="thumbnail"><img src=""/></a>
		</div>
		<div class="Folder" id="Cat">
			<a href="" id="thumbnail"><img src=""/></a>
		</div>
	`;
}
