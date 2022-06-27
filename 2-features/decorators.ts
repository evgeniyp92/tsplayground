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

function logError(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

// Decorators on a property, method or accessor

/*
 * First arg is the object prototype
 * Second arg is the key of the property/method/accessor
 * Third arg is the property descriptor
 * Decorators are applied when code for the class is ran, not at instantiation
 */
