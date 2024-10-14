// Exercise 1 : Find the numbers divisible by 23
// 1. Create a function call displayNumbersDivisible() that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.
// Bonus: Add a parameter divisor to the function.

function displayNumbersDivisible(divisor = 23) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log(sum);
}

displayNumbersDivisible();
displayNumbersDivisible(3);
displayNumbersDivisible(45);

// Exercise 2 : Shopping List
// 1. Add the stock and prices objects to your js file.
// 2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
//    It means that you have 1 banana, 1 orange and 1 apple in your cart.
// 3. Create a function called myBill() that takes no parameters.
// 4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//    The item must be in stock. (Hint : check out if .. in)
//    If the item is in stock find out the price in the prices object.
// 5. Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
  bill = 0;
  for (i in shoppingList) {
    if (stock[shoppingList[i]] > 0) {
      bill += prices[shoppingList[i]];
      stock[shoppingList[i]]--;
    }
  }
  console.log(bill);
}

myBill();

// Exercise 3 : What’s in my wallet ?
// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//    an item price
//    and an array representing the amount of change in your pocket.
// 2. In the function, determine whether or not you can afford the item.
//    If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item),
//     the function should return true
//    If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item)
//     the function should return false

function changeEnough(itemPrice, amountOfChange) {
  let change =
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.1 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;

  return change >= itemPrice;
}

console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 4 : Vacations Costs
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost() {
  let nights;
  while (isNaN(nights) || nights <= 0) {
    nights = prompt("For how many nights are you going to stay?");
  }
  nights = Number(nights);
  return nights * 140;
}

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost() {
  let destination;
  while (typeof destination !== "string" || destination.trim() === "") {
    destination = prompt("Where are you going?");
  }
  if (destination.toLowerCase() === "london") {
    return 183;
  } else if (destination.toLowerCase() === "paris") {
    return 220;
  } else {
    return 300;
  }
}

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost() {
  let days;
  while (isNaN(days) || days <= 0) {
    days = prompt("For how many days are you going to rent a car?");
  }
  days = Number(days);
  const cost = days * 40;
  return days > 10 ? cost * 0.95 : cost;
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation
//  by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside
// the function totalVacationCost().
//
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the
//  totalVacationCost() function. You need to change the 3 first functions, accordingly.

function totalVacationCost() {
  let hotel = hotelCost();
  let plane = planeRideCost();
  let car = rentalCarCost();
  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`
  );
}

totalVacationCost();
