
var playerCode; //holds player's code

var randomColors = ["yellow", "green", "blue", "red", "purple", "orange"];
var computerGuess; //holds computer's guesses
var spaces;

// function rdmClrSelec() {
//     for (var i = 0; i < randomColors.length; i++) {
//         // computerGues
// 				return Math.random(rdmClrSelec());
//     }
// 		console.log(rdmClrSelec());
// 	}

    function startGame() {

        spaces = document.getElementById('select1').value.parseInt;
        for (var i = 0; i < spaces; i++) {
            console.log(spaces);
            answer.push(randomColors);
            putSelector(i);
        }
    }
var computerGuess = function(){
var comRanSele = randomColors[Math.floor(Math.random() * 6)];
return comRanSele;
	console.log(computerGuess());
}
computerGuess()
