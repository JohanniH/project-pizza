// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
  )
// Ask for the users name
const userName = prompt("Welcome to our Javascript Pizzeria. Please enter your name:");

// Check if the user entered a name
if (userName !== null) {
  // Greet the user
  alert(`Hello, ${userName}! Ready to start?`);
} else {
  // If user canceled the prompt
  alert("You didn't provide a name. Please refresh the page to try again.");
}
// Greet the user
alert(`Hi ${userName}!`);
  
  // Step 2 - Food choice
  // Your code goes here
  // Get the users choice
const foodChoice = prompt(
  `Please select a food type by entering the corresponding number:\n
  1. Pizza\n
  2. Pasta\n
  3. Salad`
);

// Check the users input and display a confirmation message
if (foodChoice === '1') {
  alert('You selected Pizza. Enjoy your meal!');
} else if (foodChoice === '2') {
  alert('You selected Pasta. Bon appétit!');
} else if (foodChoice === '3') {
  alert('You selected Salad. Healthy choice!');
} else {
  alert('Invalid choice. Please refresh the page and choose a valid option.');
}
  
  // Step 3 - Subtype choice
  // Your code goes here
  
  
  // Step 4 - Age
  // Your code goes here
  
  // Step 5 - Order confirmation
  // Your code goes here