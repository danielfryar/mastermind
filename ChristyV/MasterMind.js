var numSpaces;
var colors = ["yellow", "green", "blue", "red", "purple", "orange"];
var guesses, answers;

$(document).ready(function() {
$('.start').on('click',function(){
  $(".Select Color").hide(1000);
});
function compareGuess() {
for (var i = 0; i < guesses.length; i++) {
    for (var j = 0; j < answers.length; j++) {
        if (guesses[i] == answers[j]);
        if (i === j) response += "pico";
    }
    //else response += "fermi";
  }

if (response==='') response = 'bagels';

return response;
}
});
