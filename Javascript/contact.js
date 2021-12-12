//
// Made By Jordan Hoosman
//

//
// DEVELOPER NOTE: 
// 		> I hate JavaScript
// 		> Send help
// 		> "This would be easier in C++" - A   c o r r e c t   thought I had
//

var contact_data = [
	{
		type: "Email:",
		val: "jordanhoosman@gmail.com",
		cipher: "",
		link: null
	},
	{
		type: "GitHub:", 
		val: "github.com/Mr-Timn",
		cipher: "",
		link: "https://github.com/Mr-Timn"
	},
	{
		type: "LinkedIn:", 
		val: "linkedin.com/in/jordan-hoosman-981035203/",
		cipher: "",
		link: "https://linkedin.com/in/jordan-hoosman-981035203/"
	}

];

function CONTACT_PAGE_LOAD() {
	//console.log("Loading contact page");
	
	pageContent.innerHTML += `
		<div id="ContactInfo"></div>
	`;

	Contact_CipherText();
}
function CONTACT_PAGE_UNLOAD() {
	//console.log("Unloading contact page");

	Contact_RemoveText();

	pageUnloadTimer = 2250;
}

function Contact_CipherText() {
	var contactinfo = document.getElementById("ContactInfo");

	for (var i = 0; i < contact_data.length; i++) {
		contact_data[i].cipher = RandomText(contact_data[i].val);
		
		contactinfo.innerHTML += `
			<div class="contact">
				<h1 id="contacttitle` + i + `"><u>` + contact_data[i].type + `</u></h1>
				<h2 id="contactdata` + i + `">` + contact_data[i].cipher + `</h2>
			</div>
		`;
	}
   
	var ctick = 12;
	var cdatai = 0;
	var cdataj = 0;
	var cdatam = 0;
	var cdelaytimer = 0;
	var cdelay = false;
	var cpy = contact_data[cdatai].cipher;
	
	for (var i = 0; i < contact_data.length; i++) cdelaytimer += ctick * contact_data[i].val.length;
	setTimeout(function() { cdelay = false; }, (cdelaytimer + 500) * 1);

	var cipherhandle = setInterval(() => {	
		if (!cdelay) { 
			var cdata = document.getElementById("contactdata" + cdatai);
			
			if (cdatam == 0) {
				cpy = (cpy.substring(0, cdataj - 1) + RandomLetter() + cpy.substring(cdataj));
				cdata.innerHTML = cpy;
			} else if (cdatam == 1) {
				cpy = contact_data[cdatai].cipher.substring(0, cdataj) + contact_data[cdatai].val.substring(cdataj);
				cdata.innerHTML = cpy;
			} else {
				clearInterval(cipherhandle);
			}

			if (cdatam == 0 && ((cdataj += 1) > contact_data[cdatai].val.length + 1)) {
				if ((cdatai += 1) >= contact_data.length) {
					cdatai = 0;
					cdataj = contact_data[cdatai].val.length;
					cdatam++;
					cdelay = true;
				} else {
					cdataj = 0;
				}

				cpy = contact_data[cdatai].cipher;
			} else if (cdatam == 1 && (cdataj -= 1) < 0) {
				cdata.innerHTML = (
					contact_data[cdatai].link == null ? `` : `<a href="` + contact_data[cdatai].link + `">`) 
					+ (contact_data[cdatai].val) 
					+ (contact_data[cdatai].link == null ? `` : `</a>`
				);

				if ((cdatai += 1) >= contact_data.length) {
					cdatai = 0;
					cdataj = 0;
					cdatam++;
				} else {
					cdataj = contact_data[cdatai].val.length;
				}

				cpy = contact_data[cdatai].val;
			}
		}
	}, ctick);
}
function Contact_RemoveText() {
	var ctick = 10;
	var cdatai = contact_data.length - 1;
	var cdataj = contact_data[cdatai].cipher.length - 1;
	var cdatam = 0;
	var cpy = contact_data[cdatai].cipher;
	
	var cipherhandle = setInterval(() => {	
		var cdata = document.getElementById("contactdata" + cdatai);
		var ctitle = document.getElementById("contacttitle" + cdatai);

		if (cdatam == 0) {
			cpy = (cpy.substring(0, cdataj - 1) + RandomLetter() + cpy.substring(cdataj));
			cdata.innerHTML = cpy;
		} else if (cdatam == 1) {
			cpy = contact_data[cdatai].cipher.substring(0, cdataj);
			cdata.innerHTML = cpy;
		} else {
			clearInterval(cipherhandle);
		}

		if (cdatam == 0 && ((cdataj -= 1) < 0)) {
			if ((cdatai -= 1) < 0) {
				cdatai = contact_data.length - 1;
				cdataj = contact_data[cdatai].val.length;
				cdatam++;
			} else {
				cdataj = contact_data[cdatai].val.length;
			}

			cpy = contact_data[cdatai].cipher;
		} else if (cdatam == 1 && (cdataj -= 1) < 0) {
			if ((cdatai -= 1) < 0) {
				cdatai = 0;
				cdataj = 0;
				cdatam++;	
			} else {
				cdataj = contact_data[cdatai].val.length;
			}
			
			ctitle.innerHTML = "";
			cpy = contact_data[cdatai].val;
		}
	}, ctick);
}