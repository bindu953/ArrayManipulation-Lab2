// Task 3: Render the List in the Browser
// Create an HTML page with an input field, an “Add Item” button, and an unordered 
// list to display the items.
// Write a JavaScript function that adds items to the array and updates the displayed 
// list dynamically when the button is clicked.
// Write another function that removes the last item and updates the displayed list when 
// a “Remove Last Item” button is clicked.

// Get HTML elements
let itemInput = document.getElementById("item-input");
let shoppingList = document.getElementById("shopping-list");
let addToListBtn = document.getElementById("add-btn");
let removeToListBtn = document.getElementById("remove-btn");

// AddTask button click event
addToListBtn.addEventListener("click", function () {

    //alert("click event working")
    let item = itemInput.value.trim();

    if (item !== "") {

        // Check if item already exists
        let existingItems = shoppingList.querySelectorAll("li");
        let exists = false;
        for (let s = 0; s < existingItems.length; s++) {

            if (existingItems[s].textContent.toLowerCase() === item.toLowerCase()) {
                exists = true;
                break;
            }
        }
        // Check if duplicate item exists
        if (exists) {

            alert("Item already exists in the shopping list.");
            itemInput.focus();
            return;
        }
        const li = document.createElement("li")
        li.innerText = item
        shoppingList.appendChild(li)
        itemInput.value = ""
        itemInput.focus()
    } else {

        // Display alert if input is empty
        alert("Please enter an item before adding to the shopping list.");

    }

})

// Remove Task button click event
removeToListBtn.addEventListener("click", function () {

    //Remove the last item if shopping list length is greater than 0
    if (shoppingList.children.length > 0) {

        shoppingList.lastElementChild.remove()

    } else {

        alert("Shopping list is empty");

    }
});