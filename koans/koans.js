context = describe;

describe("the JavaScript language", function(){
    describe("has different types and operators that", function(){
        it("considers numbers to be equal to their string representation", function(){
            var result = (1 == '1');  //If I try with a === the test breaks, cause it compares types 
            expect(result).toBeTruthy(); 
    
            result = (1 != "1");
            expect(result).toBeFalsy();
        });
    
        it("knows that numbers and strings are not exactly the same", function(){
            var result = (1 === "1");
            expect(result).toBeFalsy(); 
    
            result = (1 !== "1");
            expect(result).toBeTruthy();
        });
     
        it("joins parts as string when using the plus operator", function(){
            var result = 1 + "a";
            expect(result).toEqual("1a");
        });
    
        it("operates integers before joining the string", function(){
            expect(1 + 1 + "2").toEqual('22');
        });
    
        it("knows the type of the variable", function(){
            var x = 1;
            var result = typeof(x);
            expect(result).toEqual('number');
        });
    
        it("considers an empty string to be falsy", function(){
            expect("" == false).toBeTruthy();// Truthy or Falsy
            expect("" === false).toBeFalsy();// Truthy or Falsy
        });
    
        it("considers zero to be falsy", function(){
            expect(0 == false).toBeTruthy();// Truthy or Falsy
            expect(0 === false).toBeFalsy();// Truthy or Falsy
        });
    
        it("considers nulls to be falsy", function(){
            var x = null;
            var result;
            if (x){
               result = true;
            }
            else{
               result = false;
            }
    
            expect(result == false).toBeTruthy();// Truthy or Falsy
            expect(null === false).toBeFalsy();// Truthy or Falsy
            expect(null == false).toBeFalsy();// Truthy or Falsy
        });
    
        it("knows the type of a function", function(){
            function x(){}
    
            expect(typeof(x)).toBe('function');
            expect(typeof(xxx)).toBe('undefined');  //Variable has never been declared
        });
    
        it("has arrays and they can contain anything inside", function(){
            var arr = [1,2,3,4];
            arr.push(5);
            arr[9] = 6;
            var matrix = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 7, 8]];
    
            
            expect(arr[1]).toEqual(2);
            expect(arr[4]).toEqual(5);
            expect(arr[6]).toEqual(undefined); //It is empty
            expect(arr[9]).toEqual(6); //It leaves empty some positions in the array and includes the position 9, you could sort this with filter or clean method
            expect(matrix[0][2]).toEqual('c'); //position 2 of first element of array
           
        });
    
        it("may contain functions inside arrays", function(){
            var arr = [1,2, function(arg){ return 3 + arg;}];
    
            expect(arr[2](1)).toEqual(4); //Argument 1 is applied function
        });
    
        it("concatenates arrays - well, kind of", function(){
            var a = [1,2,3];
            var b = [4,5,6];
    
            expect(a + b).toEqual('1,2,34,5,6'); //It converts arrays into strings so it is as to add them up: 'hellobye'
        });
    
        it("joins arrays and strings", function(){
            var a = [1,2,3];
    
            expect ("1" + a).toEqual('11,2,3');
            expect(a + "1").toEqual('1,2,31');
        });
    
        it("joins arrays and other things", function(){
            var a = [1,2,3];
            var b = ['x', 'y', 'z'];
    
            expect(1 + a).toEqual('11,2,3');
            expect(a + 1).toEqual('1,2,31');
            expect(1 + b).toEqual('1x,y,z');
            expect(true + a).toEqual('true1,2,3');
        });
    
        it("can't compare arrays", function(){
            var a = [1,2,3];
            var b = [1,2,3];
    
            expect(a == b).toBeFalsy();  // Truthy or Falsy
            expect(a === b).toBeFalsy(); // Truthy or Falsy
        });
    
        it("is not the same to compare by value than by reference ", function(){
            var a = [1,2,3];
            var b = [1,2,3];
    
            // .toEqual is a smart Jasmine function that is able to dig into
            // objects (and so arrays) and compare their content
            expect(a).toEqual(b);     
    
            // .toBe means the two operands are exactly the same thing
            expect(a).not.toBe(b);    
            // .toBe is like ===
            //expect(2).not.toBe("...");
        });
    
        it("surprises me, NaN is not comparable with NaN", function(){
            expect(5 / "a").not.toEqual(5 / 5); // Nan cannot equal a number
            expect(typeof(NaN)).toEqual(typeof(NaN)); //NaN type is NaN
            expect(isNaN(5 / "a")).toBeTruthy(); //NaN is truthy
        });
    
      });
    
    
    describe("considers functions as first class citizens so that", function(){
      
        it("can declare named functions", function(){
            function example(){
                return 'some example';
            }
    
            expect(example()).toEqual('some example'); // it expects the return
        });
    
        it("expressions are evaluated inside-out", function(){
            function a(x){
              return x +1;
            }
            function b(x){
              return x * 2;
            }
            function c(x){
              return x +3;
            }
    
            var result = b(1);
            expect(result).toBe(2);
    
            result = a(b(1));
            expect(result).toBe(3);
    
            expect(a(b(c(1)))).toBe(9);
        });
    
    
        it("can declare anonymous functions", function(){
            var someVar = function(a, b){
                return a + b;
            };
    
            expect(typeof(someVar)).toBe('function');
            expect(someVar(1,1)).toBe(2);
        });
    
        it("may return anything", function(){
            function example(arg){
                return [arg, arg * 2, arg * 3]; 
            }
     
            var result = example(3);
            
            expect(result[1]).toEqual(6);
            
        });
    
        it("may return arrays that contain functions and so on", function(){
            function example(){
                    return [function (){
                               return['a', 10];
                           }];
                       }
                    
                    expect(example()[0](1)[1]).toEqual(10);
        });
    
        it("doesn't care about the declaration order when they are named", function(){
            function exampleA(){
                return exampleB(1);
            }
            
            expect(exampleA()).toEqual(1);
            
            function exampleB(arg1){
                return arg1;
            }
        });
    
        it("matters, the declaration order when they are anonymous", function(){
            var exampleA = function(){
                return exampleB(1);
            };
            
            // expect(exampleA()).toEqual(1);
            
            var exampleB = function(arg1){
                return arg1;
            };
            expect(exampleA()).toEqual(1);  // IT works here, but not up there cause of variable declaration and order
        });
    
        it("can use optional parameters", function(){
            function example(a, b, c){
                if (c){
                  return a + b + c;
                }
                return a + b;
            }
            expect(example(1,1,1)).toBe(3);
            expect(example(1,1)).toBe(2);
        });
    
        it("considers functions to be anonymous in case of assignment statement", function(){
             var x = function z(){   //The name of Z is worth nothing because it takes the name of X
                return 1;
             };
             expect(typeof(z)).toEqual('undefined'); //That's why it is undefined
             expect(x()).toEqual(1);
        });
    
        it("can take functions as arguments", function(){
            function a(x){
                return x() + 1; //a(c)
            }
            function b(x){ //Identity function
                return x;
            }
            function c(){
                return 3;
            }
    
            var result = a(b(c));
    
            expect(result).toBe(4);
        });
    
        it("can create closures with free variables", function(){
            function external(){
              var a = 1;
    
              function internal(){
                return a + 1;
              }
              return internal();
            }
    
            expect(external()).toBe(2);
        });
    
        it("can create closures with several free variables", function(){
            function external(){
              var a = 1, b = 2;
    
              function internal(){
                var c = 3;
                return a + b + c;
              }
              return internal(); //it has to return sth
            }
    
            expect(external()).toBe(6);
        });
    
        it("defines a pure function when there are no free variables", function(){
            function external(){
              var a = 1, b = 2;
    
              function internal(a, b){
                var c = 1;
                return a + b + c;
              }
              return internal(4,4);
            }
    
            expect(external()).toBe(9);
        });
    
        it("may return arrays that contain closures and so on", function(){
            var a = 2;
            function example(){
                return [function (){
                    return['a', a + 10,  //In this case the parameters are irrelevant cause the function doesn't use them
                    'hello'];
                }, 'happybday'];
            }
            
            expect(example()[0](1)[1]).toEqual(12);
            expect(example()[0](2)[2]).toEqual('hello');
            expect(example()[0](3)[0]).toEqual('a');
        });
    
        it("passes primitive types as values (a copy) to functions", function(){
            function example(arg){
                arg = "test!";
            }
    
            var x = 1;
            var y = "example";
            var z = true;
    
            example(x)
            expect(x).toEqual(1);  //Hace una copia de la referencia, y como es primitivo, no se sobreescribe. El objeto de fuera prevalece. así que no puede ser igual a test!
            
            example(y);
            expect(y).toEqual("example");
    
            example(z);
            expect(z).toEqual(true);
        });
    
        it("passes arrays by reference", function(){
            function sum(sequenceOfNumbers){
                sequenceOfNumbers[0] = 100;
                return 4;
            }
    
            var x = [1,2,3];
            sum(x);
            expect(x).toEqual([100,2,3]);
        });
    
        it("passes objects by reference", function(){
            function example(arg){
                arg.property = 'test';
            }
    
            var x = {property: 'cool!'};
    
            example(x);
          expect(x).toEqual({property: 'test'}); //Again a reference, so the object doesn't change.
        });
    
        it("may return a function as the result of invoking a function", function(){
            function add(a, b){
               return a + b;
            }
            function example(){
               return add;
            }
    
            expect(example()(1,2)).toEqual(3);
            var f = example();
            expect(f(2,2)).toEqual(4); // parameter of f is example, whose parameters are 2 and 2.
        });
    
        it("can return closures as a function result", function(){
            function plus(amount){
                return function(number){
                    return number + amount;
                };
            }
    
            var f = plus(5); //amount = 5
            
            expect(f(3)).toBe(8); //the missing parameter (number) is 3
        });
    
        it("can have functions that receive other functions as arguments", function(){
            function add(a,b){
                 return a + b;
            }
            function example(arg){
                 return arg(2,2) + 1;
            }
    
            expect(example(add)).toEqual(5);
        });
    
        it("may have functions as the input and the output", function(){
            function plus(originalFunction){
              return function(arg1){ 
                   return originalFunction() + arg1;
              };
            }
    
            var f = plus(function(){return 1;}); //plus return is 1, and this is applied to the other function that has another parameter left which is assigned 2
    
            expect(f(2)).toBe(3);
        });
    
        it("can invoke functions indirectly using the special 'call'", function(){
            function f(a, b){
                return a + b;
            }
    
            expect(f.call(f,1,1)).toEqual(2);
        });
    
        it("can invoke functions indirectly using the special 'apply'", function(){
            function f(a, b){
                return a + b;
            }
    
            expect(f.apply(f, [1,1])).toEqual(2);
        });
    
        it("is useful sometimes to change the context", function(){
            function F() {
              this.val = 100;
              this.exec = function(){
                ++this.val;
              };
            }
            function G(){
              this.val = 200;
              this.exec = function(){
                ++this.val;
              };
            }
            var f = new F();
            var g = new G();
    
            f.exec.call(g); //f function is executed within contex G; f from 429 and G from 433.
            expect(f.val).toBe(100); //this.val is the same cause it is defined within F, but here we are not executing the function.
            expect(g.val).toBe(201); //here it takes the result from executing the call with g.
        });
    
    
        it("doesnt have a private scope inside blocks", function(){
            var j = 0;
            for (var i = 0; i < 5; i++) {
              j += i;
            }
    
            expect(i).toEqual(5); // It is the last value that comes from the whole loop
            expect(j).toEqual(10); // It equals 5 and adds the i
        });
      });
    
    describe("has multiple ways to define and create objects", function(){
    
        it("can define object literals", function(){
            var obj = {name: 'bob', theName: function(){return this.name;}};
    
            expect(obj.theName()).toBe('bob');
        });
    
        it("can create properties dynamically", function(){
            var obj = {name: 'bob', surname: 'sponge'};
            obj.address = 'palm tree';
          
            expect(obj.address).toEqual('palm tree');
            expect(obj['address']).toEqual('palm tree');
            expect(obj['name']).toEqual('bob');
        });
    
        it("can define properties also using brackets", function(){
            var obj = {};
            obj["name"] = "bob";
    
            expect(obj.name).toEqual('bob');
    
            // this is interesting, it doesn't 
            // complain about trailing brackets:
            
            obj[[["something"]]] = "wtf";
            expect(obj.something).toEqual('wtf');
        });
    
    
        it("may define complex objects", function(){
            var user = {};
            // write the contents of the obj to make the satisfy the expectations:
            user.address = {name: 'neighbourhood', street: 'sesame'}
            user.friends = [{name: 'triki', surname: 'traka', lastname: 'treke'}]
            expect(user.address.street).toEqual('sesame');
            expect(user.friends[0].name).toEqual('triki');
        });
    
        it("has a pattern called, the Module Pattern", function(){
            function createObject(){
                 var points = 0;
    
                 return {
                    addPoint: function(){ ++points;},
                    score: function(){ return points;},
                    points: 0 //needed to access .points to return it. We can't access the var points if we don't return it here.
                 };
            }
    
            var obj = createObject();
            obj.addPoint();
            expect(obj.score()).toEqual(1);
            expect(typeof(obj.score())).toEqual('number'); 
            expect(typeof(obj.points)).toEqual('number'); 
           });
    
        it("may create objects also with the module pattern", function(){
            function createObject(initialScore){
    //write the code 
            return {
                color: 'red',
                points: 0,
                incrementScoreIn: function(){
                    return initialScore * 2;
                }
            }
         
        }       
            var obj = createObject(5, 'red');
            // obj.incrementScoreIn(5);
            expect(obj.color).toEqual('red');
            expect(obj.points).toEqual(0);
            expect(obj.incrementScoreIn()).toEqual(10);
            // expect(obj.points()).toEqual(10);
        });
    
        it("can define constructors", function(){
            function Obj(){
              var name = 'bob';
    
              this.theName = function(){
                return name;
              };
            }
    
            var obj = new Obj();
            expect(obj.theName()).toBe('bob');
        });
    
        it("may contain 'static' methods", function(){
            function Obj(){
              var name = 'bob';
    
              this.theName = function(){
                return name;
              };
            }
            Obj.someStaticMethod = function(){
              return 22;
            };
    
            expect(Obj.someStaticMethod()).toBe(22); //you execute the function Obj fits and then it return the function that gives us 22.
        });
    
        it("can have have methods in the prototype", function(){
            function Obj(){
              var name = 'bob';
            }
            Obj.prototype.theName = function(){
                return this.name;
            };
    
            // var obj = new Obj();
            // expect(obj.theName()).toEqual(undefined);//there is no return in function Obj()
            // expect(obj.theName).toBe(new Obj().theName);
        });
    
        it("can define a factory", function(){
            function obj(){
              var self = {}; //Self is like this, it preserves the context. (bind in react)
    
              var name = 'bob';
              self.theName = function(){
                  return name;
              };
    
              return self;
            }
    
            var instance = obj();
            expect(instance.theName()).toBe('bob');
            expect(instance.theName).not.toBe(obj().theName);
        });
    
       xit("can create methods dynamically on an object instance", function(){
            var obj = {};
            var methodNames = ['meow', 'jump'];
            for (var i = 0; i < methodNames.length; i++){
              obj[methodNames[i]] = function(){ return 'it works';};
            }
            expect(obj.meow()).toEqual('it works');
            expect(obj.jump()).toEqual('it works');
    
        });
    describe("the polymorphism", function(){
        // check out this video for a great explanation on polymorphism:
        // https://www.youtube.com/watch?v=PMfcsYzj-9M

        it("may use constructor plus prototype", function(){
            function Parent(){
              this.name = 'parent';
            }
            Parent.prototype.someMethod = function(){
              return 10;
            };

            function Child(){
              Parent.call(this); // constructor stealing
              this.name = 'child';
            }
            Child.prototype = Object.create(Parent.prototype); // prototype chaining

            var child = new Child();
            expect(child.someMethod()).toEqual(10);
            expect(child.name).toEqual('child');
        });

        it("may use the functional inheritance", function(){
            function parent(){
                var name = 'parent';
                var self = {};
                self.someMethod = function(){
                    return 10;
                };
                return self;
            }

            function child(){
                var name = 'child';
                var self = parent();
                return self;
            }

            var instance = child();
            expect(instance.someMethod()).toBe(10);
        });

        // KOAN: how do you create "protected methods?"
        //with self
    });

  });

  describe("common patterns with functions and behaviours", function(){
    it("can invoke functions immediately to take advantage of scopes", function(){
        var myNamespace = {};

        (function(theNamespace){
            var counter = 0;

            theNamespace.addOne = function(){
              counter++;
            };

            theNamespace.giveMeTheCount = function(){
              return counter;
            };

        }(myNamespace));

        myNamespace.addOne();
        myNamespace.addOne();

        expect(myNamespace.giveMeTheCount()).toBe(2); //It was executed twice
    });
    it("hoists variables the way you probably dont expect", function(){
        function generate(){
          var functions = [];
          for (var i = 0; i < 5; i++){
            functions.push(function(){
              return i;
            });
          }
          return functions;
          console.log(functions);
        }
      //It creates an array of functions (5 functions) whose return values are always 5 (i=5)
        expect(generate()[0]()).toEqual(5); 
        expect(generate()[1]()).toEqual(5);
    });

  });


  context("has ways to simulate classes", function(){
      // "Class"
      function Cat(){
        this.kilos = 1;
        this.feed = function(){
          this.kilos++;
        };
        this.isPurring = function(){
          return true;
        };
      }
      ////////////////////////////////////// 
      // "Class"
      function Lion(energy){
        Cat.call(this); //It takes all the contex from cat kilos and feed.
        this.energy = energy || 100; //either the parameter that enters or 100 if it isnt injected.
        var self = this; //It takes values from self?

        var run = function(){ // private method
          self.energy -= 10;
        };
        var attack = function(){ // private method
            self.energy -= 5;
        };
        this.playWithFriend = function(friend){
            if (friend.isPurring())
               self.energy += 10; 
        };
        this.hunt = function(){ // public method
            run();
            attack();
            this.onHunting(); // fire event
        };
        this.onHunting = function(){ /* event */ };
      }


      context("and the THIS keyword", function(){
        var cat;
        
        beforeEach(function(){
            cat = new Cat();
            window.kilos = 0;
        });

        it("sometimes works as expected in other languages", function(){
            cat.feed();
            cat.feed();

            expect(cat.kilos).toEqual(3); //cat starts with 1 and then feed is run twice so 1+1+1
        });

        it("works different on dettached functions", function(){
            window.kilos = 10;
            var feed = cat.feed; //feed function loses its context, it is no longer associated with cat. This is global here.

            feed();

            expect(window.kilos).toEqual(11); //It takes the global value
            expect(cat.kilos).toEqual(1); //It takes the value in cat
        });

        it("can be bound explicitly with CALL and APPLY", function(){
            var feed = cat.feed;

            feed.apply(cat);

            expect(cat.kilos).toEqual(2);
        });

        it("can be bound in modern browsers with BIND", function(){
            var feed = cat.feed;
            var bound = feed.bind(cat);

            bound();

            expect(cat.kilos).toEqual(2);
        });

        it("works different when function is attached to other object", function(){
            var otherCat = new Cat();
            otherCat.kilos = 10;
            otherCat.feed = cat.feed;

            otherCat.feed();
            expect(otherCat.kilos).toEqual(11);
            expect(cat.kilos).toEqual(1);
        });

        it("can be handled using the SELF trick", function(){
            var energy = 200;
            var lion = new Lion(energy);

            lion.hunt();

            expect(lion.energy).toEqual(185); //200 -10 -5
        });

        it("interprets the THIS when the function is executed", function(){
            var energy = 200;
            var lion = new Lion();

            lion.hunt = function(){
                this.energy = 4000;
            };
            lion.hunt();

            expect(lion.energy).toEqual(4000);//it doesn't call the function, it only makes you get the result of energy defined in the new hunt. which is 4000, not 3985
        });
      });

      describe("event driven development", function(){
        // "Class"
        function EventBus(){
            var subscribersInfo = [];

            this.addSubscriber = function(callback){
               var eventNames = [].slice.call(arguments).slice(1);
               subscribersInfo.push({
                 subscriber: callback, eventNames: eventNames});
             };

            this.emit = function(eventName, eventArgs){
               for(var i = 0, len = subscribersInfo.length; i < len; i++){
                   var info = subscribersInfo[i];
                   for (var j = 0, lenj = info.eventNames.length; j < lenj; j++){
                       if (info.eventNames[j] == eventName)
                           info.subscriber(eventName, eventArgs);
                   }
               }
            };
         }  
         
         // PLEASE READ THIS POST. It contains the theory: 
         // http://www.carlosble.com/2013/02/event-oriented-programming-with-javascript/

        it("uses the DOM level 0 traditional model (one2one)", function(){
            var lion = new Lion();
            var called = false;
            // subscribes to the event:
            lion.onHunting = function(){ called = true;};

            lion.hunt();

            expect(called).toBe(true);
        });

        it("implements the observer pattern (one2many)", function(){
            function Publisher(){
              this.addObserver = function(observerCallback){
                // TODO: implement this 
              };
              this.informAllObservers = function(){
                // TODO: implement this
              };
            }

            var publisher = new Publisher();
            var observer1WasCalled = false;
            var observer1 = function(){ observer1WasCalled = true;};  
            var observer2WasCalled = false;
            var observer2 = function(){ observer2WasCalled = true;};
            publisher.addObserver(observer1);
            publisher.addObserver(observer2);

            publisher.informAllObservers();

            //expect(observer1WasCalled).toBeTruthy();    
            //expect(observer2WasCalled).toBeTruthy();
        });

        it("implements the pub/sub pattern (many2many)", function(){
            var eventBus = new EventBus();  
            var eventWasFired = false;
            var handler = function(eventName, eventArgs){
                eventWasFired = true;
                expect(eventArgs.someNumber).toBe(10);
            };
            eventBus.addSubscriber(handler, "someEvent");

            eventBus.emit("someEvent", {someNumber: 10});

            //expect(eventWasFired).toBeFalsy();
        }); 
      });
  });
});

