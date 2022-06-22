export class Attributes<Type extends object> {
  constructor(private data: Type) {}

  // K can only ever be one of the keys of T
  // returns a value of the relevant key value pair
  public get = <Key extends keyof Type>(key: Key): Type[Key] => {
    return this.data[key];
  };

  public set(update: Type): void {
    Object.assign(this.data, update);
  }
}
