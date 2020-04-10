/*
// push method can mutate(change the array ie it can add an item) the array and return (length of array)
let animals = [{name:'cat', color:'black', age:3},
               {name:'dog', color:'white', age:2},
               {name:'rat', color:'grey', age:1}
]

console.log(animals);
console.log(animals.push({name:'monkey', color:'yellow', age:4}));
console.log(animals);
*/


/*
//map function also iterates through array and only returns data
let animals = [{name:'cat', color:'black', age:3},
               {name:'dog', color:'white', age:2},
               {name:'rat', color:'grey', age:1},
               {name:'monkey', color:'yellow', age:4}
]

let returnedData = animals.map(returnAnimal);

function returnAnimal(){
    return "animal";
}
console.log(returnedData);
*/



/*
//map function iterates through array and for each item calls function (returnAnimalName) and only returns data of array(name)
let animals = [{name:'cat', color:'black', age:3},
               {name:'dog', color:'white', age:2},
               {name:'rat', color:'grey', age:1},
               {name:'monkey', color:'black', age:4}
]

let returnedData = animals.map(returnAnimalName);

function returnAnimalName(input){
    return input.name;
}
console.log(returnedData);
*/



/*
//filter function iterates through array and for each item calls function (returnTrueIfBlackColoredAnimal) 
//only returns data of array(name) if returns true from function (returnTrueIfBlackColoredAnimal)
//and adds data to variable (addedBlackColoredAnimalsIfTrue)
let animals = [{name:'cat', color:'black', age:3},
               {name:'dog', color:'white', age:2},
               {name:'rat', color:'grey', age:1},
               {name:'monkey', color:'black', age:4}
]

let addedBlackColoredAnimalsIfTrue = animals.filter(returnTrueIfBlackColoredAnimal);

function returnTrueIfBlackColoredAnimal(input){
    return input.color == 'black';
}
console.log(addedBlackColoredAnimalsIfTrue);
*/



/*
//To get senior animals (age greater than 3) names having black color
let animals = [{name:'cat', color:'black', age:3},
               {name:'dog', color:'white', age:2},
               {name:'rat', color:'grey', age:1},
               {name:'monkey', color:'black', age:4}
]

//To return name (map)
function returnAnimalName(input){
    return input.name;
}
//To return animals with black color (filter)
function returnTrueIfBlackColoredAnimal(input){
    return input.color == 'black';
}
//To return animals with age greater than 3 (filter)
function returnAnimalWithAgeGreaterThanThree(input){
    return input.age>3;
}

let blackColoredSeniorAnimalNames = animals.filter(returnTrueIfBlackColoredAnimal).filter(returnAnimalWithAgeGreaterThanThree).map(returnAnimalName);
console.log(blackColoredSeniorAnimalNames);
*/