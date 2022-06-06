let apples: number = 5; // telling typescript that apples is a number
apples = 10; // this is allowed
apples = "10"; // this is not allowed

// type annotations can be used with any kind of value

let speed: string = "fast";
speed = 100; // not allowed

let hasName: boolean = true;

// values with a name identical to the type
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays
// array of strings
let colors: string[] = ["red", "green", "blue"];

// array of numbers
let myNumbers: number[] = [1, 2, 3];

// array of boolean
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// receives an argument of i with type of number and returns void(nothing)
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // type of any
const coordinatesObject: Object = JSON.parse(json); // type of object
const coordinatesAnnotated: { x: number; y: number } = JSON.parse(json);

// in functions like JSON.parse where the return can be a lot of types, TS
// cannot predict that. If you see the 'any' type it means TS has no idea what
// is going to return. Any is still a type, but it has no property refs, so it
// does not make sense to use this in TS

coordinates.bingus(); // TS has no idea what type is, so it will not do anything

// 2) When we declare a variable on one line and init it later
let words = ["red", "green", "blue"];
// let foundWord // has any type
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variables when the type can't be reasonably inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // false if nothing found, number if something found

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
