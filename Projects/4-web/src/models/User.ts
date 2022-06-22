import { Eventing, Callback } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosError, AxiosResponse } from 'axios';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

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
  public set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  public fetch(): void {
    const id = this.get('id');
    if (typeof id !== 'number') throw new Error('Cannot fetch without an id');
    this.sync.fetch(id).then((r: AxiosResponse): void => {
      this.set(r.data);
    });
  }

  public save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((r: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch((e: AxiosError) => {
        this.trigger('errror');
      });
  }
}
