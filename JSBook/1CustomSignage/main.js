function application(){
    'use strict'
    var textEntered;
    var textLength;
    var finalPrize;
    var buttonCalculate = document.querySelector('.button__show');
    var prizeContainer = document.querySelector('.prize');

    buttonCalculate.addEventListener('click', showPrize);

    function showPrize(){
        countCharacters();
        calculatePrize();
        printPrize(); 
    }

    function countCharacters(){
        textEntered = document.querySelector('.input__text').value;
        textLength = textEntered.length;
        return textEntered, textLength;
    }

    function calculatePrize(){
        finalPrize = textLength * 5;
        return finalPrize;
    }

    function printPrize(){
        if (textEntered == ''){
            console.log(textEntered);
            prizeContainer.innerHTML = 'Please, enter a name'
        }else{
        prizeContainer.innerHTML = `${finalPrize}€`;
        }
    }
};