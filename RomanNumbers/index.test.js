const startApp = require('./main.js');
var app;

describe('Roman Number conversor', function(){
    app = startApp();
    it('must return roman number', function(){
        expect(app.init(1)).toBe('I');
        expect(app.init(2)).toBe('II');
        expect(app.init(3)).toBe('III');
        expect(app.init(389)).toBe('CCCLXXXIX');
    });
    // it('must return roman number', function(){
    //     expect(intToRoman.fromNumber(1)).toBe('I');
    //     expect(intToRoman.fromNumber(2)).toBe('II');
    //     expect(intToRoman.fromNumber(3)).toBe('III');
    //     expect(intToRoman.fromNumber(4)).toBe('IV');
    //     expect(intToRoman.fromNumber(2396)).toBe('MMCCCXCVI');

    // });
});

