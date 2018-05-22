var intToRoman = function(){};

var numeral = function(value, roman){
    return {
        value: value,
        roman: roman
    };
};

var numbers = [
    numeral(1000, 'M'),
    numeral(900, 'CM'),
    numeral(500, 'D'),
    numeral(400, 'CD'),
    numeral(100, 'C'),
    numeral(90, 'XC'),
    numeral(50, 'L'),
    numeral(40, 'XL'),
    numeral(10, 'X'),
    numeral(9, 'IX'),
    numeral(5, 'V'),
    numeral(4, 'IV'),
    numeral(1, 'I') 
];
intToRoman.prototype.fromNumber = function(n){
    var romanNumber = '';
    numbers.forEach(function(item){
        for (; n >= item.value; n -= item.value){
            romanNumber += item.roman;
        };
    });
    return romanNumber;
};

module.exports = new intToRoman();

