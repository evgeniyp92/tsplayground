import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  public get(propName: string): number | string | boolean {
    return this.data[propName];
  }

  public set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({ id: 5, name: 'asf', age: 20 });

const id = attrs.get('id');
