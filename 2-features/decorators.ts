// basic class
@classDecorator
class Boat {
  // @testDecorator
  color: string = `red`;

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // adding a decorator to a function
  @logError(`bingus`)
  pilot(@paramDecorator speed: string): void {
    if (speed === 'high') {
      console.log(`swish`);
    } else {
      console.log(`nothing`);
    }
  }
}

// decorator factory - function that returns a decorator
function logError(errorMessage: string) {
  return function (
    _target: any,
    _key: string,
    descriptor: PropertyDescriptor
  ): void {
    // console.log(target);
    // console.log(key);
    // console.log(descriptor);

    /**
 * { pilot: [Function (anonymous)] },
	 pilot,
	{
		value: [Function (anonymous)],
		writable: true,
		enumerable: true,
		configurable: true
	}	
 */

    const method = descriptor.value;
    descriptor.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// parameter decorator
function paramDecorator(target: any, key: string, index: number) {
  console.log(target, key, index);
}

// class decorator
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function testDecorator(t: any, k: string) {
  console.log('Target', t);
  console.log('Key', k);
  console.log(t[k]); // wont work
  // since only methods are hard defined in the class, we cant access instance properties
  // hence we cant get access to properties in decorators
}

// Decorators on a property, method or accessor

/*
 * First arg is the object prototype
 * Second arg is the key of the property/method/accessor
 * Third arg is the property descriptor
 * Decorators are applied when code for the class is ran, not at instantiation
 *
 * Property descriptors describe key properties for methods
 * Writable - whether or not the property can be changed
 * Enumerable - whether or not this propert can get looped over by a forin
 * Value - current value
 * Configurable - Definition can be changed and property can be deleted
 *
 * Think of decorators as closures, or functions encapsulating the root function
 */

new Boat().pilot('fast');
// new Boat().color;
