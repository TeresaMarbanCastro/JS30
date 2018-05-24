function application(){
    'use strict'

    var result;
    function add(a, x, b){
        if(x === '+'){
            result = a + b;
            }
        if(x === '-'){
            result = a - b;
            }
        return result;
    }

    var numberArea = document.querySelector('.number__display');
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    function displayClickedButtons(){
        // numberArea.value = 
    }
    var allButtons = document.querySelectorAll('.numbers');
    allButtons.addEventListener('click', displayClickedButtons);
    return{
        add: add
    }
}

if (typeof(module) != 'undefined'){
    module.exports = application;
}






// unction playSound(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(!audio) return; //stop the function from running all together
//     audio.currentTime = 0; //rewind to start
//     audio.play();
//     key.classList.add('playing');

// };

// function removeTransition(e){
//     if (e.propertyName !== 'transform') return;
//     // console.log(this);  //it equals what gets called
//     this.classList.remove('playing');
// }
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);













// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // a = a.toString();
        // a = parseInt(a);
        // b = b.toString();
        // b = parseInt(b);

        // return a + b;
        // if(a.toString().length > 1 && x === '+'){
        //     a = a.toString();
        //     a = parseInt(a);
        //     return a + b;
        // }
        // if(b.toString().length > 1 && x === '+'){
        //     b = b.toString();
        //     b = parseInt(b);
        //     return a + b;
        // }
        // if(a.toString().length > 1 && x === '-'){
        //     a = a.toString();
        //     a = parseInt(a);
        //     return a - b;
        // }
        // if(b.toString().length > 1 && x === '-'){
        //     b = b.toString();
        //     b = parseInt(b);
        //     return a - b;
        // }
        // else{ //Si quiero usar los números del array
        //     for(var i = 0; i < numbers.length; i++){
        //         a = numbers[a];
        //         b = numbers[b];
        //         if(x === '+'){
        //         result = a + b;
        //         }
        //         if(x === '-'){
        //             result = a - b;
        //         }
        //  }
        
        // return result;
