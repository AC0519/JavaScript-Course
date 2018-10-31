///////////////////////////////////////
// Lecture: Hoisting

//Hoisting is most valuable because it allows us to use funtion declerations
//before we declare them in our code.


//functions
/*
calculateAge(1983);

function calculateAge(year) {
    console.log(2018 - year);
}
*/

/*
The below will not work because hoisting only works for 
function delerations as above, not function expressions as below.
*/

/*
retirement(1983);

var retirement = function(year) {
    console.log(65- (2018 - year));
}
*/


//variables

/*
console.log(age);
var age = 23;  //This gets stored in the global execution context so line 37 will return this
console.log(age);

function foo() {
    var age = 65; //This is only stored in the local execution context so it will only be returned here
    console.log(age);
}

foo();
console.log(age);

*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello! ';
first();

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);  this will return 'window' because it is in the hightest "global" context.

/*
calculateAge(1983);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this); //This is returns 'window' because it is a regular function call and this always points to the window object
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); //'this' now points to the john object
        console.log(2018 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);                            
        }
        innerFunction();
        */
    }
}

john.calculateAge();


//method borrowing
var mike = {
    name: 'Mike',
    yearOfBirth: 1984,  
}

mike.calculateAge = john.calculateAge; //this works because the 'this' keyword only become something when the method gets called
mike.calculateAge();



