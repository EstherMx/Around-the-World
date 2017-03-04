

<script type="text/javascript">
	
	var arrayWordByLetter = [
["G","E","R","M","A","N","Y"],
  ["V","E","N","E","Z","U","E","L","A"],
  ["E","G","Y","P","T"],
  ["A","U","S","T","R","I","A"],
  ["T","U","R","K","E","Y"],
  ["C","O","L","O","M","B","I","A"],
  ["I","N","D","I","A"],
  ["S","W","I","T","Z","E","R","L","A","N","D"]
]
var random = Math.floor((Math.random()*(arrayWordByLetter.length-1))); 

var randomWordToGuessPicked = arrayWordByLetter[random]; 

var foundWord = true;
var tries = 6;


//the new Array () makes the number of dash displayed equal the length of the argument:randomWordToGuessPicked
var dash = new Array(randomWordToGuessPicked.length);
for (var i = 0; i < dash.length; i++){
	dash[i] = "_ ";
}

// have the letters displayed on the dashes
function printdash(){
	for (var i = 0; i < dash.length; i++){
	var dashForLetterToGuess = document.getElementById("dashForLetterToGuess");
	var addThis = document.createTextNode(dash[i]);
	dashForLetterToGuess.appendChild(addThis);
	}
}


//check if the userguess matches the letters of the word
document.onkeyup = function(){
	var userguess = event.key;
	userguess = userguess.toUpperCase();
	for (var i = 0; i < randomWordToGuessPicked.length; i++){
		if(userguess === randomWordToGuessPicked[i]){
			dash[i] = userguess;
			var foundWord = true;
		}
	}
	
	//the innerHTML will replace the dash by " "
	var dashForLetterToGuess = document.getElementById("dashForLetterToGuess");
	dashForLetterToGuess.innerHTML=""; 
	printdash();
	
	// wrong letters will appear here. Tries will go dow by 1
	if(!foundWord){
		var alreadyGuessedLetter = document.getElementById("alreadyGuessedLetter");
		var addThis = document.createTextNode(userguess );
		alreadyGuessedLetter.appendChild(addThis); 
		tries--;
	}
	
	//are the letters correct?
	var finalw = true;
	for (var i = 0; i < dash.length; i++){
		if(dash[i] === "_ "){
			finalw = false;
		}
	}
	if(finalw){
		alert("You win!");
	}
	
	if(tries === 0){
		alert("Maybe next time...");
		
	}
}
window.onload = init;
function init(){
	printdash();
}


</script>
