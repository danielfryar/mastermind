var colors = ["yellow", 'green','blue','red','purple','orange'];
var numSpaces;
var gameBoard; /*= document.getElementById("gameBoard");*/
var nextRow;/* = gameBoard.insertRow();*/
var nextCell;/* = nextRow.insertCell();*/
var answers;
var guesses;

for (var q = 0; q < colors.length; q++){
  console.log(colors[q]);
}


function compareCodeVsBreaker(guesses, answers){
  var answerKey = '';

  for (var i = 0; i < guesses.length; i++){
    for (var j = 0; j < answers.lenght; j++){
      if (guesses[i] == answers[j]){
        if (i === j) answerKey += 'black';
        else answerKey += 'white';
      }
    }
  }
}

function getRandomNumber(){
  return Math.floor(Math.random() * 10);
}

function colorSelector(){
  do{
    answers = getRandomNumber();
  }while (answers == undefined || answers > 5);
}

function startGame(){
    numSpaces = document.getElementById('spaces').value;

}

document.getElementById('startGame').addEventListener('click', function(){
  startGame();
  colorSelector();
  console.log(colors[answers]);
  // document.getElementById('startGame').disabled = true;
});
