"use strict";
var apples = 5; // telling typescript that apples is a number
apples = 10; // this is allowed
apples = "10"; // this is not allowed
// type annotations can be used with any kind of value
var speed = "fast";
speed = 100; // not allowed
var hasName = true;
// values with a name identical to the type
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// Arrays
// array of strings
var colors = ["red", "green", "blue"];
// array of numbers
var myNumbers = [1, 2, 3];
// array of boolean
var truths = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20,
};
// Function
// receives an argument of i with type of number and returns void(nothing)
var logNumber = function (i) {
    console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json); // type of any
var coordinatesObject = JSON.parse(json); // type of object
var coordinatesAnnotated = JSON.parse(json);
// in functions like JSON.parse where the return can be a lot of types, TS
// cannot predict that. If you see the 'any' type it means TS has no idea what
// is going to return. Any is still a type, but it has no property refs, so it
// does not make sense to use this in TS
coordinates.bingus(); // TS has no idea what type is, so it will not do anything
// 2) When we declare a variable on one line and init it later
var words = ["red", "green", "blue"];
// let foundWord // has any type
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}
// 3) Variables when the type can't be reasonably inferred
var numbers = [-10, -1, 12];
var numberAboveZero = false; // false if nothing found, number if something found
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
