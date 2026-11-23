// Task 2: Filter and Search an Array
// Modify the addItem function to only add the item if it is not already in the shoppingList array.
// Write a function called filterItems that takes a search term as a parameter 
// and returns all items in the shoppingList that contain that search term (case-insensitive).

//Creating an empty array called shoppingList.
let shoppingList = []

//addItem function to only add the item if it is not already in the shoppingList array.
function addItem(item) {

    //declare exists variable
    let exists = false

    //loop through shopping list array to check if the input paramater item exists
    //if exists set exists to true, display message in console and break from the loop
    for (let s = 0; s < shoppingList.length; s++) {

        if (shoppingList[s] === item) {

            exists = true
            console.log(`Cannot add ${item},${item} already exists in the shoppingList array`)
            break;

        }

    }

    //if exists is false that mean item is not in the list then add item to the list
    if (!exists) {

        shoppingList.push(item)
    }

}

//function removeLastItem that removes the last item 
// from the shoppingList array.
function removeLastItem() {

    //removes the last item from the shoppingList array.
    shoppingList.pop()

    //print shoppingList array
    console.log(shoppingList)

}

//function called displayList that logs all items in the shoppingList 
// array to the console.
function displayList() {

    console.log(`Printing items in the shoppingList array: `)

    // print shoppingList array
    for (let s = 0; s < shoppingList.length; s++) {

        console.log(`${shoppingList[s]}`)
    }

}

//Invoke/call the functions add item, remove item and display list
addItem("fruits")
addItem("vegetables")
addItem("cookies")
addItem("cookies")
addItem("chocolates")
displayList()

//function filterItems that takes a search term as a parameter 
// and returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems(searchterm) {

    
}


