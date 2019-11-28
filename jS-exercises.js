// var sample = "Hello Codeup";
// //
// // sample.length;
// //
// // sample.toLocaleLowerCase();
// //
// // sample = "Students";
// //
// // sample +=
// //
// // sample.replace("Students", "Class");
// //
// // sample =sample.replace("Students", "Class");
// //
// // sample.indexOf("c");
// //
// // sample.substring(6, 12);
// //
// //
// //
// //
// //
// //
// //
// // // You have rented some movies for your kids: The little mermaid (for 3 days),
// // // Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't ' +
// // // 'know yet if they're going to like it). If price for a movie per day is $3,
// // // how much will you have to pay?
// //
// // var rental = 3;
// // var herc = 1;
// // var merm = 3;
// // var bear = 5;
// // (merm + bear + herc) * 3;
// //
// // // Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, '
// // // 'they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. '
// // // 'How much will you receive in payment for this week? You worked 10 hours for Facebook, '
// // // 6 hours for Google and 4 hours for Amazon.
// //
// //
// // var goog =  400;
// // var ama = 380;
// // var face = 350;
// //
// // var googMoney= 6 * goog;
// //
// // console.log(goog * 6)
// //
// // // A student can be enrolled in a class only if the class is not full and the class
// // // schedule does not conflict with her current schedule.
// //
// // var classAt8am = false;
// // var classSize = 125;
// // var currClassSize = 108;
// // var canregister = (currClassSize < classSize) &&
// //     !classAt8am
// //
// // // A product offer can be applied only if a person buys more than 2 items, and the
// // // offer has not expired. Premium members do not need to buy a specific amount of products.
// //
// // var hasHEBcard =true;
// // var cartSize = 6;
// // var offervalid = true;
// // var canHaveDiscount = offervalid && cartSize > 2 || hasHEBcard;
// //
// // canHaveDiscount
// //
// //
// // // Use the following code to follow the instructions below:
// // //
// // //
// // //     var username = 'codeup';
// // // var password = 'notastrongpassword';
// // // Create a variable that holds a boolean value for each of the following conditions:
// // //
// // //     the password must be at least 5 characters
// // // var passlength = (password.length >= 5);
// // // the password must not include the username
// // // var usernameNotInPass = (password.indexOf(username)
// //     // usernameNotInPass =password.indexOf(username) === -1;
// // // the username must be no more than 20 characters
// //      var usernamenotAPARAGRAPH = username.length <=20;
// // // neither the username or password can start or end with whitespace
// // var noWhiteSpace= username.trim() === username && password.trim() === password;

var arr = [1, 2, 6, 3, 4, 5];
arr.push(arr.splice(arr.indexOf(6), 1)[0]);
console.log(arr); // [1, 2, 3, 4, 5, 6]