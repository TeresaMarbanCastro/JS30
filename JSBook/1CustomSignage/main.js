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
    return textEntered, textLength;
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
    if (textEntered == ''){
        console.log(textEntered);
        prizeContainer.innerHTML = 'Please, enter a name'
    }else{
    prizeContainer.innerHTML = `${finalPrize}€`;
    }
}
function showPrize(){
    countCharacters();
    calculatePrize();
    // hideEnterData();   
    printPrize(); 
}
// })();