import { Eventing, Callback } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  // PASSTHRU METHODS ----------------------------------------------------------
  // bad code
  // public on(eventName: string, callback: Callback) {
  //   this.events.on(eventName, callback);
  // }

  // good code
  // think of it as a forwarder to the actual on function
  public get on() {
    return this.events.on;
  }

  public get trigger() {
    return this.events.trigger;
  }

  public get get() {
    return this.attributes.get;
  }

  // COORDINATION REQUIRED -----------------------------------------------------
}
