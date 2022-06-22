import { User } from './models/User';

const user = new User({ name: 'newRecord', age: 25 });

// console.log(user.get('name'));

// Reminder of 'this' in JS
const colors = {
  color: 'red',
  printColor() {
    console.log(this.color);
  },
};

colors.printColor();

// Generally, this is equal to whatever is to the left of the function call

const printColor = colors.printColor;
printColor();
