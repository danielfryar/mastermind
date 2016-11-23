
var playerCode; //holds player's code
var computerGuess; //holds computer's guesses

var randomColors = ["yellow", "green", "blue", "red", "purple", "orange"];
var spaces;

function rdmClrSelec() {
    for (var i = 0; i < randomColors.length; i++) {

				return Math.random(randomColors());
    }
		console.log(rdmClrSelec());
	}

    function startGame() {

        spaces = document.getElementById('colorSelect').value.parseInt();
        for (var i = 0; i < spaces; i++) {
            console.log(spaces);
            answer.push(randomColors());
            putSelector(i);
        }
    }
