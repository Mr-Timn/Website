//
// Made By Jordan Hoosman
//

/*
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>PROJECT</h1>
			</div>
			<div id="ProjectInfo">
				<p>

				</p>
			</div>
		</div>
	`;
*/

var Projects_leftarrow = `<img src="Images/projects/leftarrow.png" width="40px" height="40px" onclick="PROJECTS_PAGE_LOAD()" style="cursor:pointer; position:absolute; display:inline-block; left:10px; top: 25%"/>`;

function PROJECTS_PAGE_LOAD() {
	//console.log("Loading projects page");

	pageContent.innerHTML = `
		<div id="ThisPageIsntGoingToBeInterestingBecauseImTiredOfDealingWithJavaScriptToPerformIterativeBasedTasks"></div>
		<div id="ProjectList">
			<div class="Project" id="ProjectsJCode">
				<h1>JCode</h1>

				<div class="JCodeBox" id="JCodeLibraries">
					<div class="ProjectLinks JCodeBox2">
						<h2><u>JCode - Libraries</u></h3>
						<h3 onclick="Load_JScene()">JScene</h3>
						<h3 onclick="Load_JCrypt()">JCrypt</h3>
						<h3 onclick="Load_JNetwork()">JNetwork</h3>
					</div>
				</div>
				<div class="JCodeBox" id="JCodeProjects">
					<div class="ProjectLinks JCodeBox2">
						<h2><u>JCode - Projects</u></h2>
						<h3 onclick="Load_JCam()">JCam</h3>
						<h3 onclick="Load_JTransmission()">JTransmission</h3>
						<h3 onclick="Load_Snake()">Snake</h3>
						<h3 onclick="Load_RPS()">RPS Simulator</h3>
					</div>
				</div>
			</div>
			<div class="Project" id="ProjectsApps">
				<div class="ProjectLinks AppBox">
					<h2><u>Applications</u></h2>
					<h3 onclick="Load_NewTerraImperia()">New Terra Imperia</h3>
					<h3 onclick="Load_PolyInput()">PolyInput</h3>
					<h3 onclick="Load_Lelantos()">Lelantos</h3>
					<h3 onclick="Load_Aura()">Aura</h3>
					<h3 onclick="Load_SlideController()">Slide Controller</h3>
				</div>
			</div>
			<div class="Project" id="ProjectsOther">
				<div class="ProjectLinks AppBox">
					<h2><u>Other Projects</u></h2>
					<h3 onclick="Load_MyComputers()">Personal Computers</h3>
					<h3 onclick="Load_DualOS()">DualOS</h3>
				</div>
			</div>
		</div>
	`;
}
function PROJECTS_PAGE_UNLOAD() {
	console.log("Unloading projects page");

	pageUnloadTimer = 100;
}

// JCode
function Load_JScene() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>JScene</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					JScene is a cross-platform application engine, writting in C++, using the open source library SDL2 that I originally started as <i>Window.h</i> in my 
					project, Lelantos. It is also the second verion of itself, the first version was originally paired with a game engine but I restructured 
					it with the other parts of the engine in JCode JNetwork and haven't offically decided to include the game engine with it. It works with Linux, 
					Windows 10, Android, and iOS. 
				</p>
				<p>	
					SDL2 handles most of the low level access and abstraction of devices, peripherals, and general 2D rendering. JScene optimizes SDL2's API to streamline 
					applications across devices. This includes but isn't limited to creating and starting the an application; Updating the screen - frame-by-frame handling;
					Writing text; Keyboard/Touchscreen usage; Drawing and handling images, buttons, text boxes; Audio and video. 
					Updating the new documention hasn't been done yet but you can click <a href="Legacy/JSceneV1Docs/index.html">here</a> and read the documentation for version
					1 of it to get an idea of it; There's a lot missing comparatively but it also includes the game engine I made with it.
				</p>
				
				<p>
					Here's a simple example program I made using it below with the relevant code. One is a screen recording from my computer and the other is a video 
					of my Samsung Note 4 running the program; Both stitched into a GIF.
				</p>
				<div id="ProjectPictures">
					<img src="Images/projects/JScene/jsceneexamplecode.png" style="vertical-align:top;"  width="750px" height="700px"/>
					<div style="display:inline-block;">
						<img src="Images/projects/JScene/jsceneexamplevid.gif"    width="480px" height="240px"/><br>
						<img src="Images/projects/JScene/jsceneexamplemobile.gif" width="480px" height="700px"/>
					</div>
				</div>
			</div>
		</div>
	`;
}
function Load_JCrypt() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>JCrypt</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					JCrypt is an cryptography API I made for encrypting/decrypting data with various modern or simple (a)symmetric cryptographic functions. It uses GMP for
					large number calculation for it's classical algorithms(RSA/DH). Most importantly it includes the post-quantum algorithms <a onclick="https://sike.org/"> Supersingular Isogeny Diffie-Hellman</a>,  
					<a onclick="https://pq-crystals.org/kyber/">Kyber</a>, and <a onclick="https://falcon-sign.info/">Falcon</a>. <a onclick="https://github.com/P-H-C/phc-winner-argon2">Argon2, which won the 2015 password hashing competition, 
					has also been integrated into the library.  
					Like the rest of the library, it's cross platform compatible with Linux, Windows 10, Android, iOS. Parts of the library have been rewritten to work with 
					Arduino ESP8266/32; This includes all ECC curves and post-quantum algorithms. 
				</p>
				<p>
					For simple encryptions it has reverse, rotate right, rotate left, Ceasear cipher, and Vignere cipher.
				</p>
				<p>
					For modern encryptions, JCrypt can encrypt and decrypt using both AES 128/192/256 and Serpent. AES has both a software and hardware implementation using the AES-NI 
					instruction set for modern x86 processors which <i>significantly</i> improves performance.
				</p>
				<p>
					For modern key exchange encryption, JCrypt can use both RSA, Diffie-Hellman, and ECC standards. ECC can use the curves: P192, P224, P256, P384, P521, W25519, W448, Curve25519, Curve448, Edwards25519, Edwards448, E448, SECP192K1, SECP224K1, 
					SECP256K1, SECP192R1, SECP224R1, SECP256R1, SECP384R1, SECP521R1.
				</p>
				
				<p> Below are some screenshots of the library encrypting and decrypting messages</p>
				<img src="Images/projects/JCrypt/simpleexample.png"/>
				<img src="Images/projects/JCrypt/aesexample.png"/>
				<img src="Images/projects/JCrypt/rsaexample1.png"/>
				<img src="Images/projects/JCrypt/rsaexample2.png"/>
				<img src="Images/projects/JCrypt/rsaexample3.png"/><br>
				<img src="Images/projects/JCrypt/dhexample1.png"/><br>
				<img src="Images/projects/JCrypt/dhexample2.png"/>
				<img src="Images/projects/JCrypt/eccexample.png"/>
			</div>
		</div>
	`;
}
function Load_JNetwork() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>JNetwork</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					JNetwork is a networking API that I made as part of JCode to handle all of the networking done with the projects I make. It's broken down into a few different parts so 
					that I can quickly create simple applications or easily implement other types of socket communication like bluetooth, which I intended to implement later.
				</p>
				<p>
					<span style="color:var(--text-color-orange)">JSocket</span> resides within the Network namespace and contains all the handling for socket implementation. TCP and broadcast 
					socket types are currently usable implementations. For all types of socket communication, sending, recveiving, and broadcating data are available. Data handled via typical 
					methods e.g. blocked and timed or through polling. Additionally I've added other LAN functions for getting IP addresses/interfaces and port scanning. Port scanning has been 
					implemented in 2 ways - One normal, timeout based scanning and a TCP-SYN scan similiar to nmap which is considerably faster but requires admin privileges.
				</p>
				<p>
					<span style="color:var(--text-color-orange)">JClient and JServer</span> are TCP implementations using JSocket with function hooks for additional implemetation on top of 
					each. For clients it handles safely connecting, disconnecting, sending/receiving data. For servers it handles safely starting, closing, restarting, sending/receiving data 
					and setting passwords.
				</p>
				<p>
					<span style="color:var(--text-color-orange)">JSecure</span> is a higher level implementation using <a onclick="Load_JCrypt()">JCrypt</a> and JSocket(Client/Server). Using 
					the hooks as described in JClient/JServer it combines the two API to connect and communicate securely. To work around the need for a certificate authority or having to enter a 
					public key to the app, each connection uses the password to generate and validate signatures to prevent man-in-the-middle attacks. You can watch my demonstration and in depth explanation 
					<a href="https://www.tiktok.com/@theycallmethelegend/video/7090604871044402475">here</a> on TikTok!
				</p>
			</div>

			<!-- Update 1
			<div id="ProjectInfo">
				<p>
					JNetwork is a network application interface written C++ to try and make easier most of the communication when trying to integrate sockets in an application.
					This includes things like password locked servers to prevent unwanted connections and additional levels of security when attempting communication. Currently it has reverse, caesar, and vignere ciphers functional and 
					can be arranged in many way. I have plans for implementing RSA and Diffie-Hellman for key exchanges and AES for additional security very soon. They'll be implemented 
					once prime number generation is improved in JNumbers. Longer term planning for JNetwork would include bluetooth support. 
				</p>
				<p>
					There isn't much else to say about JNetwork. Once integration with JNumbers and updated documentation is started the page will start to fill out more. Check 
					out <a onclick="Load_JTransmission()">JTransmission</a> for an application using JNetwork. I've detailed most of it's usage there with examples. 
				</p>
			</div>
			--!>
		</div>
	`;
}
function Load_JCam() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>JCam</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					Watch my demo on <a href="https://www.tiktok.com/@theycallmethelegend/video/7090604871044402475">TikTok</a>!
				</p>
				<p>
					JCam is a WiFi security camera that uses post-quantum encryption to establish secure connections before streaming. This includes 2 types of 
					cameras; Arduino(ESP8266/32) cameras and any device that supports USB cameras (RaspberryPi, PC). The project is built on top of my JCode library so the cameras 
					can be connected to from pretty much any device (Android/iOS/Windows/Linux). It is an ongoing project and I hope to sell them in the future.
					I'm still implementing more algorithms into <a onclick="LinkTo_JCrypt()">JCrypt</a> but currently the cameras can use Elliptic-curve Diffie-Hellman or 
					<a onclick="https://pq-crystals.org/kyber/">Kyber</a> for key exchanging; Falcon for verifying signatures, and AES for encrypting the camera's stream. The level
					of security can be changed from the app temporarily or permanently. 
				</p>
				<p>
					The Arduino cameras themselves can't store video yet but the RaspberryPi can if for it's own stream and any streams connected to it.  
				</p>

				<p>Here are the cams that are currently setup in my house; My girlfriend and I primarily use them for watching my cat while we are away. The camera on the left is plugged into my 
				RaspberryPi which also acts as a proxy device for viewing multiple camera streams. The camera on the right is a ESP32-Cam with a 3d printed case attached to a micro servo
				so the camera can rotate. </p>
				<img src="Images/projects/JCam/picam.jpg" width="200px" height="250px" />
				<img src="Images/projects/JCam/ceilingcam.jpg" width="200px" height="250px" />
				
				<p>
					The design of the app itself is still a work in progress as I'm still working on my design skills but everything functionally works. Here are some screenshots from checking
					on my cat while on vacation.
				</p>
				<img src="Images/projects/JCam/capture1.png" width="500px" height="250px" />
				<img src="Images/projects/JCam/capture2.png" width="500px" height="250px" />
				<img src="Images/projects/JCam/capture3.png" width="500px" height="250px" />
				
				<p>
					Here are a couple pictures of the Prototype MK 3: The Birdhouse as in the TikTok linked above. It's made mostly from cardboard and tape. I only made the design for fun/testing purposes so the 
					cameras are no longer in use.
				</p>
				<img src="Images/projects/JCam/cams.jpg"       width="400px" height="250px" />
				<img src="Images/projects/JCam/solarpanel.jpg" width="200px" height="250px" />
			</div>
		</div>
	`;
}
function Load_JTransmission() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>JTransmission</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					JTransmission is the first application I made using JCode. I made it to demonstrate what <i>could</i> be made with the engine. The project 
					doesn't currently have any plans for updates outside of testing the security sent information through <a onclick="Load_JNetwork()">JNetwork</a>. 
					It's a very simple network communication application. A user can host a chat room directly from their computer on their local network; Over 
					the internet if they've port forwarded. A password can be set to so that only users with it can join. All data shared between the client and 
					the server are (unsecurely) encrypted.
				</p>

				<div width="100%" height="1px" style="margin-bottom: 5px; border-top:1px dotted white"></div>
				
				<div id="JTransmissionExample">
					<h2>Here's a simplified senario as a pseudo-explaination of the program!</h2>
					<div id="jtsetup">
						<div id="jtpeople">
							<div class="jtperson">
								<h2 class="jtpdesc">Bob</h2>
								<p class="jtpdesc">
									First we have Bob - A random person that exists. They could be an astronaut, a redditor, a or a manager of an inportant hedgefund. Perhaps a really smart 
									crow that learned to type. Whoever they are, they want to make a chatroom to talk to a friend of theirs. Here's what they do.
								</p>
								<img class="jtimg" src="Images/projects/JTransmission/mainmenubob.png" />
								<img class="jtimg" src="Images/projects/JTransmission/createserver.png" />
							</div>
							<div class="jtperson">
								<h2 class="jtpdesc">Alice</h2>
								<p class="jtpdesc">
									Next we have Alice who I also suspect is a crow that learned to type. They put in the information that Bob gave them. They're only 
									connecting to localhost because running locally is a bit easier to demonstrate with; This would still work over LAN or port forwarded 
									connection.
								</p>
								<img class="jtimg" src="Images/projects/JTransmission/mainmenualice.png" />
								<img class="jtimg" src="Images/projects/JTransmission/join.png" />
							</div>
						</div>
						<div id="jtlobby">
							<h2 class="jtpdesc">The lobby</h2>
							<p class="jtpdesc">
								This brings them both here and they have this conversation in each example.
							</p>
							<img class="jtimg" src="Images/projects/JTransmission/lobby.png" />
							<img class="jtimg" src="Images/projects/JTransmission/convo.png" />
						</div>
					</div>
					<div>
					<div id="jtsenarios">
						<h5>NOTE: Sent/received data is printed to the console for debugging purposes and might be reflected in some of the screenshots. 
						This information can only be read on <i>my computer</i>.</h5>
						<div class="jtexample">
							<div class="jttitle">
								<h1>Unencrypted</h1>
								<div id="jtcmd0"></div>
							</div>

							<h3>Unfortunately, Bob and Alice ran the application like this and Eve was listening to their conversation again! Eve snooping on their conversation again using their <i>elite hacking skills</i>.</h3>
							
							<h3>They caught the password while Alice was connecting:</h3>
							<div id="jtpass0"></div>
							<h3>Extra information sent after connecting:</h3>
							<div id="jtinfo0"></div>
							<h3>And of course Bob and Alice's entire conversation:</h3>
							<div class="jtmsgs" id="jtmsgs0"></div>

							<h3>Eve is upset that they hate them but deep down in their heart... Eve knows why.
						</div>
						<div class="jtexample">
							<div class="jttitle">
								<h1>Reverse Encryption</h1>
								<div id="jtcmd1"></div>
							</div>
							
							<h3>This time they thought if their messages were sent backwards maybe Eve won't be able to understand. They were <i>very</i> wrong.</h3>

							<h3>The password:</h3>
							<div id="jtpass1"></div>
							<h3>Server information:</h3>
							<div id="jtinfo1"></div>
							<h3>The converation:</h3>
							<div class="jtmsgs" id="jtmsgs1"></div>

							<h3>Eve feels worse for their attempt to obfuscate their conversation in this manner than being upset.</h3>
						</div>
						<div class="jtexample">
							<div class="jttitle">
								<h1>Shift then Rotate Encryption</h1>
								<div id="jtcmd2"></div>
							</div>

							<h3>Wow it seems like this time Bob and Alice finally found a cipher to beter encrypt their messages. It's not the most secure
							solution but it should stop Eve temporarily.</h3> 
							
							<h3>The password:</h3>
							<div id="jtpass2"></div>
							<h3>Server information:</h3>
							<div id="jtinfo2"></div>
							<h3>The converation:</h3>
							<div class="jtmsgs" id="jtmsgs2"></div>

							<h3>Eve is impressed that their messages are better secured but notices small patterns in the messages so they prepare to 
							analyze more messages to crack the encryption.</h3>
						</div>
						<div class="jtexample">
							<div class="jttitle">
								<h1>Vignere then Rotate Encryption</h1>
								<div id="jtcmd3"></div>
							</div>

							<h3>Bob and Alice get advice from their other friend Mallory and they suggest they use a bit better encryption so they do. It's not the best 
							but it should keep Eve from reading their messages for a bit longer.</h3> 
							
							<h3>The password:</h3>
							<div id="jtpass3"></div>
							<h3>Server information:</h3>
							<div id="jtinfo3"></div>
							<h3>The converation:</h3>
							<div class="jtmsgs" id="jtmsgs3"></div>

							<h3>Eve is a bit stumped now. They're going to have to break out more advanced encryption analaysis techniques if they want to 
							keep snooping on Bob and Alice. But they will definitely be back very soon</h3>
						</div>
					</div>	
				</div>
			</div>
		</div>
	`;

	for (var i = 0; i < 4; i++) {
		var jtcmd = document.getElementById("jtcmd" + i);
		var jtpass = document.getElementById("jtpass" + i);
		var jtinfo = document.getElementById("jtinfo" + i);
		var jtmsgs = document.getElementById("jtmsgs" + i);

		jtcmd.innerHTML = `<img src="Images/projects/JTransmission/E` + i + `/cmd.png"/>`;
		jtpass.innerHTML = `<img src="Images/projects/JTransmission/E` + i + `/pass.png" />`;
		jtinfo.innerHTML = `
			<img src="Images/projects/JTransmission/E` + i + `/serverinfo.png" /><br>
			<img src="Images/projects/JTransmission/E` + i + `/username.png" />
		`;
		for (var j = 1; j < 8; j++) {
			jtmsgs.innerHTML += `<img src="Images/projects/JTransmission/E` + i + `/msg` + j + `.png" /><br>`;
		}
	}
}
function Load_Snake() {
	pageContent.innerHTML = `
	<div id="ProjectDescription">
		<div id="ProjectTitle">
			` + Projects_leftarrow + `
			<h1>Snake</h1>
		</div>
		<div id="ProjectInfo">
			<p>
				As the name implies this project is Snake - but made using JCode as the engine. It's the first game that I've made using it. The app is just regular Snake but I added 2 features. 
				The first feature is custom colors; In the settings you can choose the colors for the color of the app's background, the text, the game's background, and the snake. The color for each 
				can be changed with a HSL color picker I implemented. I got the idea 
				for this from my girlfriend which is why I chose this as the first game application for JCode. The second feature is multiplayer; This feature is only really usable on PC because 
				neworking/threading doesn't function as well on android using JNetwork with large sets of communication; At least with my Samsung Note 4 dispite using mostly poll based sockets. As 
				far as functionality with multiplayer goes, I was able to play a game on localhost running both clients. What does work on PC <i>and</i> mobile I game scanning - Since the app isn't run on a  
				server connecting to each other is done over LAN, so if someone is hosting a game on your network the app will scan for it. 
			</p>
			<p>
				I don't have any plans for updates in the future. I do plan on releasing it on the Google Play Store and App Store with multiplayer disabled right after I finish and host this website. I'll 
				update this page once I do. 
			</p>
			<div id="snakescreencaps" class="jcodeprojscreencaps">
				<h4>Here are some screencaps of me using the app plus quick video of me playing the game. The game is running off of my computer because it's easier to record but it uses the exact same 
				code as the app does minus a few (mostly negligible) android specific things.</h4>
				<img src="Images/projects/Snake/mainmenu.png" />
				<img src="Images/projects/Snake/customizemenu.png" />
				<img src="Images/projects/Snake/colorsbefore.png" />
				<img src="Images/projects/Snake/colorsafter.png" />
				<img src="Images/projects/Snake/newmainmenu.png" />
			</div>
			<div class="jcodeprojvideo">
				<video class="jtimg" controls>
					<source src="Media/playingsnake.mp4" type="video/mp4">
				</video>
			</div>
		</div>
	</div>
	`;
}
function Load_RPS() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>RPS Simulator</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					RPS Simulator is my favorite application that I've programmed so far! It's a simulation that spawns an equal number of rock, paper, and scissors in random positions 
					that actively seek eath other out. When they collide the losing object (like in regular RPS) turns into the losing one. 
					All credits for the core idea of this app go to <a href="https://www.tiktok.com/@livingrps/video/6930019547961412869">this</a> TikTok. 
					The app needs to be optimized a lot but it works very well for casual usage. I plan to add a few more features to the app like 
					<a href="https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock">rock-paper-scissors-lizard-spock</a> or 
					custom simulation conditions. Sometimes it, or at least it did at one point, results in an actual winner at larger values. My computer could handle team sizes of in the 
					hundreds of thousands but as since it's unoptimized it <i>struggles</i> to produce a winner even at values 800 or so due to the screen bounds causing more overlap.
				</p>
				<p>
					If you have an Android you can download it on <a href="https://play.google.com/store/apps/details?id=com.jcode.rpssimulator">Google Play</a>.
				</p>
				<p>
					Just like my other programs, here are some screen caps and videos of the app running on my computer. Fun Fact! Since this app doesn't use anything for filesystems to store
					settings or anything of that matter <sup>yet</sup>, the code is <i>technically</i> closer to its respective app than Snake is; A difference of around 5 compared to about 
					10 lines.
				</p>

				<div id="rpsscreencaps" class="jcodeprojscreencaps">
					<img src="Images/projects/RPS/mainmenu.png" />
					<img src="Images/projects/RPS/playmenu.png" />
					<img src="Images/projects/RPS/simplemenu.png" />
				</div>
				<div class="jcodeprojvideo">
					<div>
						<h3>This video is me running the simulation with default settings</h3>
						<video class="jtimg" controls>
							<source src="Media/playingrps.mp4" type="video/mp4">
						</video>
					</div>
					<div>
						<h3>This video is me running a simulation with the team size set to the max value. I arbitrarily set the limit to 2000 and will probably change it in the future.
						</h3>
						<video class="jtimg" controls>	
							<source src="Media/playingrps2000.mp4" type="video/mp4">
						</video>
					</div>
				</div>
			</div>
		</div>
	`;
}
// Applications
function Load_NewTerraImperia() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>New Terria Imperia</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					New Terra Imperia is a C++ powered version of <a href="Legacy/TerraImperia1/index.html">this</a> poorly organized 2D web application I made in high school; First called 
					<i>Sprite Fight</i> then later called <i>Terria Imperia</i>. I improved the structure of it with an <a href="Legacy/TerraImperia2/index.html">updated</a> version where 
					I at least attemped to provide templates for the objects in it. The HTML versions are essentially the same as the C++ since updates stopped very early on, so checking those 
					out are about the same. I am fairly proud of myself for the combo system that exists in the updated version; You can see the players combos by pressing the escape key. 
					Somewhere in the code exists a really simple disabled AI but it's an old project that I don't have much interest in fixing anything anytime soon. If you check either of 
					them out, the only functional part of it is Versus => PvP. Player 1 used wasd to control and F/G keys as A/B buttons, Player 2 uses the arrow keys for control and K/L 
					for A/B buttons. Press the return key to start the game. I also created a NodeJS version of it that was as semi-functional as the normal pages which will probably also 
					not see any revisions in the future due to it's age. 
				</p>
				<p>
					I stopped working on New Terria Imperia to continue working on a C++ header api I called <i>Window.h</i> at the time that I later developed into <a onclick="Load_JScene()">JScene</a> for JCode.
				</p>
			</div>
		</div>
	`;
}
function Load_PolyInput() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>PolyInput</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					After I got <a onclick=Load_DualOS() >DualOS</a> to work on my computer, it was fairly inconvenient to 
					use two sets of keyboards and mice to control each screen so I created this project. Polyinput is pretty much a virtual keyboard and mouse that 
					would run on my Windows 10 machine controlled on my Debian machine. You could slide your mouse from one screen to the other directly or press ctrl 
					three times to switch between operating systems. I managed to get PolyInput ~90% working (input was finicky infrequently) but I ended up switching 
					to using Debian only so I put the project on hold. Since then I've replaced my motherboard and hard drives so I can't provide any videos of the 
					working project. Setting this all up again is higher up on my list of TODO's so this page will be updated soon.
				</p>
			</div>
		</div>
	`;
}
function Load_Lelantos() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>Lelantos</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					Lelantos is a Window's C++ application that I made to prevent access to specific directories/folders on a Windows computer. I made application into 2 different 
					versions. The first being a terminal based application and the second, cleverly named <i>Lelantos v2.0 Beta</i>, GUI based application of the same thing. This 
					project is when I first found SDL after searching for a way to create 2D games; It's powered by the very first <i>Window.h</i> C++ header I made. I don't have 
					any plans to revise the project currently but if that changes you'll see here. 
				</p>

				<div class="jcodeprojscreencaps">
					<h4>I added a folder to my desktop and put a text file in it</h4>
					<img src="Images/projects/Lelantos/secrets.png"><br>

					<h4 style="padding:0;margin-bottom:2px;">Adding the folder to the program</h4>
					<img src="Images/projects/Lelantos/emptymenu.png">
					<img src="Images/projects/Lelantos/adddir.png">
					<img src="Images/projects/Lelantos/addedsecret.png">
					<img src="Images/projects/Lelantos/editdir.png">
					<img src="Images/projects/Lelantos/editmenu.png">
				</div>
				
				<div class="jcodeprojvideo">
					<h3 style="margin:0;">Brief video of me using Lelantos</h3>

					<video class="jtimg" controls>
						<source src="Media/LelantosDemo.mkv">
					</video>
				</div>
			</div>
		</div>
	`;
}
function Load_Aura() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>Aura</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					Aura is an AI that I made to perform tasks for me on my computer using my voice on Windows. By the time I finished Aura the commands themselves worked fairly 
					well but I hit a roadblock of sorts between the microphone I was using and the settings for mic adjustment so commands don't always run as efficiently as they 
					should. Recompiling Aura so I could take a video was fairly difficult but everything worked well enough to demonstrate. The only command that didn't work 100% 
					was clicking links on a page; The tool and the code I used to pick links on a page ran but refused to open them and I don't want to debug it right now. The 
					other still-functional commands included searching Google/Youtube, selecting windows, videos - fullscreen/pause/play, and locking the computer. I will definitely 
					be updating Aura in the future, perhaps repurposed as a different application.
				</p>

				<div class="jcodeprojvideo" >
					<h4 style="padding:0;margin-bottom:2px;">Brief video of me using Aura</h4>

					<h5 style="padding:0;margin-bottom:2px;">I'm too shy to have my voice on here so Aura prints what I say to the console. Also Aura automatically 
					puts the window it's using into focus so I have to keep readjusting in order to show the console</h5>

					<video class="jtimg" controls>
						<source src="Media/AuraDemo.mkv">
					</video>
				</div>
			</div>
		</div>
	`;
}
/*function Load_SlideController() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>Slide Controller</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					This project I made is <i>very</i> underdeveloped but I'm adding it to the list because it might be relevant with future project of mine. The 
					project currently consists of an old slider phone (Samsung M920) that I wanted to turn into a wireless keyboard/controller. It wouldn't be as 
					underdeveloped as it is if the phone wasn't running Android 2.1. I easily spent at least 100 hours just getting the application to compile 
					for the phone. Even after creating a template that would work for it, the phone will only accept the app when <i>it</i> wants to and I've tried close to 
					everything to fix this. The app was successfully able to send key presses to a JNetworkServer I threw together on my main computer but by this 
					time it was starting to be more difficult and I was losing patience. I'll revisit this project when either I regain enough patience to deal with 
					the phone again or end up buying/obtaining another slider phone. 
				</p>
				<p>
					All the code I used still works on a regular, modern android phones so it's possible I'll continue the project targeted for those but it wouldn't be 
					a <i>Slide Controller</i>; But at the point I might as well revise the entire thing to be power entirely by JCode - Maybe make Java port. 
				</p>
			</div>
		</div>
	`;
}*/
// Other Projects
function Load_MyComputers() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>Personal Computers</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					I own a few different computers, all expect the laptops were built by me. All of them (except the RaspberryPi) either dual boot 
					or can run Linux and Windows.
				</p>

				<div class="mycomps" id="compmainpc"> 
					<div>
						<h2>Main computer</h2>
						
						<p>
							I use this computer for most of my development. It's the 3rd computer I've built myself. It also has an older NZXT liquid 
							cooler that got my old AMD FX-8350 to 3 degrees celsius idle.
						</p>
						
						<h5>[CPU]</h5>
						<h3>AMD Ryzen 7 3700X</h3>

						<h5>[GPU]</h5>
						<h3>AMD Radeon R9 Gaming 4GB, AMD Radeon RX 550 2GB</h3>

						<h5>[RAM]</h5>
						<h3>16GB DDR4 3200 MHz</h3>

						<h5>[Motherboard]</h5>
						<h3>AMD/ASUS ROG Strix B450-F Gaming II</h3>
					</div>

					<img class="compimg" src="Images/projects/Computers/main.jpg" />
				</div>

				<div class="mycomps" id="compminipc">
					<div>
						<h2>Mini PC</h2>

						<p>
							This is the second computer I built. I originally built it for retro gaming rig to play PS2 and GameCube games 
							I used to play as a kid. The specs are decent enough to still handle most of my personal tasks; Additionally its 
							<i>way</i> easier to move around than my main computer.
						</p>

						<h5>[CPU]</h5>
						<h3>AMD Ryzen 5 2400G</h3>

						<h5>[GPU]</h5>
						<h3>AMD Radeon RX 550 2GB</h3>

						<h5>[RAM]</h5>
						<h3>8GB DDR4 3000 MHz</h3>

						<h5>[Motherboard]</h5>
						<h3>AMD/MSI B450I Gaming Plus AC Mini-ITX</h3>
					</div>

					<img class="compimg" src="Images/projects/Computers/mini.jpg" />
				</div>

				<div class="mycomps" id="compdatapc">
					<div>
						<h2>Project PC</h2>

						<p>
							The parts in the computer were used in the original desktop that I built expect the cooler. The cooler 
							originally came stock with my AMD Ryzen 7 3700X. I plan to use it for a couple things: 1.) To transfer 
							and store backups from my devices either for my local network or offline. 2.) Test random computer 
							stuff that I think might be fun.
						<p>

						<h5>[CPU]</h5>
						<h3>AMD FX-8350</h3>

						<h5>[GPU]</h5>
						<h3>(3) AMD RX 550 2GB</h3>
						
						<h5>[RAM]</h5>
						<h3>8GB GDDR3 1333 MHz</h3>

						<h5>[Motherboard]</h5>
						<h3>AMD/ASUS M5A99FX Pro R2.0</h3>
					</div>

					<img class="compimg" src="Images/projects/Computers/project.jpg" />
				</div>

				<div class="mycomps" id="complaptop">
					<div>
						<h2>Laptop</h2>

						<p>
							I recently bought this laptop as an upgrade from my <i>very</i> slow laptop. The only negative from switching 
							is that I haven't figured out dual booting with it yet. I have Debian installed but without a desktop environment 
							Since the graphics card is Nvidia, and a laptop one at that, debugging graphics has been way harder than it was 
							with AMD. I can still use my Kali live boot if I need to use Linux on it.
						</p>

						<h5>[CPU]</h5>
						<h3>Intel i7-10875H</h3>

						<h5>[GPU]</h5>
						<h3>Nvidia GeForce RTX 2080 SUPER Max-Q</h3>
						
						<h5>[RAM]</h5>
						<h3>16GB DDR4 SDRAM 2933 MHz</h3>

						<h5>[Motherboard]</h5>
						<h3>AMD/ASUS M5A99FX Pro R2.0</h3>
					</div>

					<img class="compimg" src="Images/projects/Computers/laptop.jpg" />
				</div>

				<div class="mycomps" id="comprasberrypi">
					<div>
						<h2>Raspberry Pi 3 Model B V1.2</h2>

						<p>
							I run my DNS server off of my Raspberry Pi on my local network but currently it's off. I plan to use 
							it for various other things soon.
						</p>
					</div>

					<img class="compimg" src="Images/projects/Computers/raspberrypi.jpg" />
				</div>
			</div>
		</div>
	`;
}
function Load_DualOS() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>DualOS</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					This project is a <a href="https://wiki.debian.org/VGAPassthrough">VGAPassthrough</a> that I implemented on my personal computer. As I stated on the
					<a onclick="NavButtonClick('ABOUT')">about page</a> it was much more difficult to setup then the page might imply. I originally did this with the 
					parts in my <a onclick="Load_MyComputers()">Project PC</a> but have since upgraded to new parts and haven't bothered to set up again on my main computer 
					since I use Debian 99% of the time day-to-day. I will update this page when I set it up on my ProjectPC including how it was set up.
				</p>
			</div>
		</div>
	`;
}

function LinkTo_Override() {
	resizeHandler = null;
	keyDownHandle = null,
	keyUpHandle = null;
	scrollHandler = null;
	CURRENTPAGE = "PROJECTS";
}
function LinkTo_Lelantos() {
	LinkTo_Override();
	Load_Lelantos();
}
function LinkTo_Aura() {
	LinkTo_Override();
	Load_Aura();
}
function LinkTo_JScene() {
	LinkTo_Override();
	Load_JScene();
}
function LinkTo_JNetwork() {
	LinkTo_Override();
	Load_JNetwork();
}
function LinkTo_JCrypt() {
	LinkTo_Override();
	Load_JCrypt();
}
function LinkTo_JCam() {
	LinkTo_Override();
	Load_JCam();
}