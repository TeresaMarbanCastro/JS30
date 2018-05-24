const application = require('./main.js');
var app;
 
describe('the calculator', function(){
    app = application();
    it('should add two numbers', function(){
        expect(app.add(2,'+', 1)).toBe(3);
        expect(app.add(9,'+', 0)).toBe(9);
        expect(app.add(90,'+', 8)).toBe(98);
        expect(app.add(900,'+', 78)).toBe(978);
    });

    it('should subtract two numbers', function(){
        expect(app.add(5,'-', 2)).toBe(3);
        expect(app.add(5,'-', 8)).toBe(-3);
        expect(app.add(58,'-', 8)).toBe(50);
    });

    it('should display numbers when clicked', function(){
        
    })
});