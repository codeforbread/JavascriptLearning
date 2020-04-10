/*
//Array is collection of items(can be numbers, strings, objects)
//Numbers array
let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);
*/


/*
//String array
let stringsArray = ["bat", "cat", "mat", "rat"];
console.log(stringsArray);
*/



/*
//object array
let objectsArray = [{name: "bat","hasNaturalLife":"No"}, {name: "cat","hasNaturalLife":"Yes"}, {name:"mat","hasNaturalLife":"No"},{name:"rat","hasNaturalLife":"Yes"}];
console.log(objectsArray);

//Most popular websites such as twitter has a array of tweet objects
//Facebook has a array of post objects
// In Javascript everything is almost object. (Array has push method),(string has function like toUpperCase).

*/



/*
//To insert an element to array we use dot operator and push method
let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);
//inserting element 6
numbersArray.push(6);
console.log(numbersArray);
*/



/*
//To remove an element from an array we use dot operator and splice method
let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);
//Array starts from 0 index
//splice(from index, number of element to be deleted)
//so item on index 1 is 2 and total number of element to remove is 2 so 2 and 3 will be deleted
numbersArray.splice(1,2);
console.log(numbersArray);
*/



/*
//To access particular item in array we use square brackets with index
let numbersArray = [1, 2, 3, 4, 5];
//to check which item on 4 position we pass 3 since array starts from 0
console.log(numbersArray[3]);
*/



/*
//To access particular item in array having objects
let objectsArray = [{name: "bat","hasNaturalLife":"No"}, {name: "cat","hasNaturalLife":"Yes"}, {name:"mat","hasNaturalLife":"No"},{name:"rat","hasNaturalLife":"Yes"}];
//to check name of item on 4 position we pass 3 since array starts from 0 and the property name
console.log(objectsArray[3].name);
*/




/*
//use method on string (to see object like behavior using dot operator on string )
let catName = 'Tom';
console.log(catName.toUpperCase());
*/



/*
//use method on numbers
let favoriteNumber = 14.28;
console.log(favoriteNumber.toFixed());
*/




