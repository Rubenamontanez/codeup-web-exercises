"use strict";
// Create two new HTML files, inline_js, and external_js.


// // Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
// //
// //     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// //     Use an alert to show the results of each problem.

// console.log("Hello from external JavaScript")

// // Use the alert function to show a message that says 'Welcome to my Website!'.

// var welcome = alert("welcome to my site!");


// //     Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
// var favColor = "";
//
// favColor = prompt("what is your favorite color?");

// //     For example, if the user enters "blue", your code should alert a message that says:
// //
// //     "Great, blue is my favorite color too!"

// alert("Great, " + favColor + " is my favorite color, too!");

// next exercise!!!!!!!!!!!!!!!!

// // // You have rented some movies for your kids: The little mermaid (for 3 days),
// // // Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't ' +
// // // 'know yet if they're going to like it). If price for a movie per day is $3,
// // // how much will you have to pay?
// //
// var days = alert("Movie rentals are $3 a day!");
//
// var mermRental= prompt("how many days do you want to rent the Little Mermaid?");
// var mermTotal= (parseInt(mermRental)) * 3;
// var mermDays = alert("your total for this will be $" + mermTotal) ;
//
// var hercRental = prompt("How many days do you want to rent Hercules?");
// var hercTotal= (parseInt(hercRental)) * 3;
// var hercDays = alert("your total for this will be $" + hercTotal);
//
// var bearRental = prompt("How many days do you want to rent Brother bear?");
// var bearTotal= (parseInt(bearRental)) * 3;
// var bearDays = alert("your total for this will be $" + bearTotal);
//
// var total = alert ("Your total for all will be $" + (mermTotal + hercTotal + bearTotal));

// class review setup!!!!!!!!!!!!!!

// var dailyRentalRate = Number(prompt("how much is the daily rental rate?"));
// var mermaidDaysRented = Number(prompt("How many days are you renting the litle mermaid?"));
// var herculesDaysRented = Number(prompt("How many days are you renting Hercules?"));
// var brotherBearDaysRented = Number(prompt("How many days are you renting Brother Bear"));
//
// var totalcost = (mermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRate;
// var alertMessage = "You owe $: " + totalcost;
//
// aler(alertMessage);

// // // Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, '
// // // 'they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. '
// // // 'How much will you receive in payment for this week? You worked 10 hours for Facebook, '
// // // 6 hours for Google and 4 hours for Amazon.
// //
// var googHours = prompt("How many hours did you work for Google?");
// var googtotal = (parseInt(googHours)) * 400;
// // var googAlert = alert ("you made " + googtotal);
//
// var amaHours =  prompt("How many hours did you work for Amazon?");
// var amatotal = (parseInt(amaHours)) * 380;
//
// var faceHours =  prompt("How many hours did you work for Facebook?");
// var facetotal = (parseInt(faceHours)) * 380;
//
// var totWorked= alert ("you made $" + (facetotal + amatotal + googtotal));

// class review setup!!!!!!!!!!!!

// var googleRate = Number(prompt("What is your google rate"));
// var amazonRate = Number(prompt("What is your amazon rate"));
// var facebookRate = Number(prompt("What is your facebook rate"));
//
// var googleHours = Number(prompt("How many hours did you work at google? ))
// var amazonHours = Number(prompt("How many hours did you work at amazon? ))
// var facebookHours = Number(prompt("How many hours did you work at facebook? ))
//
// var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
//
// var alertMessage= "Your total pay is: $" + totalPay;
// alert (alertMessage);

// A student can be enrolled in a class only if the class is not full and the class
// schedule does not conflict with her current schedule.
//
    // var classDay = prompt ("What day is class on?");
    // if (classDay === "monday") {
    //    alert("You may not register");
    // } else {
    //     alert ("You may continue registering");
    // }
    //
    // var classSize = prompt("How many students are registered in the class?");
    // if (classSize > 124) {
    //    alert("You may not register");
    // } else {
    //    alert ("You may continue registering");
    // }

// class setup !!!!!!!!!!!!!!!!!!!!

// var classIsNotFull = confirm("class is not full");
// var noScheduleConflicts = confirm("Schedules do not conflict");
//
// console.log("class not full" + classIsNotFull);
// console.log("no schedule conflicts" + noScheduleConflicts);
//
// var studentEnrolls= classIsNotFull && noScheduleConflicts;
// console.log(studentEnrolls);
//
// alert ("Student can enroll: " + studentEnrolls);

// // // A product offer can be applied only if a person buys more than 2 items, and the
// // // offer has not expired. Premium members do not need to buy a specific amount of products.

var numberOfItems = Number(prompt("How many items for checkout"));
var offerValid = confirm("is the offer valid");
var isPremiumMember = confirm("Are you a premium member?");

var discountApplied = offerValid && (isPremiumMember || numberOfItems > 2);

alert("Can use discount: " + discountApplied)