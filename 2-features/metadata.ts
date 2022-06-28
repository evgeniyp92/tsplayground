/**
 * Metadata lets us attach information to an object after object instantiation
 */

// import reflect metadata like this, it will add itself to the global scope
import 'reflect-metadata';

const plane = {
  color: 'red',
};

// adding metadata to the plane object
// this will not reflect in any console.log
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(plane);

console.log(note);
console.log(height);

// associating metadata with an existing prop
Reflect.defineMetadata('note', 'hello there', plane, 'color');
const otherNote = Reflect.getMetadata('note', plane, 'color');
console.log(otherNote);
