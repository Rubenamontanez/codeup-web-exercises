// "use strict";
//
// console.log("loops exercise");
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
//  Exercise # 2
//
// // var i = 2;
// // while (i <= 65537){
//  want the loop to run till we get to the certain value
// //     console.log(i);
// //     //
// //     i*=2
// i*= multiplies the input *2
// // }
//
//Exercise # 3
//
// var allCones = Math.floor(Math.random() * 50) + 50;
// var coneCount = Math.floor(Math.random() * 5) + 1;

// // var i = 50;
// //
// // do {
// //     console.log('while loop iteration #' + i);
// //     i--;
// // } while (i <= 0);
//
// var i = 50;
// do{
//     console.log("cones sold");
//     ;
// }while (i >= 0);
// console.log("Yay, I sold them all");

// generate total number of cones happens only once and was already assigned to us
// customer wantst to buy x amount of cones, use your own variable conesPurchased
// check the number of cones available to purchase (check to see if we have enough cones to sale)
// if not we send sorry message
// if we do still good message
//if we do subtract sold from total cones available
//repeat until no more cones left
// using a do while loop repeat until no more cones left allCones > 0


var allCones = Math.floor(Math.random() * 50) + 50;
do{
//    this is how many cones are purchased by each customer
var coneCount = Math.floor(Math.random() * 5) + 1;
    //checks if theres enough cones tot sell
    if (coneCount > allCones){
    //    sorry message
        var notEnoughConesMessage= "cannot sell you " + coneCount  + " I only have + allCones" + "....";
        console.log(notEnoughConesMessage);
    } else{
    //    good message
        allCones -= coneCount;
        var goodCones = coneCount + "cones sold ... " + allCones + " cones to go";
        console.log(goodCones)
    }
} while (allCones > 0);
    console.log("yay i sold all the cones");