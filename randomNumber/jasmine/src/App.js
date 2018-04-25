
// function startApp(){
// 	'use strict';
	function application() {
		function compareNumbers (randomNumber, userSelectedNumber) {
				if (isNaN(Number(userSelectedNumber))) {
						return error();
				}
				if (randomNumber > userSelectedNumber) {
						return bigger();
				}
				else if (randomNumber < userSelectedNumber) {
						return smaller();
				}
				else {
						return win();
				}
		}
	
		function getRandom () {
				return (Math.floor(Math.random() * (100 - 1)) + 1);
		}
	
		function getUserSelectedNumber () {
				return Number(document.getElementById('randNumberInput').value);
		}
	
		function setResult(result) {
				document.getElementById('result').innerHTML = result;
		}
	
		function error () {
				return "Please introduce an integer";
		}
		function bigger () {
				return "The random is bigger";
		}
	
		function smaller () {
				return "The random is smaller";
		}
	
		function win () {
				return "YOU WIN!!!";
		}
	
		var randomNumber;
	
		function onClick(){
				setResult(compareNumbers(randomNumber, getUserSelectedNumber()));
		}
	
		function start() {
				randomNumber = getRandom();
				var comparisonTrigger = document.getElementById("compare-numbers-button");
				comparisonTrigger.addEventListener("click", onClick);
		}
	
		return {
				compareNumbers: compareNumbers,
				start: start,
				error: error,
				smaller: smaller,
				bigger: bigger,
				win: win
		}
	};
	// } 

//function startApp(){
// 'use strict';
// function compareNumbers () {
// 	const randNumber  = getRandom();
// 	const inputNumber = getInputNumber();
// 	console.log(randNumber);
// 	console.log(inputNumber);
// 	if (randNumber > inputNumber) {
// 	  bigger();
// 	}
// 	else if (randNumber < inputNumber) {
// 	  smaller();
// 	}
// 	else if (randNumber === inputNumber){
// 		win();
// 	}else{
// 		console.log("Introduce un caracter numérico");
// 	}
// 	return;
// 	}
    
//   function getRandom (event) {
// 	return (Math.floor(Math.random() * (100 - 1)) + 1);
//   }
  
//   function getInputNumber () {
// 	return document.getElementById('randNumberInput').value;
//   }
  
//   function bigger () {
// 	console.log ("The random is bigger");
//   }
  
//   function smaller () {
// 	console.log ("The random is smaller");
//   }
  
//   function win () {
// 	console.log("YOU WIN!!!");
//   }
  
// //   window.onload = function () {
// // 	var buttons = document.getElementsByClassName("button");
// // 	buttons[0].addEventListener("click", compareNumbers);
// //   };
// }


