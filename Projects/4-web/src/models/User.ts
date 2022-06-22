import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
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

  public trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => callback());
  }

  public fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((r: AxiosResponse): void => {
        this.set(r.data);
      });
  }

  public save(): void {
    const id = this.get("id");
    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // post
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
