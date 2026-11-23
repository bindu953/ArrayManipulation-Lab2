// Task 3: Render the List in the Browser
// Create an HTML page with an input field, an “Add Item” button, and an unordered 
// list to display the items.
// Write a JavaScript function that adds items to the array and updates the displayed 
// list dynamically when the button is clicked.
// Write another function that removes the last item and updates the displayed list when 
// a “Remove Last Item” button is clicked.

 // Get HTML elements
let inputItem = document.getElementById("inputText");
let shoppingListElement = document.getElementById("shoppingList");
let addTaskButton = document.getElementById("addTask");
let removeTaskButton = document.getElementById("removeTask");

let shoppingList = []

// Function to display shopping list in HTML
function displayList() {

    // Clear the existing HTML list
    shoppingListElement.innerHTML = "";

    // Loop through the array
    for (let s = 0; s < shoppingList.length; s++) {

        // Create a new list item
        let li = document.createElement("li");

        // Set the list item text
        li.textContent = shoppingList[s];

        // Add the li element to the ul
        shoppingListElement.appendChild(li);
    }
}

// AddTask button click event
addTaskButton.addEventListener("click",function(){

    //alert("click event working")
    let item = inputItem.value.trim();

    if (item !== "") {

        // Check if item already exists
        if (!shoppingList.includes(item)) {
            shoppingList.push(item);
            displayList();
        } else {

            alert("Item already exists");

        }

        inputItem.value = "";
    }else {

        // Display alert if input is empty
        alert("Please enter an item before adding to the shopping list.");

    }
    
})

// Remove Task button click event
removeTaskButton.addEventListener("click", function() {

    // Remove the last item if shopping list length is greater than 0
    if (shoppingList.length > 0) {

        shoppingList.pop();
        //Update HTML list
        displayList();
    } else {

        alert("Shopping list is empty");

    }
});