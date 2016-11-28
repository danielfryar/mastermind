

var randomColors = ["yellow", "green", "blue", "red", "purple", "orange"];
var playerCode; //holds player's code
var computerGuess; //holds computer's guesses
var spaces;
var number1, number2, number3;



function selectRandomColors() {
  var choRand = randomColors[Math.floor(Math.random() * 3)];
    for (var i = 0; i < randomColors.length; i++) {
        // computerGues
				return Math.random(selectRandomColors());
    }
		console.log(selectRandomColors());
	}
  // function startGame() {
  //
  //     spaces = document.getElementById('slect10').value.parseInt;
  //     for (var i = 0; i < spaces.length; i++) {
  //
  //         answer.push(randomColors);
  //         putSelector(i);
  //     }
  // }


  
  function userNum(){
     number1 = parseInt(document.getElementById('select1').value);
     number2 = parseInt(document.getElementById('select2').value);
     number3 = parseInt(document.getElementById('select3').value);
     console.log(number1,number2,number3);
  }




  //
  // for (var v = 0; v < randomColors.length; v++){
  //   console.log(randomColors[v]);
  // }



//  function computerGuess(){
// var choRand = randomColors[Math.floor(Math.random() * 3)];
// return choRand;
// 	console.log(computerGuess());
// }
// computerGuess()





    // function startGame() {
    //
    //     spaces = document.getElementById('slect10').value.parseInt;
    //     for (var i = 0; i < spaces.length; i++) {
    //
    //         answer.push(randomColors);
    //         putSelector(i);
    //     }
    // }
