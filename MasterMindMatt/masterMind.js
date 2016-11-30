$(document).ready(function() {
    var colors = ["yellow", 'green', 'blue', 'red', 'purple', 'orange'];
    var difficultChoice;
    var gameBoard; /*= document.getElementById("gameBoard");*/
    var nextRow; /* = gameBoard.insertRow();*/
    var nextCell; /* = nextRow.insertCell();*/
    var answers = [];
    var guesses = [];
    // var guessNumber = [];
    var answerKey;
    var compChoice;

    function numberOfGuesses() {
        for (var i = 0; i < difficultChoice; i++) {
            document.getElementById('selectUser' + i).style.visibility = "visible";
        }
    }

    function codeBreaker(guesses, answers) {
        var answerCode = [];
        for (var i = 0; i < guesses.length; i++) {
            for (var j = 0; j < answers.length; j++) {
                if (guesses[i] == answers[j]) {
                    if (i === j) answerCode.push('black');
                    else answerCode.push('white');
                }
            }
            console.log(answerCode);
        }
        return answerKey = answerCode;
    }

    function colorSelector() {
        for (var i = 0; i < difficultChoice; i++) {
            var answer = Math.floor(Math.random() * colors.length);
            compChoice = colors[answer];
            answers.push(compChoice);
        }
    }

    function conpileGuessesArray() {
      var roundOfGuess = [];
        for (var i = 0; i < difficultChoice; i++) {
            roundOfGuess.push(document.getElementById('selectUser' + i).value);
        }
      guesses = roundOfGuess;
    }

    function startGame() {
        difficultChoice = Number.parseInt(document.getElementById('difficulty').value);
        numberOfGuesses();
        colorSelector();
    }

    $("#startGame").click(function() {
        startGame();
        document.getElementById('guessButton').disabled = false;
        document.getElementById('startGame').disabled = true;
        console.log(answers);
    });

    $('#guessButton').click(function(e) {
        conpileGuessesArray();
        codeBreaker(guesses, answers);
    });

});
