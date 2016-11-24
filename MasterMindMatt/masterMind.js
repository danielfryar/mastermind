$(document).ready(function(){
var colors = ["yellow", 'green','blue','red','purple','orange'];
var difficulty;
var gameBoard; /*= document.getElementById("gameBoard");*/
var nextRow;/* = gameBoard.insertRow();*/
var nextCell;/* = nextRow.insertCell();*/
var answers = [];
var guesses = [];
var answerKey;
var compChoice;


for (var q = 0; q < colors.length; q++){
}


function codeBreaker(guesses, answers){
  answerCode = [];
  for (var i = 0; i < guesses.length; i++){
    for (var j = 0; j < answers.length; j++){
      if (guesses[i] == answers[j]){
        if (i === j) answerCode +=('black');
        else answerCode +='white';
      }
    }
  }
  answerKey = answerCode;
  console.log(answerKey);
}


function getRandomNumber(){
  return Math.floor(Math.random() * 10);
}

function colorSelector(){
  for (var i = 0; i < difficulty; i++){
    do{
      var answer = getRandomNumber();
    }while (answer == undefined || answer > 5);
  compChoice = colors[answer];
  answers.push(compChoice);
  }
}

function startGame(){
  difficulty = Number.parseInt(document.getElementById('difficulty').value);
  document.getElementById('guessButton').disabled = false;
}

$('#guessButton').click(function(e){
  e.preventDefault;
  var guess = document.getElementById('selectUser1').value;
  guesses.push(guess);
  codeBreaker(guesses, answers);
  console.log(guesses);

});

$("#startGame").click(function(){
  startGame();
  colorSelector();
  document.getElementById('startGame').disabled = true;
  console.log(answers);
  });
});
