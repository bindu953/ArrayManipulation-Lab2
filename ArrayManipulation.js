// Task 1: Array Manipulation Basics
// Create an empty array called shoppingList.
// Write a function called addItem that takes an item as a parameter 
// and adds it to the shoppingList array.
// Write a function called removeLastItem that removes the last item 
// from the shoppingList array.
// Write a function called displayList that logs all items in the shoppingList 
// array to the console.

//Creating an empty array called shoppingList.
let shoppingList = []

//Functionthat takes an item as a parameter 
// and adds it to the shoppingList array.
function addItem(item) {

    //add item to the shopppingList array
    shoppingList.push(item)

    // Display success message
    console.log(`Item Added: "${item}" has been added to the shopping list.`)

}

//function removeLastItem that removes the last item 
// from the shoppingList array.
function removeLastItem() {

    if (shoppingList.length > 0) {

        let removedItem = shoppingList.pop();

        console.log(`Item Removed: "${removedItem}" has been removed from the shopping list.`);

    } else {

        console.log("Cannot remove item. The shopping list is empty.");
    }

}

//function called displayList that logs all items in the shoppingList 
// array to the console.
function displayList() {

    console.log("\n----- Current Shopping List -----")

    // print shoppingList array
    for (let s = 0; s < shoppingList.length; s++) {

        console.log(`${s + 1}. ${shoppingList[s]}`);
    }

}

//Invoke/call the functions add item, remove item and display list
addItem("fruits")
addItem("vegetables")
addItem("cookies")
addItem("chocolates")
displayList()
removeLastItem()
displayList()

