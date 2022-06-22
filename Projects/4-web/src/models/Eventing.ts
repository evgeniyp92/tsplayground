export type Callback = () => void;

export class Eventing {
  protected events: { [key: string]: Callback[] } = {};

  public on = (eventName: string, callback: Callback): void => {
    // if there are no handlers, just fallback to init with an empty array
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  public trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => callback());
  };
}
