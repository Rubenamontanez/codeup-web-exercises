"use strict";
// var pet1 = "Toby";
// var pet2 = "Princess";
// var pet3 = "Samson";
// var pet4 = "Jill";
// var pet5 = "Bubbles";
// var pet6 = "malu";

var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu", "Lily"];

for(var i=0; i<pets.length; i++){
    console.log(pets[i]);
}

// pets[pets.length] ="Lily";
// console.log(pets[pets.length-1]);

pets.forEach(function (pet, i, arr) {
    console.log(pet);
})


// i log pets .length will equal 7
// 0 toby
// 1 Princess
// 2 Samson
// 3 Jill
// 4 Bubbles
// 5 Malu
// 6 Lily



 // pet[0] = "Toby";
 // pet[1] = "Princess";
 // pet[2] = "Samson";
 // pet[3] = "Jill";
 // pet[4] = "Bubbles";
 // pet[5] = "Malu";

 // console.log(pet);

// creating an array with my own



// ALL indexes begin with 0

// var favoriteNumbers = [42,77,22,17,12,3.141952,12]
// undefined
// favoriteNumbers[3]
//
// 17
// favoriteNumbers [7] = -1;
// -1
// favoriteNumbers
// (8) [42, 77, 22, 17, 12, 3.141952, 12, -1]
// favoriteNumbers [3] = 1000;
// 1000
// favoriteNumbers
// (8) [42, 77, 22, 1000, 12, 3.141952, 12, -1]
// favoriteNumbers[2] = "car";
// "car"
// favoriteNumbers
// (8) [42, 77, "car", 1000, 12, 3.141952, 12, -1]
// favoriteNumbers.length
// 8
// favoriteNumbers[1]
//
// 77
// favoriteNumbers[favoriteNumbers.length]
// undefined
// favoriteNumbers[favoriteNumbers.length-1]
// -1

// pet
// // (6) ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu"]
// // pet[pet.length-1]
// // "Malu"

// [] // an empty array

    // [1] // an array with one element
    //
    // [1, 2, 3, 4, 5] // an array with 5 elements
    //
    // ["one", 42, [8, 9, 10]] // an array with 3 elements all of different types
// notice that the array above does *not* have 5 elements, rather the last
// element is itself an array with 3 elements in it