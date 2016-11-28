

var randomColors = ["yellow", "green", "blue", "red", "purple", "orange"];
var playerCode; //holds player's code
var computerGuess; //holds computer's guesses
var spaces;

//
// for (var v = 0; v < randomColors.length; v++){
//   console.log(randomColors[v]);
// }


var computerGuess = function(){
var compRanSele = randomColors[Math.floor(Math.random() * 3)];
return compRanSele;
	console.log(computerGuess());
}
computerGuess()


function selectRandomColors() {
    for (var i = 0; i < randomColors.length; i++) {
        // computerGues
				return Math.random(selectRandomColors());
    }
		console.log(selectRandomColors());
	}

    function startGame() {

        spaces = document.getElementById('slect10').value.parseInt;
        for (var i = 0; i < spaces; i++) {
            console.log(spaces);
            answer.push(randomColors);
            putSelector(i);
        }
    }
