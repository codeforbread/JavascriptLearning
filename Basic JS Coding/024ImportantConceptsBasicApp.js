/*
//Simple function to display message if someone clicks on screen
//It is good practice to write separate function(performAction) if we will be using such a function for multiple cases
//But if we will be using it only once then it is not good. So we use Anonymous function
document.addEventListener("click",performAction);

function performAction(){
    alert("u clicked on the screen");
}
*/



/*
//Anonymous function :- Function that will not have name
//Mostly used when function task will be used only for one scenario
document.addEventListener("click",function(){
    alert("u clicked on the screen");
});
*/



/*
//Arrow Function :- uses minimal code to create function ( function() is replaced by ()=> or () => )
document.addEventListener("click",() => {
    alert("u clicked on the screen");
});
*/



/*
//Can remove curly braces ( {} ) in arrow function
//In arrow function when code can fit on single line there is no need for curly braces ({})
document.addEventListener("click",() => alert("u clicked on the screen"));
*/



/*
let numbersArray = [1, 2, 3, 4, 5];
//Anonymous function
console.log("Just Anonymous Function");
let muliplyByOneValues = numbersArray.map(function(input){
    return input * 1;
});
console.log(muliplyByOneValues);

//Arrow Function 
console.log("Arrow Function changed function(input) to input) => ")
let muliplyByTwoValues = numbersArray.map((input) =>{
    return input * 2;
});
console.log(muliplyByTwoValues);

//Can remove curly braces ( {} ) since body of code inside arrow function can fit one line 
//Also we have to remove return (it will automatically return the value)
console.log("Removed curly braces ({}) and return");
let muliplyByThreeValues = numbersArray.map((input) => input * 3);
console.log(muliplyByThreeValues);

//Can remove parenthesis for input before arrow function if we have only one parameter.
//For zero or more than one parameter we compulsorily need ().
console.log("Removed parenthesis (()) for input before => because only one input parameter"); 
let muliplyByFourValues = numbersArray.map(input => input * 4);
console.log(muliplyByFourValues);
*/



/*
//With simple function (iAmFunctionNotMethod) inside this points to window object
let studentObject = {
    name : "Rock",
    language : "JavaScript",
    age : 24,
    learningLanguage(){
        function iAmFunctionNotMethod(){
            console.log("Inside function of object method");
            console.log(this);
        }
        //here there is no object infront of function iAmFunctionNotMethod 
        //so global object (window) excutes iAmFunctionNotMethod function hence this points to window
        iAmFunctionNotMethod();
        console.log("Outside function of object method");
        console.log(this);
    }
}
//here studentObject excutes learningLanguage function hence this points to studentObject
studentObject.learningLanguage();
*/



/*
//With arrow function (iAmFunctionNotMethod) inside this points to studentObject object
let studentObject = {
    name : "Rock",
    language : "JavaScript",
    age : 24,
    learningLanguage(){
        let iAmFunctionNotMethod = () =>{
            console.log("Inside function of object method");
            console.log(this);
        }
        //here there is no object infront of function iAmFunctionNotMethod
        //But arrow function do not have their own new this pointer
        //So arrow function uses scope concept to check which object this will point to
        //First it will check if this is present  in local scope i.e inside iAmFunctionNotMethod but it is not there 
        //Next it will check in outside block scope ie block for learningLanguage and it will see that this block has object (studentObject)   
        //so studentObject excutes iAmFunctionNotMethod function hence this points to studentObject
        iAmFunctionNotMethod();
        console.log("Outside function of object method");
        console.log(this);
    }
}
//here studentObject excutes learningLanguage function hence this points to studentObject
studentObject.learningLanguage();
*/


/*
//Function Hoisting :- allows us to call a function before we create that function 
//All function declaration are hoisted or moved to very top .
//Thus ordering of function call and declaration does not matter
canCallFunctionBeforeDefining();
function canCallFunctionBeforeDefining(){
    console.log("We called function before defining");
}
*/



/*
//Ordering of variables usuage and defining matter in case of let variables
//Thus it will give error since only after declaring you can use
console.log(favoriteNumber);
let favoriteNumber = 14;
console.log(favoriteNumber);
*/



/*
//Ordering of variables usuage and defining does not matter in case of var variables 
//but initially it will give value as undefined.
console.log(nfavoriteNumber);
var nfavoriteNumber = 14;
console.log(nfavoriteNumber);
*/


/*
//Anonymous function are not hoisted
//So u can call function only after declaring otherwise it gives error
canCallFunctionBeforeDefining();
//can use let or var
let canNotCallFunctionBeforeDefining = function(){
    console.log("We called function before defining");
}
*/



/*
//Template Literals
let firstName = "Rock";
let lastName = "John";
//Without template literal
console.log("My first name is " + firstName + " and lastname is " + lastName + ".");
//With template literal
//6 double quotes , 4 plus signs , need to format space inside double quotes ("is " +lastName) 
//added 2 back tick, 2 dollar signs and 4 curly braces ( {} )
console.log(`My first name is ${firstName} and lastname is ${lastName}.`);
*/



/*
//Automatic semi-colon insertion
//Js provides automatic semi-colon insertion after end of every line
let firstName = "Rock"
let lastName = "John"
console.log(`My first name is ${firstName}.`)
console.log(`My last name is ${lastName}.`)
*/



/*
//But if we want to write entire code on single line we will get error
//But we can write entire code on single line by separating each line with semi colon on single line
let firstName = "Rock";let lastName = "John";console.log(`My first name is ${firstName}.`);console.log(`My last name is ${lastName}.`)
*/