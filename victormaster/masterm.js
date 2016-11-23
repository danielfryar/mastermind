
var playerCode; //holds player's code
var computerGuess; //holds computer's guesses

var randomColors = ["yellow", "green", "blue", "red", "purple", "orange"];
var spaces;

function randomColors() {
    for (var i = 0; i < randomColors.length; i++) {
        console.log(randomColors[i]);
				return Math.random(i);
    }
	}

    function startGame() {

        spaces = documnt.getElementById('colorSelect').value.parseInt();
        for (var i = 0; i < spaces; i++) {
            console.log(spaces);
            answer.push(getRandomColor());
            putSelector(i);
        }
    }

		function colourFunction() {
		var myselect = document.getElementById("select1"),
		colour = myselect.options[myselect.selectedIndex].className;
		myselect.className = colour;
		myselect.blur(); //This just unselects the select list without having to click
		somewhere else on the page
		}
