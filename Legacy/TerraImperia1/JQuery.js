var helpShown = false;

$(document).ready(function(){
	$('#controlsB').click(function(){
		if (helpShown){
			helpShown = false;
			$('#plr1C').remove();
			$('#plr2C').remove();
		}else{
			helpShown = true;
			$('#player1').append('<div id="plr1C"></div>');
			$('#plr1C').append('<p>Player 1 controls:</p>');
			$('#plr1C').append('<p>Move: W A S D</p>');
			$('#plr1C').append('<p>Attack: F G</p>');
			$('#plr1C').append('<p>Special: T</p>');
			
			$('#player2').append('<div id="plr2C"></div>');
			$('#plr2C').append('<p>Player 2 controls:</p>');
			$('#plr2C').append('<p>Move: \u21e6 \u21e7 \u21e8 \u21e9</p>');
			$('#plr2C').append('<p>Attack: K L</p>');
			$('#plr2C').append('<p>Special: O</p>');
		}
	});
});