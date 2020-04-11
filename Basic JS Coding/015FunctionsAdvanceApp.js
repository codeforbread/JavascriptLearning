/*
//simple function that takes variable as input
function getSquareOfNumber(number){
    return number * number;
}

document.write(getSquareOfNumber(5));
*/



/*
//addEventListener function takes argument as function(performAction)
//Javascript allows to pass function as argument
document.addEventListener("click",performAction)

function performAction(){
    alert("Hey you! clicked on screen");
}
*/


/*
//Javascript also allows to return function
//Javascript also allows to assign function to variable
//lets create program that will first take square of number and then multiply by another numbersArray
function getSquareOfNumber(number){
    return function(multiplyByNumber){
        return number * number * multiplyByNumber;
    }
}

let doubleSquareValue = getSquareOfNumber(2);
let tripleSquareValue = getSquareOfNumber(3);
let quadrupleSquareValue = getSquareOfNumber(4);

//This will display that variable doubleSquareValue has function assigned to it
document.writeln(doubleSquareValue);

//To get the value we pass arguement to variable (doubleSquareValue) that has function assigned to it
document.writeln(doubleSquareValue(2));
*/


/*
//Lets display all values using variable name and arguement
function getSquareOfNumber(number){
    return function(multiplyByNumber){
        return number * number * multiplyByNumber;
    }
}

let doubleSquareValue = getSquareOfNumber(2);
let tripleSquareValue = getSquareOfNumber(3);
let quadrupleSquareValue = getSquareOfNumber(4);

document.writeln(doubleSquareValue(2));
document.writeln(tripleSquareValue(3));
document.writeln(quadrupleSquareValue(4));
*/


/*
//There is some bug in document.writeln output
//But notice in console log we are getting proper answer
function getSquareOfNumber(number){
    square = number * number;
    return function(multiplyByNumber){
        return square * multiplyByNumber;
    }
}

let doubleSquareValue = getSquareOfNumber(2);
let tripleSquareValue = getSquareOfNumber(3);
let quadrupleSquareValue = getSquareOfNumber(4);

document.writeln(doubleSquareValue(2));
document.writeln(tripleSquareValue(3));
document.writeln(quadrupleSquareValue(4));

console.log(getSquareOfNumber(2)(2));
console.log(getSquareOfNumber(3)(3));
console.log(getSquareOfNumber(4)(4));
*/



/*
//use of foreach function on array
let animals = ['cat', 'rat', 'dog']

//foreach function will run function(sayIsAnimal) once for each item in the array
animals.forEach(hasFourLegs)

function hasFourLegs(animal){
    document.write(animal + ' has 4 legs.<br>')
}
*/
