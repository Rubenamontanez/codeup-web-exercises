// var make = "Toyota";
// var model = "Sienna";
// var year = 2009;
// var isTitled = true;
// var goGoGo = function(key) {
//     if (key == "correct") {
//         console.log("vroom");
//     } else {
//         console.log("...");
//     }
// }
var car = {
    make: "Toyota",
    model: "Sienna",
    year: 2009,
    isTitled: true,
    options: ["4 wheel drive",
        "heated seats",
        "leather interior"],

    goGoGo: function (key) {
        if (key == "key") {
            console.log("vroom");
        } else {
            console.log("...");
        }
    },
    numberOfWheels:4
}

// console.log("Car was made in "+ car.year);
// console.log("car has these options:");
// car.options.forEach(function(option){
//     console.log(option)});
// car.goGoGo("key");
//
// var teacher = {
//     name: "Daniel",
//     languages: ["English", "Javascript", "Java"],
//     teach: function(language) {
//         if (teacher.languages.includes(language))
//             console.log("Here is some knowledge about "+language);
//         else
//             console.log("blah blah blah");
//     }
// }
// teacher.teach("Java");
//
// var truck = new Object();
// // var cats = new Array();
//
// truck.make = "Tesla";
// truck.model = "CyberTruck";
// truck.year = 2022;
// truck.gogogo = function(){
//     console.log("VROOOM!");
// }
// console.log(car.make);
// car.make = "Dodge";
// console.log(car.make);
//
//
// // cats[3];
// // truck["model"];
// truck["number Of Wheels"] = 3;

var cars = [
    {
        make:"Dodge",
        model: "Challenger",
        year:2015,
        report: function() {
            console.log(this.year + " " + this.make + " " + this.model);
        }
    },
    {
        make:"Ford",
        model:"Shelby GT 500",
        year: 1969,
        report: function() {
            console.log(this.year + " " + this.make + " " + this.model);
        }
    },
    {
        make:"Cadillac",
        model:"Escalade",
        year:2019,
        report: function() {
            console.log(this.year + " " + this.make + " " + this.model);
        }
    }
]
// car.report = function() {
//     console.log(this.year + " " + this.make + " " + this.model);
// }

cars.forEach(function(car){
    car.report();
})

// var liquors = [
//     liquor,
//     {
//         type: "whiskey",
//         brand: "Rebecca Creek"
//     },
//     {
//         type: "bourbon",
//         brand: "Bulleit"
//     },
//     {
//         type: "Gin",
//         brand: "Bombay Saphire"
//     }
// ]


// for (var i = 1; i < 20; i++){console.log(Math.pow(2,i))};
// VM718:1 2
// VM718:1 4
// VM718:1 8
// VM718:1 16
// VM718:1 32
// VM718:1 64
// VM718:1 128
// VM718:1 256
// VM718:1 512
// VM718:1 1024
// VM718:1 2048
// VM718:1 4096
// VM718:1 8192
// VM718:1 16384
// VM718:1 32768
// VM718:1 65536
// VM718:1 131072
// VM718:1 262144
// VM718:1 524288