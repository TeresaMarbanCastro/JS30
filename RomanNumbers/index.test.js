const application = require('./main');

​describe('the application', () =>{

    test('adds 1 + 2 to equal 3', () => {
    expect(application(1, 2)).toBe(3);
    });
    
});