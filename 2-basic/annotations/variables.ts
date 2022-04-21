let apples: number = 5;

apples = 10;
apples = 'five';

let speed: string = 'fast';
let hasName: boolean = true;

// empty primitives
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();
let nowNum: Date = Date.now();

// An array of primitives
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let myBooleans: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Adding type annotations for object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// If declaration and initialization is done on the same line then TS will
// figure out the type for us

// Otherwise, we have to annotate the type on our own

// It pays to rely on type inference wherever appropriate
// Where type inference breaks down, that's when we annotate

// 3 places where TS helps out

// 1) When a function returns the any type and we need to clarify it
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we want a variable to have a type that cannot be inferred (fully)
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
