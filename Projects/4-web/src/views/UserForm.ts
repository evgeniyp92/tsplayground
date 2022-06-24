export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onHeaderHover(): void {
    console.log(`h1 was hovered over`);
  }

  onButtonClick(): void {
    console.log('Hi there');
  }

  // setting up the base template
  template(): string {
    return `
			<div>
				<h1>User Form</h1>
				<input />
				<button>Click me</button>
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
