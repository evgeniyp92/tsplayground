import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<Type> {
  set(update: Type): void;
  getAll(): Type;
  get<Key extends keyof Type>(key: Key): Type[Key];
}

interface Sync<Type> {
  fetch(id: number): AxiosPromise;
  save(data: Type): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasID {
  id?: number;
}

export class Model<Type extends HasID> {
  constructor(
    private attributes: ModelAttributes<Type>,
    private events: Events,
    private sync: Sync<Type>
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
  on2 = this.events.on;

  public get trigger() {
    return this.events.trigger;
  }

  public get get() {
    return this.attributes.get;
  }

  // COORDINATION REQUIRED -----------------------------------------------------
  public set(update: Type): void {
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
