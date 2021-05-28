

function resetGame(){
	playing = false;
	currentChar = 0;
	selectedChar = "Luffy";
	currentPlr1 = "nothing";
	currentPlr2 = "nothing";
}

function returnKeyValue(key){
	var letters = "abcdefghijklmnopqrstuvwxyz".split("");
	for (var i = 0; i < letters.length; i++){ if (i+65 == key){ return letters[i]; } }
	var numbers = "0123456789".split("");
	for (var i = 0; i < numbers.length; i++){ if (i+48 == key){ return numbers[i]; } }
	switch(key){
		case 32: return "space"; break;
		case 37: return "\u21e6"; break;
		case 38: return "\u21e7"; break;
		case 39: return "\u21e8"; break;
		case 40: return "\u21e9"; break;
		case 96: return "numpad0"; break;
		case 97: return "numpad1"; break;
		case 98: return "numpad2"; break;
		case 99: return "numpad3"; break;
		case 100: return "numpad4"; break;
		case 101: return "numpad5"; break;
		case 102: return "numpad6"; break;
		case 103: return "numpad7"; break;
		case 103: return "numpad8"; break;
		case 103: return "numpad9"; break;
		default: break;
	}
}
	
function getKeyCode(l){
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
	for (var i = 0; i < alphabet.length; i++){
		if (alphabet[i] == l){
			return i + 65;
		}
	}
	switch (l){
		case "up":
			return 38;
			break;
		case "down":
			return 40;
			break;
		case "right":
			return 39;
			break;
		case "left":
			return 37;
			break;
		default:
			break;
	}
}
