// Ask for the users name
const userName = prompt("Welcome to our Javascript Pizzeria. Please enter your name:");

// Check if the user provided a name
if (userName !== null) {
  alert(`Hello, ${userName}! Ready to start?`);
} else {
  alert("You didn't provide a name. Please refresh the page to try again.");
  throw new Error("Name not provided"); // Terminate script
}

// Get the users choice
const foodChoice = prompt(`Please select a food type by entering a number:\n
  1. Pizza\n
  2. Pasta\n
  3. Salad`);

// Variables
let subtype= '';
let orderMessage = '';
let cost = 0;

// Use a switch statement to handle the food choice
switch (foodChoice) {
  case '1':
    // Pizza subtype options
    const pizzaSubtype = prompt(`Please select a subtype of Pizza by entering a number:\n
      1. Margherita\n
      2. Pepperoni\n
      3. Veggie`);
    
    switch (pizzaSubtype) {
      case '1':
        alert('You selected Margherita Pizza. Enjoy!');
        break;
      case '2':
        alert('You selected Pepperoni Pizza. Yummy!');
        break;
      case '3':
        alert('You selected Veggie Pizza. A healthy choice!');
        break;
      default:
        alert('Invalid choice for Pizza subtype. Please refresh the page and choose a valid option.');
        throw new Error("Name not provided"); // Terminate script
    }
    break;
  case '2':
    // Pasta subtype options
    const pastaSubtype = prompt(`Please select a subtype of Pasta by entering a number:\n
      1. Spaghetti Carbonara\n
      2. Fettuccine Alfredo\n
      3. Pesto Linguine`);
    
    switch (pastaSubtype) {
      case '1':
        alert('You selected Spaghetti Carbonara Pasta. Buon appetito!');
        break;
      case '2':
        alert('You selected Fettuccine Alfredo Pasta. Delizioso!');
        break;
      case '3':
        alert('You selected Pesto Linguine Pasta. Tasty choice!');
        break;
      default:
        alert('Invalid choice for Pasta subtype. Please refresh the page and choose a valid option.');
        throw new Error("Name not provided"); // Terminate script
    }
    break;
  case '3':
    // Salad subtype options
    const saladSubtype = prompt(`Please select a subtype of Salad by entering a number:\n
      1. Caesar Salad\n
      2. Greek Salad\n
      3. Cobb Salad`);
    
    switch (saladSubtype) {
      case '1':
        alert('You selected Caesar Salad. Enjoy your healthy meal!');
        break;
      case '2':
        alert('You selected Greek Salad. A refreshing choice!');
        break;
      case '3':
        alert('You selected Cobb Salad. A classic favorite!');
        break;
      default:
        alert('Invalid choice for Salad subtype. Please refresh the page and choose a valid option.');
        throw new Error("Name not provided"); // Terminate script
    }
    break;
  default:
    alert('Invalid choice for food type. Please refresh the page and choose a valid option.');
    throw new Error("Name not provided"); // Terminate script
}

// Ask the user for the age
const ageChoice = prompt('Is the food for a child or an adult? (Enter "child" or "adult")');

// Switch statement for age
switch (ageChoice.toLowerCase()) {
  case 'child':
    // Food for a child
    orderMessage = `You have ordered a ${foodChoice} (${pizzaSubtype || pastaSubtype || saladSubtype}) for a child.`;
    cost = 5;
    break;
  case 'adult':
    // Food for an adult
    orderMessage = `You have ordered a ${foodChoice} (${pizzaSubtype || pastaSubtype || saladSubtype}) for an adult.`;
    cost = 10;
    break;
  default:
    // Invalid choice for age
    alert('Invalid choice for age. Please refresh the page and choose "child" or "adult".');
    throw new Error("Name not provided"); // Terminate script
}

// Display the order message and cost
    const confirmation = prompt(`${orderMessage} The cost is $${cost}. Confirm your order (yes/no):`);
  switch (confirmation.toLowerCase()) {
    case 'yes':
      alert('Order confirmed! Your meal will be prepared. Thank you for choosing our pizzeria!');
      break;
    case 'no':
      alert('Order canceled. Thank you for considering our pizzeria. We hope to serve you in the future!');
      break;
    default:
      alert('Invalid confirmation choice. Your order status is not confirmed. Please contact our customer service.');
  }

