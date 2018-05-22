const intToRoman = require('./main.js');

describe('Roman Number conversor', function(){

    it('must return roman number', function(){
        expect(intToRoman.fromNumber(1)).toBe('I');
        expect(intToRoman.fromNumber(2)).toBe('II');
        expect(intToRoman.fromNumber(3)).toBe('III');
        expect(intToRoman.fromNumber(4)).toBe('IV');
    });
});

