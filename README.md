
# Lab 2: Array Manipulation

## Project Overview

In this lab, I practiced JavaScript array methods and DOM manipulation by creating a simple shopping list application.

The lab is divided into three tasks. In the first two tasks, I worked with arrays to add, remove, display, and search for items. In the third task, I created a webpage where users can add and remove shopping list items dynamically.

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

- Used `push()` to add items to the shopping list array.
- Used `pop()` to remove the last item from the array.
- Created a `displayList()` function using a `for` loop to print each item in the console.
- Tested the functions by adding fruits, vegetables, cookies, and chocolates.

### Task 2: Filter and Search an Array

In this task, I modified the `addItem()` function to prevent duplicate items from being added to the array.

I used a `for` loop and a Boolean variable called `exists` to check whether an item was already in the shopping list.

I also created a `filterItems(searchterm)` function to search for matching items.

- Used `toLowerCase()` to make the search case-insensitive.
- Used `includes()` to check whether an item contains the search term.
- Used `push()` to add matching items to a new array called `searchList`.
- Returned the matching items using `return`.

For example, searching for `COOK` returns `cookies`, and searching for `FRUIT` returns `fruits`.

### Task 3: Render the List in the Browser

In this task, I created a simple shopping list webpage using HTML, CSS, and JavaScript.

The webpage allows users to:

- Enter an item using an input field.
- Add items by clicking the Add Item button.
- Display items dynamically in an unordered list.
- Prevent empty items from being added.
- Check for duplicate items before adding them.
- Remove the last item using the Remove Last Item button.

I used `getElementById()` to access HTML elements and `addEventListener()` to handle button clicks.

When the user clicks the Add Item button, JavaScript gets the input value and checks whether it is empty or already exists in the list.

I used `querySelectorAll()` and a `for` loop to check for duplicate items.

If the item is valid, I used `createElement()` to create a new `<li>` element and `appendChild()` to display it inside the shopping list.

After adding an item, the input field is cleared using `value = ""`, and `focus()` places the cursor back in the input field.

For removing items, I used `children.length` to check whether the list contains any items and `lastElementChild.remove()` to remove the last displayed item.

In Task 3, I updated the HTML directly using DOM methods instead of storing the displayed items in a separate JavaScript array.

## How to Run the Project

1. Clone or download the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server or a web browser.
4. Enter an item in the input field.
5. Click the Add Item button to add it to the shopping list.
6. Try entering the same item again to test duplicate checking.
7. Click the Remove Last Item button to remove the last displayed item.
8. Open the browser console to check for errors.

### Testing Task 1 and Task 2

To run Task 1 and Task 2 separately, use the VS Code terminal:

```bash
node ArrayManipulation.js
node FilterandSearchArray.js
```

## Testing

I tested the application with different inputs and shopping list items.

- Added multiple items to the shopping list.
- Checked that duplicate items were not added.
- Tested adding an empty item.
- Tested searching with uppercase and lowercase letters in Task 2.
- Removed the last item from the shopping list.
- Checked the alert message when the shopping list was empty.
- Verified that items were displayed dynamically on the webpage.
- Tested clearing the input field and focusing it after adding an item.

## Challenges and Learning

One challenge was understanding how to check for duplicate items. I used a `for` loop and a Boolean variable to check whether an item already existed.

Another challenge was implementing case-insensitive searching. I learned how to use `toLowerCase()` with `includes()` to find matching items.

While working on Task 3, I practiced creating HTML elements dynamically using JavaScript. I also learned the difference between manipulating arrays and modifying HTML elements directly.

I had to correct small mistakes in my code, such as using `value` instead of `Value` and checking `children.length` instead of `length` for HTML elements.

## Future Improvements

If I had more time, I would like to:

- Add a search input to filter shopping list items directly on the webpage.
- Add a Delete button next to each item.
- Save shopping list items using `localStorage`.
- Display messages on the webpage instead of using alerts.
- Improve the CSS styling for mobile screens.
- Connect the browser shopping list to a JavaScript array.

## Conclusion

This lab helped me practice JavaScript array methods, functions, loops, conditionals, and DOM manipulation.

I learned how to add, remove, and search for items in arrays and how to create and remove HTML elements dynamically.

It also helped me better understand how JavaScript interacts with HTML to make a webpage interactive.
