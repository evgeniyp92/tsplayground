interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  // events is an object, key names are unknown but they will be strings and
  // will point at arrays of callbacks
  private events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  public get(propName: string): number | string {
    return this.data[propName];
  }

  public set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  public on(eventName: string, callback: Callback): void {
    // if there are no handlers, just fallback to init with an empty array
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  public trigger(eventName: string): void {}
}
