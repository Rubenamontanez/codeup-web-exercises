"use strict";
// var pet1 = "Toby";
// var pet2 = "Princess";
// var pet3 = "Samson";
// var pet4 = "Jill";
// // var pet5 = "Bubbles";
// // var pet6 = "malu";
//
// var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu", "Lily"];
//
// for(var i=0; i<pets.length; i++){
//     console.log(pets[i]);
// }
//
// // pets[pets.length] ="Lily";
// // console.log(pets[pets.length-1]);
//
// pets.forEach(function (pet, i, arr) {
//     console.log(pet);
// })


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

var fruit = ["apple", "orange", "banana"];



// // console.log(fruit);
// // alert("hello");
fruit.push("pear","pineapple", "grape", "apple", "mango");
// // adds to the end of the array
// // fruit.push();
// // fruit.push();
// // fruit.push("mango");
// // console.log(fruit.shift());
fruit.unshift("strawberry");
// console.log(fruit.indexOf("pineapple"));
//
// // console.log(fruit.pop());
// console.log(fruit);
// push and pop modify the end
var fruits1thru3 = fruit.slice(0,3);
// takes only those 3 words without modifiying the string
var fruits5thru8 = fruit.slice(5,8);
console.log(fruits5thru8);
console.log(fruit);



// 9
// arrays-lect.js:102 5
// arrays-lect.js:105 (9) ["strawberry", "apple", "orange", "banana", "pear", "pineapple", "grape", "apple", "mango"]
// fruit.join(",")
// "strawberry,apple,orange,banana,pear,pineapple,grape,apple,mango"
// var nums =[1,2,3,4]
// undefined
// nums.join()
// "1,2,3,4"
// fruit.join()
// "strawberry,apple,orange,banana,pear,pineapple,grape,apple,mango"
// fruit.join("")
// "strawberryappleorangebananapearpineapplegrapeapplemango"

// var paragraph = "Before an array is manipulated, it is sometimes useful to find the index of a particular item. The indexOf and lastIndexOf array methods provide this capability. The indexOf method starts searching from the beginning of an array and will return the first occurrence of what you are looking for. The lastIndexOf starts at the end of the array and works backwards."
// undefined
// paragraph.split(".")
// (5) ["Before an array is manipulated, it is sometimes useful to find the index of a particular item", " The indexOf and lastIndexOf array methods provide this capability", " The indexOf method starts searching from the begi… the first occurrence of what you are looking for", " The lastIndexOf starts at the end of the array and works backwards", ""]0: "Before an array is manipulated, it is sometimes useful to find the index of a particular item"1: " The indexOf and lastIndexOf array methods provide this capability"2: " The indexOf method starts searching from the beginning of an array and will return the first occurrence of what you are looking for"3: " The lastIndexOf starts at the end of the array and works backwards"4: ""length: 5__proto__: Array(0)
// paragraph += "end"
// "Before an array is manipulated, it is sometimes useful to find the index of a particular item. The indexOf and lastIndexOf array methods provide this capability. The indexOf method starts searching from the beginning of an array and will return the first occurrence of what you are looking for. The lastIndexOf starts at the end of the array and works backwards.end"
// paragraph.split(".")
// (5) ["Before an array is manipulated, it is sometimes useful to find the index of a particular item", " The indexOf and lastIndexOf array methods provide this capability", " The indexOf method starts searching from the begi… the first occurrence of what you are looking for", " The lastIndexOf starts at the end of the array and works backwards", "end"]
// var sentences = paragraph.split(".")
// undefined
// sentences
// (5) ["Before an array is manipulated, it is sometimes useful to find the index of a particular item", " The indexOf and lastIndexOf array methods provide this capability", " The indexOf method starts searching from the begi… the first occurrence of what you are looking for", " The lastIndexOf starts at the end of the array and works backwards", "end"]
// var sentences = "the quick brown fox jumps over the lazy dog"
// undefined
// var words = sentences.split(" ")
// undefined
// words
// (9) ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]0: "the"1: "quick"2: "brown"3: "fox"4: "jumps"5: "over"6: "the"7: "lazy"8: "dog"length: 9__proto__: Array(0)

var str = "the quick brown fox jumps over the lazy dog";
var words = str.split(" ");
    console.log(words.slice(1,4));


// // words.forEach(function(word){
// //     // var firstLetter = word.split().unshift();
// //     var letters = word.split()
// // }
//
// function capitalletter(str) {
//     str = str.split(" ");
//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }
//     return str.join(" ");
// }
// console.log(capitalletter(str));
//



