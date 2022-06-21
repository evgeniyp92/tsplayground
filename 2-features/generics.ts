// array of numbers
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

// array of strings
class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// array of anything! with generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// init a generic class
const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Function generics
function printStrings(arr: string[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

function printNumbers(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

function printElements<T>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

printElements<string>(['a', 'b', 'c']);

// constraints of generics
// constraints are promises to the type system
class Auto {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    arr[index].print();
  }
}
