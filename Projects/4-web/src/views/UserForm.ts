import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save': this.onSaveClick,
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

  onSaveClick = (): void => {
    this.model.save();
  };

  // setting up the base template
  template(): string {
    return `
			<div>
				<input placeholder='${this.model.get('name')}'/>
				<button class='set-name'>Change name</button>
				<button class='set-age'>Set Random Age</button>
				<button class='save'>Save</save>
			</div>
		`;
  }
}
