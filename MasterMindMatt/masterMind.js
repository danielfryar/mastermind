var spaces = document.getElementById('spaces').value;
var gameBoard = document.getElementById("gameBoard");
var nextRow = gameBoard.insertRow();
var nextCell = nextRow.insertCell();
var computerChoice1, computerChoice2, computerChoice3, computerChoice4, computerChoice5, computerChoice6;
var userGuess1, userGuess2, userGuess3, userGuess4, userGuess5, userGuess6;
// var answers = [computerChoice1, computerChoice2, computerChoice3, computerChoice4, computerChoice5, computerChoice6];
// var guesses = [userGuess1, userGuess2, userGuess3, userGuess4, userGuess5, userGuess6];

function compareCodeVsBreaker(guesses, answers){
  var answerKey = '';

  for (var i = 0; i <= guesses.length; i++){
    for (var j = 0; i <= answers.lenght; j++)
    if (guesses[i] == ansers[j]){
      if (i === j) answerKey += 'black';
      else answerKey += 'white'
    }
  }
}

function getRandomForComputer(){
  return Math.random();
}

function startGame(){
    computerChoice1 = getRandomForComputer();
    computerChoice2 = getRandomForComputer();
    computerChoice3 = getRandomForComputer();
    computerChoice4 = getRandomForComputer();
    computerChoice5 = getRandomForComputer();
    computerChoice6 = getRandomForComputer();
}

document.getElementById('startGame').addEventListener('click', function(){
  startGame();
  console.log(answers);
  document.getElementById('startGame').disabled = true;
});
// NOTE: INFO FOR REFRENCE
// i = value 1, yellow
// j = value 2, green
// k = value 3, blue
// l = value 4, red
// m = value 5, purple
// n = value 6, orange
