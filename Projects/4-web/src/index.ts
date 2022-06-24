import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const rootDiv = document.getElementById('root');
  if (rootDiv) {
    new UserList(rootDiv, users).render();
  }
});

users.fetch();
