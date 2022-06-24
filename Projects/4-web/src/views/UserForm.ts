import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  // setting up the base template
  template(): string {
    return `
			<div>
				<h1>User Form</h1>
				<div>User name: ${this.model.get('name')}</div>
				<div>User age: ${this.model.get('age')}</div>
				<input />
				<button>Click me</button>
				<button class='set-age'>Set Random Age</button>
			</div>
		`;
  }

  bindEvents(fragment: DocumentFragment): void {
    // make a copy of the events map
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      // break out eventName against selector
      const [eventName, selector] = eventKey.split(':');
      // find every element that matches the selector, then apply the callback
      // function associated with it
      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
