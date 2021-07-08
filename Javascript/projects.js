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
		<div id="ThisPageIsntGoingToBeInterestingBecauseImTiredOfDealingWithJavaScriptToPerformIterativeBasedTasks">
		<div id="ProjectList">
			<div class="Project" id="ProjectsJCode">
				<h1>JCode</h1>

				<div class="JCodeBox" id="JCodeLibraries">
					<div class="ProjectLinks JCodeBox2">
						<h2><u>JCode - Libraries</u></h3>
						<h3 onclick="Load_JScene()">JScene</h3>
						<h3 onclick="Load_JCrypt()">JCrypt</h3>
						<h3 onclick="Load_JRelay()">JRelay</h3>
						<h3 onclick="Load_JNumbers()">JNumbers</h3>
					</div>
				</div>
				<div class="JCodeBox" id="JCodeProjects">
					<div class="ProjectLinks JCodeBox2">
						<h2><u>JCode - Projects</u></h2>
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
					it with the other parts of the engine in JCode (JRelay/JNumbers) and haven't offically decided to include the game engine with it. 
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
					JCrypt is an cryptography API I made for encrypting/decrypting data with various modern or simple (a)symmetric cryptographic functions. All encryptions except 
					ones used for key exchanging can be used in layered cycles for additional security.
				</p>
				<p>
					For simple encryptions it has reverse, rotate right, rotate left, Ceasear cipher, and Vignere cipher. Here is a screenshot from a simple program, also used 
					below, encrypting and decrypting the same message using a randomly generated key.
				</p>
				<img src="Images/projects/JCrypt/simpleexample.png"/>
				<p>
					For modern encryptions, JCrypt can encrypt and decrypt using both AES128 and AES256. Both are implemented using the AES-NI instruction set for modern Intel 
					and AMD processors which <i>significantly</i> improves performance.
				</p>
				<img src="Images/projects/JCrypt/aesexample.png"/>
				<p>
					For modern key exchange encryption, JCrypt can use both RSA and Diffie-Hellman standards. Both can be used for encrypting and decrypting any individual message 
					but due to the slower nature and practicality neither of them are not included in the general encryption structure like the examples above but can implemented 
					easily for handshakes using their respective generate keys, encrypt, and decrypt functions. Both examples generate a 2048 bit key. Diffie-Hellman is unable to 
					directly encrypt messages so the program generates all keys and calculates the shared secret using each respective key set.
				</p>
				<img src="Images/projects/JCrypt/rsaexample1.png"/>
				<img src="Images/projects/JCrypt/rsaexample2.png"/>
				<img src="Images/projects/JCrypt/rsaexample3.png"/><br>
				<img src="Images/projects/JCrypt/dhexample1.png"/><br>
				<img src="Images/projects/JCrypt/dhexample2.png"/>
			</div>
		</div>
	`;
}
function Load_JRelay() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>JRelay</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					JRelay is a networking API that I made as part of JCode to handle all of the networking done with the projects I make. It's broken down into a few different parts so 
					that I can quickly create simple applications or easily implement other types of socket communication like bluetooth, which I intended to implement later. The flowchart 
					for JCode can be shown in a screenshot from one of the Makefiles for I use for building: 
				</p>
				<img src="Images/projects/JRelay/JCodeStructure.png" width="500px" height="200px">
				<p>
					JSecure, currently the main focus of development right now, currently works 100% with Linux, 100% minus AES works for Android because I need to implement it for ARM 
					processors, and somewhat on Windows. Windows will compile and run, clients even connect initially, but it refuses to continue (without errors which is frustrating). This 
					should be fixed soon.
				</p>
				<p>
					JNetwork is the head namespace for JRelay (e.g. JCode::Network) and currently just contains the structures for data 
					packaging and caching.
				</p>
				<p>
					JSocket resides within the Network namespace and contains all the handling for socket implementation. TCP and broadcast 
					socket types are currently usable implementations. For all types of socket communication, sending, recveiving, and broadcating data are available. Data handled via typical 
					methods e.g. blocked and timed or through polling. Additionally I've added other LAN functions for getting IP addresses/interfaces and port scanning. Port scanning has been 
					implemented in 2 ways - One normal, timeout based scanning and a TCP-SYN scan similiar to nmap which is considerably faster but requires admin privileges.
				</p>
				<p>
					JClient and JServer are TCP implementations using JSocket with function hooks for additional implemetation on top of 
					each. For clients it handles safely connecting, disconnecting, sending/receiving data. For servers it handles safely starting, closing, restarting, sending/receiving data 
					and setting passwords.
				</p>
				<p>
					JSecure is a higher level implementation using <a onclick="Load_JCrypt()">JCrypt</a> and JSocket(Client/Server). Using 
					the hooks as described in JClient/JServer it combines the two API to connect and communicate securely.
				</p>
			</div>

			<!-- Update 1
			<div id="ProjectInfo">
				<p>
					JRelay is a network application interface written C++ to try and make easier most of the communication when trying to integrate sockets in an application. It has 
					currently 2 parts - JRelayServer and JRelayClient, which when used together it allows for easy setup and use. This includes things like password locked servers 
					to prevent unwanted connections and additional levels of security when attempting communication. Currently it has reverse, caesar, and vignere ciphers functional and 
					can be arranged in many way. I have plans for implementing RSA and Diffie-Hellman for key exchanges and AES for additional security very soon. They'll be implemented 
					once prime number generation is improved in JNumbers. Longer term planning for JRelay would include bluetooth support. 
				</p>
				<p>
					There isn't much else to say about JRelay. Once integration with JNumbers and updated documentation is started the page will start to fill out more. Check 
					out <a onclick="Load_JTransmission()">JTransmission</a> for an application using JRelay. I've detailed most of it's usage there with examples. 
				</p>
			</div>
			--!>
		</div>
	`;
}
function Load_JNumbers() {
	pageContent.innerHTML = `
		<div id="ProjectDescription">
			<div id="ProjectTitle">
				` + Projects_leftarrow + `
				<h1>JNumbers</h1>
			</div>
			<div id="ProjectInfo">
				<p>
					Project update: While working on operation benchmarks I reconsidered how long it would take to fully implement secure prime number generation. I 
					imagine it would have taken me around a month to do so; Up to 3 months at the max. I decided like would like to move on with the rest engine so 
					I took another attempt at integrating <a href="https://gmplib.org/">GMP</a> into <a onclick="Load_JRelay()">JRelay</a> which was successful. I'm 
					still keeping this part of the engine mostly for legacy reasons. As a final benchmark I generated 2 random 65536-bit 
					(0 - <a href="https://sites.google.com/site/largenumbers/home/appendix/a/numbers/265536">A very big number</a>) numbers 
					and multiplied them; I ran this 3 times and the operation took 37 seconds each time, using around 6% of my cpu. 
				</p>
				<p>
					JNumbers is a large number library I created because I was unable to find a sufficent large number library that would work with my future projects 
					in C++. Since speed is a <i>huge</i> part of my goal with this engine it was very important I find something that can be integrated well. This part
					of the enigine still needs a <i>lot</i> of work. At the time of writing, JNumbers does work for infinitely long numbers in a resonable amount of time. 
					Like most programe it's perfromance depends a lot on the speed of your CPU. It can perform the arithmetic operations of addition, subtraction, 
					multiplication, division, modulus, power, and modular exponentiation.
				</p>
				<p>
					Some of the operations in JNumbers aren't optimized completly yet. All individual operations work fast enough for individual problems but isn't good 
					with generating prime numbers over around 32-bits; I have plans to address this very soon as the rest of the engine reaches it's functionality. I have 
					Karatsuba's implemented algorithm is alongside regular multiplication without any benchmarks yet; For the same reason that this 
					project is still in very early development, around a month or so old. 
				</p>
				<div id="JNumbersExample">
					<p>
						Here are are results from an example program and the screenshot they come from. The hexadecimal value is passed for calculation since it's the 
						quickest to convert to a usable value. It would be fairly annoying to check the results by hand so if you want to verify you can go 
						<a href="https://defuse.ca/big-number-calculator.htm">here</a>. I used a few websites to verify myself but this one was my favorite.
					</p>
					<div class="jnum_numdesc" id="JNumbersX">
						<p>
							<span class="jnum_numtitle"><u>Number 1 - X </u></span><br>
							
							<span class="jnum_color1">
								decimal<br>
							</span>
							<span class="jnum_color2">
								30,530,225,201,270,325,642,673,571,406,886,226,295,708,472,183,571,229,762,978,352,739,922,477,631,805,867,692,603<br>
							</span>

							<span class="jnum_color1">
								binary<br>
							</span>
							<span class="jnum_color2">
								_00001111101101110011001000101010_11011100111110000011101111011110<br>
								_00000010001110000000000101000111_01011000001101000001001100010000<br>
								_00101001001110001001010010000010_00010001001110110111101011011110<br>
								_11100111001101001011100100000001_00111011110111000101000110100011<br>
								_10000000001101000001001000111011<br>
							</span>

							<span class="jnum_color1">
								hexadecimal<br>
							</span>
							<span class="jnum_color2">
								FB7322A_DCF83BDE_02380147_58341310_29389482_113B7ADE_E734B901_3BDC51A3_8034123B<br>
							</span>
						</p>
					</div>
					<div class="jnum_numdesc" id="JNumbersY">
						<p>
							<span class="jnum_numtitle"><u>Number 2 - Y</u></span><br>
							
							<span class="jnum_color1">
								decimal<br>
							</span>
							<span class="jnum_color2">
								7,540,637,272,735,664,498,083,352,288,605,487,941,544,425,828,557,361,380,833,463,371,435,029,233,463<br>
							</span>
							
							<span class="jnum_color1">
								hexadecimal<br>
							</span>
							<span class="jnum_color2">
								10ABD975_8576814D_034E63EE_FA1785CB_063478DE_A5630475_63DC2185_6ADEFF37<br>
							</span>
							
							<span class="jnum_color1">
								binary<br>
							</span>
							<span class="jnum_color2">
								_00010000101010111101100101110101_10000101011101101000000101001101<br>
								_00000011010011100110001111101110_11111010000101111000010111001011<br>
								_00000110001101000111100011011110_10100101011000110000010001110101<br>
								_01100011110111000010000110000101_01101010110111101111111100110111<br>
							</span>
						</p>
					</div>
					<div id="jnum_results">
						
					</div>
					<img src="Images/projects/JNumbers/jnumbersexample.png" width="100%"/>
				</div>
			</div>
		</div>
	`;
	
	var jnum_res = [
		{
			ope: "X + Y",
			bin: "1111101101110011001000101010_11101101101001000001010101010011_10000111101011101000001010010100_01011011100000100111011011111111_00100011010100000001101001001101_00010111011011111111001110111101_10001100100101111011110101110110_10011111101110000111001100101000_11101011000100110001000101110010",
			hex: "FB7322A_EDA41553_87AE8294_5B8276FF_23501A4D_176FF3BD_8C97BD76_9FB87328_EB131172",
			dec: "30,530,225,208,810,962,915,409,235,904,969,578,584,313,960,125,115,655,591,535,714,120,755,941,003,240,896,926,066",
			nam: `
				thirty septenvigintillion, 
				five hundred thirty sexvigintillion, 
				two hundred twenty-five quinvigintillion, 
				two hundred one quattuorvigintillion, 
				two hundred seventy trevigintillion, 
				three hundred twenty-five duovigintillion, 
				six hundred forty-two unvigintillion, 
				six hundred seventy-three vigintillion, 
				five hundred seventy-one novemdecillion, 
				four hundred six octodecillion, 
				eight hundred eighty-six septendecillion, 
				two hundred twenty-six sexdecillion, 
				two hundred ninety-five quindecillion, 
				seven hundred eight quattuordecillion, 
				four hundred seventy-two tredecillion, 
				one hundred eighty-three duodecillion, 
				five hundred seventy-one undecillion, 
				two hundred twenty-nine decillion, 
				seven hundred sixty-two nonillion, 
				nine hundred seventy-eight octillion, 
				three hundred fifty-two septillion, 
				seven hundred thirty-nine sextillion, 
				nine hundred twenty-two quintillion, 
				four hundred seventy-seven quadrillion, 
				six hundred thirty-one trillion, 
				eight hundred five billion, 
				eight hundred sixty-seven million, 
				six hundred ninety-two thousand, 
				six hundred three`
		},
		{
			ope: "X - Y",
			bin: "1111101101110011001000101010_11001100010011000110001001101000_01111100110000010111111111111010_01010100111001011010111100100001_00101111001000010000111010110111_00001011000001110000001000000000_01000001110100011011010010001011_11011000000000000011000000011110_00010101010101010001001100000100",
			hex: "FB7322A_CC4C6268_7CC17FFA_54E5AF21_2F210EB7_0B070200_41D1B48B_D800301E_15551304",
			dec: "3,053,022,519,372,968,836,993,790,690,880,287,400,710,298,424,202,680,393,442,099,135,908,901,426,037,083,845,9140",
			nam: `
				thirty septenvigintillion, 
				five hundred thirty sexvigintillion, 
				two hundred twenty-five quinvigintillion, 
				one hundred ninety-three quattuorvigintillion, 
				seven hundred twenty-nine trevigintillion, 
				six hundred eighty-eight duovigintillion, 
				three hundred sixty-nine unvigintillion, 
				nine hundred thirty-seven vigintillion, 
				nine hundred six novemdecillion, 
				nine hundred eight octodecillion, 
				eight hundred two septendecillion, 
				eight hundred seventy-four sexdecillion, 
				seven quindecillion, 
				one hundred two quattuordecillion, 
				nine hundred eighty-four tredecillion, 
				two hundred forty-two duodecillion, 
				twenty-six undecillion, 
				eight hundred three decillion, 
				nine hundred thirty-four nonillion, 
				four hundred twenty octillion, 
				nine hundred ninety-one septillion, 
				three hundred fifty-nine sextillion, 
				eighty-nine quintillion, 
				fourteen quadrillion, 
				two hundred sixty trillion, 
				three hundred seventy billion, 
				eight hundred thirty-eight million, 
				four hundred fifty-nine thousand, 
				one hundred forty 
			`
		},
		{
			ope: "X * Y",
			bin: "1000001011111111111011010_10110000111000101101001111100100_10110100110001011111111100100011_10010110111000100000011100000110_00000100011111000011010011101010_00100010101001010000110001011101_01110101010111010001011111010001_11001010110011101110000011001010_00100010100100011110110101110110_00111100111111110010100111100111_00100001101111111011011110100011_11111110000110100100100000000100_10101011010111110011100000000100_10011010001010100010011010001111_10000001011100000010101011111100_10011101101000010011011100101111_10100110100000101010111110101101",
			hex: "105FFDA_B0E2D3E4_B4C5FF23_96E20706_047C34EA_22A50C5D_755D17D1_CACEE0CA_2291ED76_3CFF29E7_21BFB7A3_FE1A4804_AB5F3804_9A2A268F_81702AFC_9DA1372F_A682AFAD",
			dec: "23,021,735,409,771,272,208,778,593,349,850,056,111,658,674,422,748,091,452,974,808,723,626,303,090,554,683,133,032,618,155,742,735,738,315,130,139,7,735,292,060,400,886,513,518,540,419,005,158,315,451,679,605,174,189",
			nam: `
				two hundred thirty duoquinquagintillion, 
				two hundred seventeen unquinquagintillion, 
				three hundred fifty-four quinquagintillion, 
				ninety-seven novemquadragintillion, 
				seven hundred twelve octoquadragintillion, 
				seven hundred twenty-two septenquadragintillion, 
				eighty-seven sexquadragintillion, 
				seven hundred eighty-five quinquadragintillion, 
				nine hundred thirty-three quattuorquadragintillion, 
				four hundred ninety-eight trequadragintillion, 
				five hundred  duoquadragintillion, 
				five hundred sixty-one unquadragintillion, 
				one hundred sixteen quadragintillion, 
				five hundred eighty-six novemtrigintillion, 
				seven hundred forty-four octotrigintillion, 
				two hundred twenty-seven septentrigintillion, 
				four hundred eighty sextrigintillion, 
				nine hundred fourteen quintrigintillion, 
				five hundred twenty-nine quattuortrigintillion, 
				seven hundred forty-eight tretrigintillion, 
				eighty-seven duotrigintillion, 
				two hundred thirty-six untrigintillion, 
				two hundred sixty-three trigintillion, 
				thirty novemvigintillion, 
				nine hundred five octovigintillion, 
				five hundred forty-six septenvigintillion, 
				eight hundred thirty-one sexvigintillion, 
				three hundred thirty quinvigintillion, 
				three hundred twenty-six quattuorvigintillion, 
				one hundred eighty-one trevigintillion, 
				five hundred fifty-seven duovigintillion, 
				four hundred twenty-seven unvigintillion, 
				three hundred fifty-seven vigintillion, 
				three hundred eighty-three novemdecillion, 
				one hundred fifty-one octodecillion, 
				three hundred one septendecillion, 
				three hundred ninety-seven sexdecillion, 
				seven hundred thirty-five quindecillion, 
				two hundred ninety-two quattuordecillion, 
				sixty tredecillion, 
				four hundred  duodecillion, 
				eight hundred eighty-six undecillion, 
				five hundred thirteen decillion, 
				five hundred eighteen nonillion, 
				five hundred forty octillion, 
				four hundred nineteen septillion, 
				five sextillion, 
				one hundred fifty-eight quintillion, 
				three hundred fifteen quadrillion, 
				four hundred fifty-one trillion, 
				six hundred seventy-nine billion, 
				six hundred five million, 
				one hundred seventy-four thousand, 
				one hundred eighty-nine 
			`
		},
		{
			ope: "X / Y",
			bin: "11110001010100110010100111111000",
			hex: "_F15329F8",
			dec: "4,048,759,288",
			nam: `
				four billion, 
				forty-eight million, 
				seven hundred fifty-nine thousand, 
				two hundred eighty-eight 
			`
		},
		{
			ope: "X % Y",
			bin: "1100111010101110101001111111_01010000101000001000101010100110_00110110010101101100001011101011_10011100010101110000101100001000_11011101001010001110010001100100_11011110011111111111111001011100_11000101010111111110010110110110_10111011011110000000010111110011",
			hex: "CEAEA7F_50A08AA6_3656C2EB_9C570B08_DD28E464_DE7FFE5C_C55FE5B6_BB7805F3",
			dec: "5,842,814,837,206,740,630,218,700,424,608,477,045,572,517,231,556,362,733,617,109,134,271,026,038,259",
			nam: `
				five quattuorvigintillion, 
				eight hundred forty-two trevigintillion, 
				eight hundred fourteen duovigintillion, 
				eight hundred thirty-seven unvigintillion, 
				two hundred six vigintillion, 
				seven hundred forty novemdecillion, 
				six hundred thirty octodecillion, 
				two hundred eighteen septendecillion, 
				seven hundred  sexdecillion, 
				four hundred twenty-four quindecillion, 
				six hundred eight quattuordecillion, 
				four hundred seventy-seven tredecillion, 
				forty-five duodecillion, 
				five hundred seventy-two undecillion, 
				five hundred seventeen decillion, 
				two hundred thirty-one nonillion, 
				five hundred fifty-six octillion, 
				three hundred sixty-two septillion, 
				seven hundred thirty-three sextillion, 
				six hundred seventeen quintillion, 
				one hundred nine quadrillion, 
				one hundred thirty-four trillion, 
				two hundred seventy-one billion, 
				twenty-six million, 
				thirty-eight thousand, 
				two hundred fifty-nine 
			`
		}
	]
	var jres = document.getElementById("jnum_results");
	for (var i = 0; i < jnum_res.length; i++) {
		jres.innerHTML += `
		<div class="jnum_numdesc" style="width:calc(90% + 10px);">
			<p>
				<span class="jnum_numtitle">` + jnum_res[i].ope + `</span><br>
				
				<span class="jnum_color1">Value<br></span> 
				<span class="jnum_color2">` + jnum_res[i].dec + `<br></span>
				
				<span class="jnum_color1">Name<br></span>
				<span class="jnum_color2">` + jnum_res[i].nam + `<br></span>
				
				<span class="jnum_color1">Binary<br></span>
				<span class="jnum_color2">` + jnum_res[i].bin + `<br></span>

				<span class="jnum_color1">Hexadecimal<br></span>
				<span class="jnum_color2">` + jnum_res[i].hex + `<br></span>
			</p>
		</div>
		`;
	}
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
					doesn't currently have any plans for updates outside of testing the security sent information through <a onclick="Load_JRelay()">JRelay</a>. 
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
				neworking/threading doesn't function as well on android using JRelay with large sets of communication; At least with my Samsung Note 4 dispite using mostly poll based sockets. As 
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
function Load_SlideController() {
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
					everything to fix this. The app was successfully able to send key presses to a JRelayServer I threw together on my main computer but by this 
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
}
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
							cooler that got my old AMD FX-8350 to 3 degrees celsius idle at times.
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
function LinkTo_JRelay() {
	LinkTo_Override();
	Load_JRelay();
}
function LinkTo_JNumbers() {
	LinkTo_Override();
	LinkTo_JNumbers();
}