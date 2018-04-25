describe('application', function() {
    // startApp();
    describe('the random number guess game', function(){
      var app;
  
      beforeEach(function(){
          app = application();
      });
  
      it('compares numbers', function(){
          expect(app.compareNumbers(10, 20)).toEqual(app.smaller());
          expect(app.compareNumbers(20, 10)).toEqual(app.bigger());
          expect(app.compareNumbers(10, 10)).toEqual(app.win());
      });
      it('validates that input numbers are correct', function(){
          expect(app.compareNumbers(10, 'abcd')).toEqual(app.error());
      });
  });
    beforeEach(function() {   
    });

    describe('get random', function() {
      var random;
      beforeEach(function() {
        random = getRandom();
      });
      xit('should return a number', function() {
        expect(random).toEqual(jasmine.any(Number));
        // expect(typeof random).toBe('number');
      });
      xit('should be an integer', function() {
        expect(Math.ceil(random)).toBe(Math.floor(random));
      });
      xit('should be a number between 1 and 100', function() {
        expect(getRandom()).toBeGreaterThanOrEqual(1);
        expect(getRandom()).toBeLessThanOrEqual(100);
      });
    });

      // describe()
    // describe('check input', function() {
    //   it ('could the input contain a number', function(){
    //     document.getElementById('randNumberInput').value = 44;
    //     expect(parseInt(getInputNumber())).toEqual(jasmine.any(Number));
    //   });
    // });
  
    // describe('compare a number', function(){
    //   it('compare smaller', function(){
    //    window.getRandom = function() {
    //      return 12;
    //    }
    //    document.getElementById('randNumberInput').value = 1;
    //    console.log = jasmine.createSpy();
    //    compareNumbers();
    //    expect(console.log).toHaveBeenCalledWith("The random is smaller");
    //   });
    // });
  });

