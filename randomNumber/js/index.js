'use strict'
function compareNumbers () {
  const randNumber  = getRandom();
  const inputNumber = getInputNumber();
  console.log(randNumber);
  console.log(inputNumber);
  if (randNumber > inputNumber) {
    bigger();
  }
  else if (randNumber < inputNumber) {
    smaller();
  }
  else {
    win();
  }
  return;
}

function getRandom (event) {
  return (Math.floor(Math.random() * (100 - 1)) + 1);
}

function getInputNumber () {
  return document.getElementById('randNumberInput').value;
}

function bigger () {
  console.log ("The random is bigger");
}

function smaller () {
  console.log ("The random is smaller");
}

function win () {
  console.log("YOU WIN!!!");
}

window.onload = function () {
  var buttons = document.getElementsByClassName("button");
  buttons[0].addEventListener("click", compareNumbers);
  

};

(function (x) {
  return function (y) {
    return x
  }
})(1)(2);
