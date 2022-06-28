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

/**
 * Practical use
 */

class Plane {
  color: string = 'red';

  // marking the function to attach metadata
  @markFunction('hello there')
  public fly(): void {
    console.log('vrrrrr');
  }
}

// defining a decorator that applies metadata
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// acessing the metadata
const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret); // hello there
