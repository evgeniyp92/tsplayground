import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface HasID {
  id?: number;
}

export class Model<T extends HasID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

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

  // extra shorthand getter
  // on2 = this.events.on;

  public get trigger() {
    return this.events.trigger;
  }

  public get get() {
    return this.attributes.get;
  }

  // COORDINATION REQUIRED -----------------------------------------------------
  public set(update: T): void {
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
