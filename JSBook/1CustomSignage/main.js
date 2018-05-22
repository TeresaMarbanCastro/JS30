// (function application(){

'use strict'
var textEntered;
var textLength;
var finalPrize;
var buttonCalculate = document.querySelector('.button__show');
var prizeContainer = document.querySelector('.prize');


function countCharacters(){
    textEntered = document.querySelector('.input__text').value;
    textLength = textEntered.length;
    return textLength;
}

function calculatePrize(){
    finalPrize = textLength * 5;
    return finalPrize;
}
buttonCalculate.addEventListener('click', showPrize);

// function hideEnterData(){
//     var enterData =  document.querySelector('.enter__data');
//     enterData.add('hide');
// }

function printPrize(){
    prizeContainer.innerHTML = `${finalPrize}€`;
}
function showPrize(){
    countCharacters();
    calculatePrize();
    // hideEnterData();   
    printPrize(); 
}
// })();