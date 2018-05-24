const application = require('./main.js');
var app;
 
describe('the calculator', function(){
    app = application();
    it('should add two numbers', function(){
        expect(app.add(2,'+', 1)).toBe(3);
        expect(app.add(9,'+', 0)).toBe(9);
    });

    it('should subtract two numbers', function(){
        expect(app.add(5,'-', 2)).toBe(3);
        expect(app.add(5,'-', 8)).toBe(-3);

    });
});