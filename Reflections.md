
# Lab 2: Array Manipulation – Reflection Questions

### 1. How did array methods like `push()` and `filter()` help you manipulate data in this activity?

The `push()` method helped me add new items to my shopping list array. I also used `pop()` to remove the last item from the list. For searching, I used `includes()` to check whether an item already existed before adding it. I practiced filtering items based on a search term and used `toLowerCase()` to make the search case-insensitive. These methods made it easier to update the array and show the results on my webpage.

### 2. What challenges did you face when trying to filter and search for items in the array?

One challenge was understanding how to search for part of an item name instead of only an exact match. I learned to use `includes()` with `toLowerCase()` so a search like `COOK` could find `cookies`. While working on the page, I fixed small mistakes with element IDs and the spelling of the `click` event.

### 3. How would you modify this code to make it more efficient or user-friendly?

I would add a message when a user tries to add an empty item or a duplicate item. I would also show a message when no items match the search term. To make the app easier to use, I could add a delete button beside each item instead of only removing the last item. I could have added search functionality. I would also like to save the shopping list using `localStorage` so the items stay there after refreshing the page. Finally, I could improve the CSS styling for smaller screens.
