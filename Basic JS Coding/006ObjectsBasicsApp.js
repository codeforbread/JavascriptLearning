/*
//cat related data but its difficult to know whether we are speaking about same cat or not
//that is we dont understand whether Tom has grey color or not . It might also happen that we are speaking color of other Cat
//So there is no proper RELATIONSHIP between variables(name,color) of Cat and function (meow)
//To provide relationship between variables (name,color) and function(meow) we make use of Objects
catName = 'Tom';
catColor = 'Grey';

function meow(){
    alert('meeeoooowwwwww');
}

meow();
*/



/*
//Object is a container that can store related information
//we use curly braces ( {} ) to create object
//we declare property ( name ) and its value ( 'Tom' )
//We use colon ( : ) to assign value to property
//So instead of having many variables we just have one object with all properties and methods
//These grouping of all properties(name, color) and methods (meow) gives us relationship
//inside object we dont have to write function keyword for writing methods
let cat = {
    name: 'Tom',
    color: 'Grey',
    meow(){
        alert("meeeoooowwwwww");
    }
}

//To access these properties we use dot operator
cat.meow();
*/



/*
//Object inside object
let cat = {
    name: 'Tom',
    color: 'Grey',
    meow(){
        alert("meeeoooowwwwww");
    },
    moreInfo: {
        age: 5,
        legs : 4,
        alternate_name: 'JerrysEnemy'
    }
}

//To access object within object we make use of dot operator with nesting object name
alert(cat.moreInfo.alternate_name);
*/



/*
//document is a object that contains all properties and methods of webpage
//addEventListner takes 2 arguments (event , action)
document.addEventListener("click",performAction)

function performAction(){
    alert("Hey you! clicked on screen");
}
*/