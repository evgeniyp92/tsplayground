// basic class
class Boat {
  color: string = `red`;

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // adding a decorator to a function
  @logError
  pilot(): void {
    throw new Error();
    console.log(`swish`);
  }
}

function logError(
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
      console.log(`oops`);
    }
  };
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
 */

new Boat().pilot();
