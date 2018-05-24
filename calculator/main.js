function application(){
    'use strict'
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result;

    function add(a, x, b){
        if(a.toString().length > 1 && x === '+'){
            a = a.toString();
            a = parseInt(a);
            return a + b;
        }
        if(b.toString().length > 1 && x === '+'){
            b = b.toString();
            b = parseInt(b);
            return a + b;
        }
        if(a.toString().length > 1 && x === '-'){
            a = a.toString();
            a = parseInt(a);
            return a - b;
        }
        if(b.toString().length > 1 && x === '-'){
            b = b.toString();
            b = parseInt(b);
            return a - b;
        }
        else{ //Si quiero usar los números del array
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