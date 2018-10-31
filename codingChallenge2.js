var johnGame1 = 100;
var johnGame2 = 112;
var johnGame3 = 100;

var mikeGame1 = 100;
var mikeGame2 = 100;
var mikeGame3 = 109;

var maryGame1 = 103;
var maryGame2 = 100;
var maryGame3 = 100;

var avgJohn = (johnGame1 + johnGame2 +johnGame3)/3;
var avgMike = (mikeGame1 +mikeGame2 + mikeGame3)/3;
var avgMary = (maryGame1 +maryGame2 + maryGame3)/3;

switch (true){
    case avgJohn > avgMike && avgJohn > avgMary:
        console.log('John\'s team is the winner with an average score of ' + avgJohn + ' points.');
        break;
    case avgMike > avgJohn && avgMike > avgMary:
        console.log('Mikes\'s team is the winner with an average score of ' + avgMike + ' points.')
        break;
    case avgMary > avgJohn && avgMary > avgMike:
        console.log('Mary\'s team is the winner witha an average score of ' + avgMary + ' points.')
        break;
    default:
        console.log('The teams have the same average score of ' + avgMike + ' points.');     
}