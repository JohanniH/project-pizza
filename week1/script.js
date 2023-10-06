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
 
  // Step 2 - Food choice
  // Your code goes here
  // Get the users choice
const foodChoice = prompt(
  `Please select a food type by entering a number:\n
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
  
  let subtypeChoice;

// Check the chosen food type (foodChoice) and show the options for each subtype choice
if (foodChoice === '1') {
  // Pizza subtype choices
  subtypeChoice = prompt(
    `Please select a subtype of Pizza by entering a number:\n
    1. Margherita\n
    2. Pepperoni\n
    3. Veggie`
  );

  // Confirm the chosen subtype for Pizza
  if (subtypeChoice === '1') {
    alert('You selected Margherita Pizza. Enjoy!');
  } else if (subtypeChoice === '2') {
    alert('You selected Pepperoni Pizza. Yummy!');
  } else if (subtypeChoice === '3') {
    alert('You selected Veggie Pizza. A healthy choice!');
  } else {
    alert('Invalid choice for a Pizza subtype. Please refresh the page and choose a valid option.');
  }
} else if (foodChoice === '2') {
  // Pasta subtype options
  subtypeChoice = prompt(
    `Please select a subtype of Pasta by entering a number:\n
    1. Spaghetti Carbonara\n
    2. Fettuccine Alfredo\n
    3. Pesto Linguine`
  );

  // Confirm the chosen subtype for Pasta
  if (subtypeChoice === '1') {
    alert('You selected Spaghetti Carbonara Pasta. Buon appetito!');
  } else if (subtypeChoice === '2') {
    alert('You selected Fettuccine Alfredo Pasta. Delizioso!');
  } else if (subtypeChoice === '3') {
    alert('You selected Pesto Linguine Pasta. Tasty choice!');
  } else {
    alert('Invalid choice for a Pasta subtype. Please refresh the page and choose a valid option.');
  }
} else if (foodChoice === '3') {
  // Salad subtype options
  subtypeChoice = prompt(
    `Please select a subtype of Salad by entering a number:\n
    1. Caesar Salad\n
    2. Greek Salad\n
    3. Cobb Salad`
  );

  // Confirm the chosen subtype for Salad
  if (subtypeChoice === '1') {
    alert('You selected Caesar Salad. Enjoy your healthy meal!');
  } else if (subtypeChoice === '2') {
    alert('You selected Greek Salad. A refreshing choice!');
  } else if (subtypeChoice === '3') {
    alert('You selected Cobb Salad. A classic favorite!');
  } else {
    alert('Invalid choice for a Salad subtype. Please refresh the page and choose a valid option.');
  }
} else {
  alert('Invalid choice for a food type. Please refresh the page and choose a valid option.');
}
  
  // Step 4 - Age
  // Your code goes here
  // Ask the user if the food is for a child or an adult
const ageChoice = prompt('Is the food for a child or an adult? (Enter "child" or "adult")');

// Initialize variables
let orderMessage = '';
let cost = 0;

// Check the users input and construct the order message and cost
if (ageChoice.toLowerCase() === 'child') {
  // Food for a child
  orderMessage = `You have ordered a ${foodChoice} (${subtypeChoice}) for a child.`;
  cost = 5;
} else if (ageChoice.toLowerCase() === 'adult') {
  // Food for an adult
  orderMessage = `You have ordered a ${foodChoice} (${subtypeChoice}) for an adult.`;
  cost = 10;
} else {
  // Invalid choice for age
  alert('Invalid choice for age. Please refresh the page and choose "child" or "adult".');
}

// Display the order message and cost
const confirmation = prompt(`${orderMessage} The cost is $${cost}. Confirm your order (yes/no):`);
  
  // Step 5 - Order confirmation
  // Your code goes here
  // Check if the user confirmed the order
  if (confirmation.toLowerCase() === 'yes') {
    alert('Order confirmed! Your meal will be prepared. Thank you for choosing our pizzeria!');
  } else if (confirmation.toLowerCase() === 'no') {
    alert('Order canceled. Thank you for considering our pizzeria. We hope to serve you in the future!');
  } else {
    alert('Invalid confirmation choice. Your order status is not confirmed. Please contact our customer service.');
  }