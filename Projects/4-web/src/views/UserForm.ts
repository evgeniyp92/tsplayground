import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    const name = input?.value;
    name && this.model.set({ name });
  };

  // setting up the base template
  template(): string {
    return `
			<div>
				<h1>User Form</h1>
				<div>User name: ${this.model.get('name')}</div>
				<div>User age: ${this.model.get('age')}</div>
				<input />
				<button class='set-name'>Change name</button>
				<button class='set-age'>Set Random Age</button>
			</div>
		`;
  }
}
