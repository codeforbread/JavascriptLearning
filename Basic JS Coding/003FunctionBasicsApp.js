/*
//Simple Alert
alert()

*/


/*
//Alert with argument
alert("hi Rock")

*/


/*
//Declare a Function
function welcomeRock(){
    alert("Welcome Rock.")
}

//Call to function using function name and parentheses
welcomeRock();
welcomeRock();
*/


/*
//Passing argument to function
function welcomeByName(yourName){
    alert("Welcome " + yourName + ".")
}

//Call to function using function name and parentheses and sending name parameter
welcomeByName("Rock Star");
welcomeByName("John Son");
*/


/*
//if two argument are sent by calling function but we have only one argument in called function then it will take first argument from calling function
//Called Function accepts one argument ie firstname
function showFirstNameLastName(firstName){
    alert("Your name is " + firstName + ".")
}

//Call to function using function fistname and lastname values
showFirstNameLastName("Rock", "Star");
showFirstNameLastName("John", "Son");
*/


/*
//Called Function accepts two arguments
function showFirstNameLastName(firstName, lastName, noname){
    alert("Your firstname is " + firstName + " and lastname is " + lastName + "." )
}

//Call to function using function fistname and lastname values
showFirstNameLastName("Rock", "Star");
showFirstNameLastName("John", "Son");
*/


/*
//Function to return square of number
function calculateSquare(number){
    return number * number;
}

num = 5;
//call to function calculateSquare
squareValue = calculateSquare(num);
alert("Square of " + num + " is " + squareValue + ".");
*/