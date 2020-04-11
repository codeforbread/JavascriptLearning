/*
//Scope is related to variables
//Context is related to objects
//Declared name variable outside function and displaying name variable value inside function
let name = "Rock";
function displayName(){
    console.log(name);
}
displayName(name);
*/



/*
//Declared name variable inside function and displaying name variable value outside function
function displayName(){
    let name = "Rock";
}
displayName(name);
console.log(name);
*/



/*
//To view how same variable name inside every block gives different value
let name = "bat oustide ";
function displayName(){
    let name = "cat inside function displayName";
    if(true){
        let name = "rat inside if";
        console.log(name);
    }
    console.log(name);
}
displayName(name);
console.log(name);
*/



/*
let name = "bat oustide ";
function displayName(){
    let name = "cat inside function displayName";
    if(true){
        //removed name inside if
        console.log(name);
    }
    console.log(name);
}
displayName(name);
console.log(name);
*/



/*
let name = "bat oustide ";
function displayName(){
        //removed name inside displayName
        if(true){
        let name = "rat inside if";
        console.log(name);
    }
    console.log(name);
}
displayName(name);
console.log(name);
*/



/*
//removed name outside
function displayName(){
    let name = "cat inside function displayName";
    if(true){
        let name = "rat inside if";
        console.log(name);
    }
    console.log(name);
}
displayName(name);
console.log(name);
*/



/*
//removed name variable from code
function displayName(){
    if(true){
        console.log(name);
    }
    console.log(name);
}
displayName(name);
console.log(name);
*/



/*
//Variable outside {} has a global scope i.e those variables can be accessed anywhere in code
//Variable inside {} has a block scope i.e those variables can be accessed only in that block
//Scope is unidirectional i.e inside code can reach for outside variables
//but outside code cannot reach for inside variables
let name = "Global Rock";
function displayName(){
    let name = "Block Rock";
    console.log("I m visible inside block and my name is " + name);
}
displayName(name);
console.log("I m visible everywhere and my name is " + name);
*/


/*
//let vs var
//let has block scope i.e those variables can be accessed only inside that block 
//so let can have different values for same variable inside function decalred in multiple block such as if statement block
//var has function scope i.e those variables can be accessed only inside that function
//so var will have same value for same variable inside multiple block in the function 
//With let every where we will have different name value
let letName = "let Global Scope";
function displayName(){
    let letName = "let Function Scope";
    if(true){
        let letName = "let Block Scope";
        console.log(letName);
    }
    console.log(letName);
}
displayName(letName);
console.log(letName);
*/



/*
//With var inside function we will get same value
var varName = "var Global Scope"
function displayName(){
    var varName = "var Function Scope"
    if(true){
        var varName = "var Block Scope"
        console.log(varName);
    }
    console.log(varName);
}
displayName(varName);
console.log(varName);
*/



/*
//Context is related to objects
//Currently this keyword inside method (learningLanguage) points to object (studentObject) so we are getting this.name value as Rock
let studentObject = {
    name : "Rock",
    language : "JavaScript",
    age : 24,
    learningLanguage(){
        console.log(this.name+ " learning " + this.language +".");
    }
}

studentObject.learningLanguage();
*/



/*
//lets create function inside function of a object method and check to which object this points to
//window is global object
//this keyword points to object that executes the current function
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
//To understand why we need this
let studentObject = {
    name : "Rock",
    language : "JavaScript",
    age : 24
}

function progressingFast(){
    console.log(this);
    console.log(this.name+ " learned basics of " + this.language +" very quickly.");
}
//call method will allow to call function and also allow us to pass object that this will point to. 
//calling function without object so call we assume global object(window) 
progressingFast.call();
//calling function with object so call will use studentObject
progressingFast.call(studentObject);
*/

