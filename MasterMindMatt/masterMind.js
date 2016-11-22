var spaces = document.getElementById('spaces').value;
var gameBoard = document.getElementById("gameBoard");
var nextRow = gameBoard.insertRow();
var nextCell = nextRow.insertCell();
var computerChoice1, computerChoice2, computerChoice3, computerChoice4, computerChoice5, computerChoice6 ;
var userGuess1, userGuess2, userGuess3, userGuess4, userGuess5, userGuess6;
var answers = [computerChoice1, computerChoice2, computerChoice3, computerChoice4, computerChoice5, computerChoice6];
var guesses = [userGuess1, userGuess2, userGuess3, userGuess4, userGuess5, userGuess6];

function getRandomForComputer (){
  return Math.floor(Math.random() * 10);
}

document.getElementById('startGame').addEventListener('click', function(){
  console.log(spaces);
});

function startGame(){
  do{

  }
}
// NOTE: INFO FOR REFRENCE
// i = value 1, yellow
// j = value 2, green
// k = value 3, blue
// l = value 4, red
// m = value 5, purple
// n = value 6, orange
