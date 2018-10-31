var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var bmiMark = massMark / (heightMark**2);
var bmijohn = massJohn / (heightJohn**2);

var bmiCompare = bmiMark > bmijohn;

//console.log("Is Mark's BMI higher than John's?" + ' ' + bmiCompare, bmiMark, bmijohn);

/***************
Update after learning more code
*/

if (bmiMark > bmijohn){
    console.log("Mark\'s BMI is higher than John\'s.");
}else{
    console.log("John\'s BMI is higher than Mark\'s.");
}
