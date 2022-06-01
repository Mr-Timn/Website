//
// Made By Jordan Hoosman
//

var shownImages = [];
var imgspots = "3000000000";
var maxImages = 3;
var abouttext2offest = 0;

function ABOUT_PAGE_LOAD() {
	//console.log("Unloading about page");

	document.body.style.overflow = "scroll";

	pageContent.innerHTML += `
		<div id="AboutMe">
			<div id="AboutImages">
				<img src="Images/about/beltedkingfisher.png"  class="aboutpic" id="pic0"/>
				<img src="Images/about/cpphelloworld.png"     class="aboutpic" id="pic1"/>
				<img src="Images/about/cybersecurity.png"     class="aboutpic" id="pic2"/>
				<img src="Images/about/gambelsquail.png"      class="aboutpic" id="pic3"/>
				<img src="Images/about/killdeer1.png"         class="aboutpic" id="pic4"/>
				<img src="Images/about/killdeer2.png"         class="aboutpic" id="pic5"/>
				<img src="Images/about/origamiangel.png"      class="aboutpic" id="pic6"/>
				<img src="Images/about/origamidragon.png"     class="aboutpic" id="pic7"/>
				<img src="Images/about/piano.png"             class="aboutpic" id="pic8"/>
				<img src="Images/about/snowyegret.png"        class="aboutpic" id="pic9"/>

				<div id="KilldeerPeeps"></div>
			</div>
			<div class="AboutText" id="AboutText1">
				<h3><u class="aboutblock">About Me</u></h3>
				<p class="aboutblock">Hey my name is Jordan Hoosman and welcome to my website!</p>
				<p class="aboutblock">
					I want this website to mostly function as a digital history/library of sorts for my projects among other things. Writing isn't 
					my stongest skill so I'm going to write it in a pseudo-personal/pseudo-professional way. I hope this page reads well - I'm 
					giving it my best try! I would appreciate any feedback on it.
				</p>
				<div class="TextDivider"></div>
				<p class="aboutblock">
					I'm currently a senior in <i>Computer Engineer</i> minoring in <i>Cyber Security</i> at Iowa State University.
					Currently I work as a <i>High Performance Computing Jr Systems Administrator</i> at Iowa State as a student employee.
					You can see the servers I work with <a href="https://www.hpc.iastate.edu/systems">here</a>.
				</p>

				<h3><u class="aboutblock">My Skills</u></h3>
				
				<h5><u class="aboutblock">Programming</u></h5>
				<p class="aboutblock">
					For programming I generally know enough to start and create a project that I want to make if it's within my relative understanding 
					of computers; I would decribe myself like a systems engineer of sorts within computer engineering. I'm also very familiar with many 
					programming alorithms, practices, and their applications. This includes a working understanding with Bash, C, C++, Java including 
					Spring Tools 4, Python, Lua, and (HTML/CSS/Javascript - DOM, JQuery, and NodeJS). I'm less familar but comfortable (enough) in Assembly 
					- Both struturally and specifically with MIPS; Jekyll, and Verilog. I use C++ the most out of any of the other languages; I love C++ 
					including the reasons why most don't. I have a long term goal of creating a system of connected computers over a network I create, 
					mantain, and control. As I improve my hardware skills/understanding the idea will take shape - I've already made progress with the aspect 
					of handling my devices GUI's and networking/security with some abstraction. I would only call myself an expert in in C/C++ and DOM 
					Javascript; Just fluent or otherwise for rest. 
				<p>

				<div class="TextDivider"></div>
				
				<p class="aboutblock">
					The environments I use the most often are Visual Studio Community, Visual Studio Code since I code the most in C/C++ and HTML etc. I 
					infrequently use Eclipse for Java, Notepad++ when I don't want to use Visual Studio Code, Android Studio, Quartus Prime and 
					ModelSim for CPU design using Verilog. 
				</p>

				<h5><u class="aboutblock">Operating Systems</u></h5>
				<p class="aboutblock">
					I primarily use Debian on my main computer day-to-day so I have a familiarity with it and other debian-based distros. I've gone as far to 
					set up my main computer to run Debian on one monitor and Window on the other; 
					Shown here - <a href="https://wiki.debian.org/VGAPassthrough">VGAPassthrough</a> - As described in the link, but the actual process 
					was <b>not</b> that easy. I even created a script to swap between doing that and only running Debain. With Windows I have a fair understanding of 
					the control panel and task manager. I don't know if it counts as a skill since I have no reference but myself, but I can navigate through Windows 
					with only keyboard. The only other operating systems I'm familair with somewhat or otherwise are RHEL because that's what my job uses, Kali Linux, 
					and Raspberry Pi OS.
				</p>

				<h5><u class="aboutblock">Cyber Security</u></h5>
				<p class="aboutblock">
					I have a <i>huge</i> passion in cyber security but I don't have much to show for it yet outside of my general knowledge of the field. I have some 
					experience in penetration testing using some of the tools Kali like Wireshark, Nmap, BeEF, Tom, and Metasploit. I have also used other non-tool 
					penetration testing with MYSQL, Cross-Site Scripting, Google Dorking and concepts like social engineering.
					Although I'm still exploring my interest in cyber security, recently I have been leaning into cryptography possibly as a specialilzation. I still 
					need to expand on my knowledge of faster mathmatetical operations, prime number generation/verification, and cryptanalysis before I can confidently 
					present my understanding of cryptography. Academically I would love to contribute more to the field by creating more methods of security through 
					cryptography.
				</p>
				
				<h5><u class="aboutblock">Circuits</u></h5>
				<p class="aboutblock">
					I have a fair understanding of electronic circuits and their applications. I only really have experience from the couple electrical engineering labs I 
					took where I developed a fair understanding of things like circuit analaysis - Source transformation, Node voltage, and Superpositions; As well as 
					other circuit components like op-amps (including low/high/band passive/active filters for gain functions with corner frequencies), capacitors, 
					diodes, and MOFSETS. I don't have any projects to show for my understaning yet but I should as I continue working with more circuits. I also use LTSpice 
					for virtual circuit design on my computer. 
				</p>

				<h3><u class="aboutblock">My Hobbies</u></h3>
				<p class="aboutblock">
					My hobbies include origami, piano, bird watching, and programming. I've made origami for around 11 years or so now.
					My favorite thing to make is various western dragons and angels. I've been playing piano for around 7 years now. I'm not 
					incredibly good at it but I can play Chopin's Nocturne Op. 2 No. 1 and 2; As well as Beethoven's Moonlight 
					Sonata Mov. 1 and Pathetique 2nd movement. My girlfriend is an Animal Ecologist at Iowa State and loves to 
					bird! She has over 400 species seen and currently ranked the 94th birder in Iowa on ebird. I follow at #239 but 
					mostly because of her! You can see some of the pictures she took; Including one of our favorites, a Killdeer, in the background. Watch, they'll
					say hello to you!
				</p>

			</div>
			<div class="AboutText" id="AboutText2" style="overflow-y: scroll;">
				<h3><u class="aboutblock">Brief history of my programing projects</u></h3>
				<p class="aboutblock">
					I started programming in Lua my freshman year in high school around 2013 when I used to play Roblox a lot. 
					Soon later I started programming in Javascript, making 2D applications using the canvas. Back then I really 
					wanted to create 2d games with networking support but I wasn't experienced enough. Even from the available 
					engines at the time, assuming they were even accessible, were overwhelming for me at that time. 
				</p>
				<div class="TextDivider"></div>
				<p class="aboutblock">
					Shortly after going to college I started programming in C++ and created my first larger project <a onclick="LinkTo_Lelantos()">Lelantos</a>; 
					Named after the Greek titan. The first version of Lelantos was for the terminal and I wanted to create a more user 
					friendly version of it while still using C++, so I came across <a href="https://www.libsdl.org/">SDL2</a> and created a not-so-user-friendly version 2.
				</p>
				<div class="TextDivider"></div>
				<p class="aboutblock">
					After Lelantos I created my own media server so that I could watch saved movies and tv shows from my main 
					computer on my laptop on a browser. Pretty much like Plex but better because I made it and it's free. After the
					website was functional I started on my next large C++ project called Aura. 
				</p>
				<div class="TextDivider"></div>
				<p class="aboutblock">
					<a onclick="LinkTo_Aura()">Aura</a> was an AI I created for my main computer to perform tasks using my voice. I named it Aura because 
					in the mythology Aura was named after Lelantos's daughter. Although it <i>really</i> needs to be updated to function correctly now, towards the end 
					of it's development it was able to navigate to the media website I created and select things by speaking. It worked the same with YouTube; 
					I could say "Hey Aura. Search YouTube Chopin" where I could say "Click/Goto X" to listen to my favorite Brigitte Engerer video. Other 
					features include pausing/playing, fullscreen, volume, and downloading for offline usage while watching videos. I also created an app that 
					function the same way voice commands did but a bit more reliably since microphones can be spotty. Aura was put on hold (around 2 years ago 
					or so) so that I could start my current project JCode which I've been working on since. 
				</p>
				<div class="TextDivider"></div>
				<p class="aboutblock">
					After working through many projects I decided to make an attempt at creating an engine to streamline projects between programs on all of my devices. The 
					engine consists of a few different parts. One is a cross-enginge application manager called <a onclick="LinkTo_JScene()">JScene</a>. It's built off of the 
					open source API SDL2. JScene uses it's functions to help organize and manage resources in it's usage as well as speeding up the process of making my applications  functional. 
					It also is capable of processing video and playing with ffmpeg. Another API I made is called <a onclick="LinkTo_JNetwork()">JNetwork</a>. It can be used stand alone to handle 
					network connections for an applications or in conjunction with JScene for a project. JCrypt is my cryptography engine. It uses GMP large number arthimetic and 
					has most modern standerds like RSA, Diffie-Hellman, and ECDH. More recently I've started adding post-quantum algorithms such as Super-isogeny Diffie-Hellman and Falcon.
					Check out the <a onclick=NavButtonClick('PROJECTS')>Projects</a> page or above links for a full description of each.
				</p>
			</div>
		</div>
	`;
					
	imgspots = "3000000000";
	shownImages = [];
	abouttext2offest = 0;
	
	About_BackgroundImages();
	About_TextLoadIn(true);
}
function ABOUT_PAGE_UNLOAD() {
	//console.log("Unloading about page");

	document.body.style.overflow = "none";

	pageUnloadTimer = 3500;

	About_TextLoadIn(false);
}

function About_TextLoadIn(adj) {
	var ablocks = document.getElementsByClassName("aboutblock");
	var i = adj == true ? -1 : ablocks.length;

	var blockready = true;
	var loadblock = setInterval(() => {
		if (blockready) {
			blockready = false;
			
			i = adj == true ? i + 1 : i - 1; 
			if (i < 0) return;
			
			var alltext = ablocks[i].innerHTML; //console.log(alltext);
			var onletter = adj == true ? 0 : alltext.length;

			if (adj) {
				ablocks[i].innerHTML = '';
				ablocks[i].style.opacity = 1.0;
			} else {
				changeCSSProperty("--textdiv-opacity", "0.0");
			}
			
			var validletter = (l) => {
				return !(l == '<' || l == '>' || l == '/');
			};
			var loadletters = setInterval(() => {
				for (var k = 0; k < 15; k++) {
					if (adj && validletter(alltext[onletter])) ablocks[i].innerHTML += alltext[onletter];
					else if (onletter >= alltext.length - 1) {
						alltext = alltext.substr(0, alltext.length - 1);
						ablocks[i].innerHTML = alltext;
					}

					onletter = adj == true ? onletter + 1 : onletter - 1;
					if ((adj && onletter >= alltext.length) || (!adj && onletter < 0)) {
						blockready = true;
						if (adj) ablocks[i].innerHTML = alltext;

						clearInterval(loadletters);

						break;
					}
				}

			}, 1);
		}

		if ((adj && i >= ablocks.length - 1) || (!adj && i < 0)) {
			if (adj) changeCSSProperty("--textdiv-opacity", "1.0");
			clearInterval(loadblock);
		}
	}, 20);
}

function About_ImageFadeImg(Img, Ind) {
	if (Img == null) return;

	shownImages.push(Img.id);

	var imgspot;
	do {
		imgspot = Math.floor(Math.random() * imgspots.length);
	} while (imgspots[imgspot] != "0");
	imgspots = imgspots.split(''); 
	imgspots[imgspot] = "1"; 
	imgspots = imgspots.join('');

	Img.style.transform = "rotate(" + Math.round(Math.random() * 20 - 10) + "deg)";
	
	Img.style.left = ((imgspot % 3) * 30 + 10) + "%";
	Img.style.top = ((Math.floor(imgspot / 3)) * 20 + 5) + "%"; 

	var imga = 0.0;
	var imgfadein = setInterval(() => {
		if ((imga += 0.075) < 0.5) {
			if (Img != null) Img.style.opacity = imga;
		} else {
			clearInterval(imgfadein);
		}
	}, 70);

	var peeping = null;
	if (Img.id == "pic4" || Img.id == "pic5") {
		var peepcon = document.getElementById("KilldeerPeeps");
		peepcon.innerHTML += `
			<div class="peep" id="peep` + Img.id + `1"><h4>peep</h4></div>
			<div class="peep" id="peep` + Img.id + `2"><h4>peep</h4></div>
		`;

		var npeep1 = document.getElementById("peep" + Img.id + "1");
		var npeep2 = document.getElementById("peep" + Img.id + "2");

		var nrect = Img.getBoundingClientRect();
		var mvpeep = 1;
		var peepct = 0, peepmax = 20;

		npeep1.style.opacity = 1.0;
		npeep2.style.opacity = 1.0;

		peeping = setInterval(() => {
			mvpeep = mvpeep + 1 % 2;
			if (mvpeep == 1) {
				npeep1.style.opacity = 1.0;
				npeep1.style.top = (nrect.top + (Math.random() * 200)) + "px";
				npeep1.style.left = (nrect.left + (Math.random() * 150)) + "px";
				npeep1.style.transform = "rotate(" + (Math.random() * 60 - 30) + "deg)";
			} else {
				npeep2.style.opacity = 1.0;
				npeep2.style.top = (nrect.top + (Math.random() * 200)) + "px";
				npeep2.style.left = (nrect.left + (Math.random() * 150)) + "px";
				npeep2.style.transform = "rotate(" + (Math.random() * 60 - 30) + "deg)";
			}

			if ((peepct +=1) > peepmax) {
				npeep1.remove();
				npeep2.remove();
				clearInterval(peeping);
			}
		}, 250);
	}

	setTimeout(function() {
		var imgfadeout = setInterval(() => {
			if ((imga -= 0.1) > 0) {
				if (Img != null) Img.style.opacity = imga;
			} else {
				imgspots = imgspots.split(''); 
				imgspots[imgspot] = "0"; 
				imgspots = imgspots.join('');

				Img.style.opacity = 0.0;
				shownImages.splice(Ind, 1);
				
				clearInterval(imgfadeout);
			}
		}, 100);
	}, Math.floor(Math.random() * 4000) + 5000);
}

function About_BackgroundImages() {
	var pickedimg = document.getElementById("pic" + Math.floor(Math.random() * 10));
	About_ImageFadeImg(pickedimg, shownImages.length);

	var aboutbghandle = setInterval(() => {
		if (CURRENTPAGE != "ABOUT") clearInterval(aboutbghandle);

		if (shownImages.length <= 4) {
			var pickedimg;
			
			do {
				pickedimg = document.getElementById("pic" + Math.floor(Math.random() * 10));
			} while(pickedimg != null && shownImages.length != 0 && arrayContains(shownImages, pickedimg.id));
			
			About_ImageFadeImg(pickedimg, shownImages.length);
		}
	}, 3000);
}
