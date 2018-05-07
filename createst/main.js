//1. We first create a describe function:
function describe(subject, functionToEvaluate){
	try{
        functionToEvaluate();
    }
    catch(error){
        throw subject + ' ' +error;
    }
}
//2. We continue by creating an it function:
function it(subject, functionToEvaluate){
    try{
        functionToEvaluate();
    }
	catch(error){
        throw subject + ' ' + error;
    }
}
//3. Next is expect to be defined:
function expect(actual){
	return {
		toEqual: function(expected){
			if(actual == expected){
				console.log('YAY');
    		} else{
				throw 'da error';
   	 		}
        }	
	}
}
//4. And that's it! Now we can play with it:
describe("Probando", function(){
	it("este test", function(){
		expect('Hi').toEqual('Hello');
    });

});
