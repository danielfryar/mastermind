var colors = ["yellow", 'green','blue','red','purple','orange'];
var difficulty;
var gameBoard; /*= document.getElementById("gameBoard");*/
var nextRow;/* = gameBoard.insertRow();*/
var nextCell;/* = nextRow.insertCell();*/
var answers;
var guesses;
var randomCompColor;

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

function selectedDifficulty(){

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
    difficulty = Number.parseInt(document.getElementById('difficulty').value);
    // for (var i = 0; i < difficulty; i++){
    //   answers.push
    // }

}

document.getElementById('startGame').addEventListener('click', function(){
  startGame();
  colorSelector();
  randomCompColor = colors[answers];
  console.log(difficulty);
  // document.getElementById('startGame').disabled = true;
});
