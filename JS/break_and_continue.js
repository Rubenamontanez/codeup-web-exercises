console.log("breaks")
//
// for (var i = 1; i < 100; i++) {
//     if (i % 2 == 0) {
//         // skipping all odd numbers;
//         continue;
//     }
//     if (random === i) {
//         console.log("yikes! Skipping number: " + i);
//     } else {
//         console.log("Here is an odd number: " + i);
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

// class exercise using a do while loop

do {
    var userNumber = Number(prompt("Pick an odd number between 1 and 50"));
    // prompt user to pick a number
    if (userNumber % 2 === 0)
        // means its even gonna alert to pick again
        alert(userNumber + " is not odd, please pick again");
    else if (userNumber < 1 || userNumber > 50)
        // if out of range expected gonna prompt them to pick again
        alert(userNumber + " is not between 1 and 50, please pick again");
    else if (isNaN(userNumber))
        //tells them to pick again
        alert(userNumber + " is not a number, please pick again");
    else {
        alert("congrats you picked the right number");
        break;
    }
} while (true);

for (i =1; i<=50; i +=2)
{
    // start at one when using odd numbers
    if (i === userNumber) {
        console.log("yikes! skipping the number");
        continue;
    }
    console.log("Here is an odd number" + i);
}