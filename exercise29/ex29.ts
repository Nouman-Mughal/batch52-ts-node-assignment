const favorite_fruits: string[] = ["banana", "apple", "mango"]; // Replace with your favorite fruits

// Check for specific fruits in the array
if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
} else {
  console.log("Oranges are not in your list of favorite fruits.");
}

if (favorite_fruits.includes("grape")) {
  console.log("You really like grapes!");
} else {
  console.log("Grapes are not in your list of favorite fruits.");
}
