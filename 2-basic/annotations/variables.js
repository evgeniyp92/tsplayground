"use strict";
var apples = 5;
apples = 10;
apples = 'five';
var speed = 'fast';
var hasName = true;
// empty primitives
var nothingMuch = null;
var nothing = undefined;
// Built in objects
var now = new Date();
var nowNum = Date.now();
// An array of primitives
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var myBooleans = [true, true, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Adding type annotations for object literal
var point = {
    x: 10,
    y: 20,
};
// Functions
var logNumber = function (i) {
    console.log(i);
};
// If declaration and initialization is done on the same line then TS will
// figure out the type for us
// Otherwise, we have to annotate the type on our own
// It pays to rely on type inference wherever appropriate
// Where type inference breaks down, that's when we annotate
// 3 places where TS helps out
// 1) When a function returns the any type and we need to clarify it
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
// 2) When we declare a variable on one line and then initialize it later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
