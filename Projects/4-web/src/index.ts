import { User } from './models/User';

const user = new User({ name: 'newRecord', age: 25 });

console.log(user.get('name'));
