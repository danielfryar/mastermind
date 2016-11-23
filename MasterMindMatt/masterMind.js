var spaces;
var gameBoard; /*= document.getElementById("gameBoard");*/
var nextRow;/* = gameBoard.insertRow();*/
var nextCell;/* = nextRow.insertCell();*/
var answers;
var guesses;

function compareCodeVsBreaker(guesses, answers){
  var answerKey = '';

  for (var i = 0; i <= guesses.length; i++){
    for (var j = 0; j <= answers.lenght; j++){
      if (guesses[i] == answers[j]){
        if (i === j) answerKey += 'black';
        else answerKey += 'white';
      }
    }
  }
}

function getRandomForComputer(){
  return Math.random();
}

function startGame(){
    spaces = document.getElementById('spaces').value;

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
