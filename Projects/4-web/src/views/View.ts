// specifying an interface to control for methods and props that need to exist
// on the child interface
interface ModelForView {
  on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends ModelForView> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
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
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
