//Stores Data of firstForm
let firstFormData = document.getElementById("firstForm");
//Stores Data of firstInput
let firstInputData = document.getElementById("firstInput");
//Stores Data of firstULData
let firstULData = document.getElementById("firstUL");

//Create Event once submitted data in the form
firstFormData.addEventListener("submit",(e) => {
    e.preventDefault();
    addItemInTheList(firstInputData.value);
});

//To add data in the todo list
function addItemInTheList(input){
    let ulHtmlData = `<li> ${input} <button onclick="deleteItem(this)">Delete</button> </li>`;
    firstULData.insertAdjacentHTML("beforeend",ulHtmlData);
    //To clear data in input field
    firstInputData.value = "";
    //To make to cursor inside input blink
    firstInputData.focus();
}

//To remove data from need to do
function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove();
}