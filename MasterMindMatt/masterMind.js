var spaces = document.getElementById('spaces').value;
var gameBoard = document.getElementById("gameBoard");
var nextRow = gameBoard.insertRow();
var nextCell = nextRow.insertCell();

document.getElementById('startGame').addEventListener('click', function(){
  
  console.log(spaces);
});
