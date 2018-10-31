/*********************
Variables and data types
*/


/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/


/*********************
Variable mutation and type coercion
*/


/*
var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' ' + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver'

alert(firstName + ' ' + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(firstName + ' ' + lastName)
*/

/***********************  
If / else statements
*/

/*
var firstName = 'John';
var maritalStatus = 'single';

if (maritalStatus === 'married') {
    console.log(firstName + ' is married.' );
}else{
    console.log(firstName + ' is single for life!!!');
}
*/

/**************
Boolean Logic 
*/

/*
var firstName = 'John';
var age = 25;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age < 18){
    console.log(firstName + ' is a teenager.');
} else if (age >= 18 && age < 30) {
    console.log(firstName + ' is a young man.')   
}else{
    console.log(firstName + ' is a man.');
}
*/


/********************** 
Ternary Operator and switch statements
*/

/*
//Ternary Operator
var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice'
console.log('John drinks ' + drink);


//Switch Statement

//exmple 1
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.'); 
}

//example 2

switch (true){
    case age < 13:
        console.log(firstName + ' is a boy.'); 
        break; 
    case age >= 13 && age < 18:
        console.log(firstName + ' is a teenager.'); 
        break; 
    case age >= 18 && age < 30:
        console.log(firstName + ' is a young man.'); 
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/



/********************** 
Functions
*/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

myAge = calculateAge(1983);
console.log(myAge);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.' );
    }else{
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1983, 'Anthony');
yearsUntilRetirement(1936, 'George');
*/


/********************** 
Function Statement and expressions
*/

/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kid how to code.';
        case 'driver':
            return firstName + ' drives for Uber.';
        case 'designer':
            return firstName + ' designs cool websites.';
        default:
            return firstName + ' is a ' + job
    }
}

console.log(whatDoYouDo('Intel Analyst', 'Anthony'));
*/



/********************** 
Arrays
*/

/*
//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.')
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
*/


/********************** 
Objects and properties
*/

/*
//create object (like a library in Python)
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

//another way to create an object
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane['birthYear'] = '1969';

console.log(jane);

//call an element in an object
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);

//mutate data in an object
john.job = 'designer';
john['isMarried'] = true;
console.log(john)
*/


/********************** 
Object Methods
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/


/********************** 
Loops
*/

/*
//for loop
for (var i = 0; i < 10; i+=1) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false];


for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}


//while loop
var i = 0
while (i< john.length) {
    console.log(john[i]);
    i++;
}


//continue and break statements


var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

//looping through the array in reverse

for (var i = john.length -1; i >=0 ; i--){
    console.log(john[i]);
}
*/










































