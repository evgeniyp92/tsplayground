import { AxiosPromise } from 'axios';

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

export class Model {}
