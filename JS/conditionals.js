"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var numEntered = confirm("would you like to enter a number");
var enteredNum =  Number(prompt("Please enter a number"));
var firstAnswer = (enteredNum & 1) ? "odd" : "even";
var secAnswer = enteredNum + 100;


if (enteredNum > 0) {
   alert("your number is " + firstAnswer);
   alert("Your number plus 100 is " + secAnswer);
   alert("Your number is Positive");
} else if (enteredNum < 0){
   alert("your number is " + firstAnswer);
   alert("Your number plus 100 is " + secAnswer);
   alert("Your number is negative");
}  else {
   alert("you didnt enter a number");
}
//
// function pickaNumber(enteredNum) {
//    if (enteredNum > 0) {
//    alert("your number is " + firstAnswer);
//    alert("Your number plus 100 is " + secAnswer);
//    alert("Your number is Positive");
// } else if (enteredNum < 0){
//    alert("your number is " + firstAnswer);
//    alert("Your number plus 100 is " + secAnswer);
//    alert("Your number is negative");
// }  else if( isNaN(enteredNum)) {
//    alert("you didnt enter a number");
// }
// }
// console.log(pickaNumber(10));

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(input){
//    if (input === "blue"){
//       return "Blue is the color of the sky";
//    } else if (input === "red"){
//       return "Strawberries are red";
//    } else if (input === "cyan"){
//       return "I don't know anything about cyan";
//    } else {
//       return "That's not one of the colors";
//    }
// }
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// var colorPreference = prompt("Input your color");
//
// switch(colorPreference) {
//    case "blue":
//       alert("Blue is the color of the sky");
//       break;
//    case "red":
//       alert("Strawberries are red");
//       break;
//    case "cyan":
//       alert("I dont know anything about cyan");
//       break;
//    default:
//       alert(colorPreference + " isn't one of my colors!");
//       break;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//  var colorSelection = prompt("input a color");
// function analyzeColor(input){
//    if (colorSelection === "blue"){
//       alert("Blue is the color of the sky");
//    } else if (colorSelection === "red"){
//       alert("strawberries are red")
//    } else if (colorSelection === "cyan"){
//       alert("I don't know anything about cyan");
//    } else {
//       alert("That's not one of the colors");
//    }
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(discount,total){
// if(discount === 0){
//     return total;
// }else if (discount === 1){
//     return total * .10;
// }else if (discount === 2){
//     return total * .25;
// } else if (discount === 3){
//    return total * .35;
// }else if (discount === 4){
//    return total * .50;
// }else(discount === 5)
//    return 0;
// }
// console.log(calculateTotal(0,100));
// console.log(calculateTotal(1,100));
// console.log(calculateTotal(2,100));
// console.log(calculateTotal(3,100));
// console.log(calculateTotal(4,100));
// console.log(calculateTotal(5,100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = Number(prompt("What was your bill total?"));

function calculateTotal() {
   alert("your lucky number was " + luckyNumber);
   alert("Your price before discount was " + totalBill);
   if (luckyNumber === 0) {
      alert("you dont get a discount");
   } else if (luckyNumber === 1) {
      alert("your price after discount is $" + (totalBill - totalBill * .10));
   } else if (luckyNumber === 2) {
      alert("your price after discount is $" + (totalBill - totalBill * .25));
   } else if (luckyNumber === 3) {
      alert("your price after discount is $" + (totalBill- totalBill * .35));
   } else if (luckyNumber === 4) {
      alert("your price after discount is $" + (totalBill - totalBill* .50));
   } else {
      alert("your price after discount is $" + 0);
   }
}
console.log(calculateTotal());
