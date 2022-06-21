import { User } from './models/User';

const user = new User({ name: 'Myname', age: 20 });

user.set({ name: 'Max' });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('Hello!');
});

user.on('change', () => {
  console.log(`This is a message`);
});

user.on('goof', () => {
  console.log(`Shmingus`);
});

user.on('save', () => {
  console.log(`Save was triggered`);
});

console.log(user);

user.trigger('change');
user.trigger('goof');
user.trigger('save');
user.trigger('asdlfjhaslkf');
