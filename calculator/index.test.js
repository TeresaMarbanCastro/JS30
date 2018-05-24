const application = require('./main.js');
var app;
 
describe('the calculator', function(){
    app = application();
    it('should add two numbers', function(){
        expect(app.add(2,1)).toBe(3);
    });
    it('should add three numbers', function(){
        expect(app.add(5,2,1)).toBe(8);
    });
});