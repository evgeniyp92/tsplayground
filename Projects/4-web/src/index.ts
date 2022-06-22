import { User } from './models/User';

const user = new User({ name: 'newRecord', age: 25 });

// A quick reminder on accessors

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('John', 'Smith');
person.fullName;
