
# Lab 2: Array Manipulation

## Project Overview

This lab focuses on practicing JavaScript array methods and working with arrays to add, remove, and search for items.

I created a simple shopping list array manipulation, filtering, searching arrays and render list in browser.js files, where users can add items, remove the last item, and view the shopping list on a webpage. I also practiced searching for items in an array using a case-insensitive search.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
Array-Manipulation-Lab2/
│
├── index.html
├── style.css
├── ArrayManipulation.js
├── FilterandSearchArray.js
├── RenderListinBrowser.js
├── reflections.md
└── README.md
```

## Tasks Completed

### Task 1: Array Manipulation Basics

In this task, I created an empty array called `shoppingList` and wrote functions to add, remove, and display items.

- `addItem(item)` uses `push()` to add an item to the array.
- `removeLastItem()` uses `pop()` to remove the last item.
- `displayList()` uses a `for` loop to print each item in the console.

I tested these functions by adding fruits, vegetables, cookies, and chocolates to the shopping list.

### Task 2: Filter and Search an Array

In this task, I modified the `addItem()` function to prevent duplicate items from being added to the shopping list.

I used a `for` loop and a Boolean variable called `exists` to check whether an item was already present in the array.

I also created a `filterItems(searchterm)` function to search for matching items.

- Used `toLowerCase()` to make the search case-insensitive.
- Used `includes()` to check whether an item contains the search term.
- Used `push()` to store matching items in a new array.
- Returned the filtered array using `return`.

For example, searching for `COOK` returns `cookies`, and searching for `FRUIT` returns `fruits`.

### Task 3: Render the List in the Browser

In this task, I created an HTML page to display the shopping list dynamically.

The webpage includes:

- An input field to enter an item.
- An Add Task button.
- A Remove Last Item button.
- An unordered list to display shopping list items.

I used JavaScript DOM methods and event listeners to update the webpage when the user clicks a button.

I also added validation to prevent users from adding empty or duplicate items.

## JavaScript Methods Used

| Method | Purpose |
|--------|---------|
| `push()` | Adds an item to the array |
| `pop()` | Removes the last item from the array |
| `includes()` | Checks whether an item or search term exists |
| `toLowerCase()` | Converts text to lowercase for searching |
| `trim()` | Removes extra spaces from user input |
| `createElement()` | Creates a new HTML element |
| `appendChild()` | Adds an element to the webpage |
| `addEventListener()` | Handles button click events |

## How to Run the Project

1. Download or clone the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server or a web browser.
4. Enter an item in the input field.
5. Click the Add Task button to add the item to the list.
6. Click the Remove Last Item button to remove an item.
7. Open the browser console to view any messages.

To test Task 1 and Task 2 separately, run their JavaScript files using Node.js:

```bash
node ArrayManipulation.js
node FilterandSearchArray.js
```

## Testing

I tested the JavaScript functions with different shopping list items.

- Added multiple items to the shopping list.
- Checked whether duplicate items were prevented.
- Tested searching with uppercase and lowercase letters.
- Tested removing the last item from the array.
- Checked that items were displayed dynamically on the webpage.
- Added an alert message when the input field was empty.

## Challenges and Learning

One challenge was understanding how to prevent duplicate items in the array. I used a `for` loop and a Boolean variable to check whether an item already existed.

Another challenge was implementing the search functionality. I learned how to use `toLowerCase()` and `includes()` to find matching items regardless of uppercase or lowercase letters.

I also practiced working with the DOM to display array items in HTML. I learned how to create list elements dynamically and update the webpage using event listeners.

## Future Improvements

If I had more time, I would like to:

- Add a delete button beside each shopping list item.
- Display messages directly on the webpage instead of using alerts.
- Add search functionality to the browser interface.
- Save shopping list items using localStorage.
- Improve the CSS styling and make the page more responsive.

## Conclusion

This lab helped me understand how to manipulate arrays using JavaScript. I practiced adding and removing items, preventing duplicates, searching arrays, and displaying data dynamically on a webpage.

I also gained more practice using functions, loops, conditionals, DOM methods, and event listeners.
