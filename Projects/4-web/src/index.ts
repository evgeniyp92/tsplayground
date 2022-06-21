import { User } from './models/User';

const user = new User({ name: 'Myname', age: 20 });

user.set({ name: 'Max' });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('Hello!');
});
user.on('change', () => {});
user.on('goof', () => {});

console.log(user);
