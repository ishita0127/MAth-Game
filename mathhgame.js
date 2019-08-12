var playing = false;
var score;
var timeremaining;



document.getElementById("startReset").onclick = function() {
	if (playing == true) {
		location.reload();

	}else{
		score = 0;
		document.getElementById("ScoreValue").innerHTML = score;
		document.getElementById("Timeremaining").style.display = "block";
		timeremaining = 60;
		document.getElementById("Timeremainingvalue").innerHTML = timeremaining;

		document.getElementById("startReset").innerHTML = "Reset Game";

		startCountDown();



	}
}


function startCountDown(){
	action = setInterval(function(){
		timeremaining -=1;
		document.getElementById("Timeremainingvalue").innerHTML = timeremaining;
		if (timeremaining == 0) {
			stopCountdown();
			document.getElementById("GameOver").style.display = "block";
			document.getElementById("GameOver").innerHTML = "<p> GameOver!! </p> <p> Your score is 0 </p>";
		}


	}, 1000);
}



function stopCountdown() {
	clearInterval(action);
}




















