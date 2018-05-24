function application(){
    'use strict'
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result;

    function add(a, x, b){
        for(var i = 0; i < numbers.length; i++){
            a = numbers[a];
            b = numbers[b];
            if(x === '+'){
               result = a + b;
            }
            if(x === '-'){
                result = a - b;
            }
        }
        return result;
    }

    return{
        add: add
    }
}

if (typeof(module) != 'undefined'){
    module.exports = application;
}