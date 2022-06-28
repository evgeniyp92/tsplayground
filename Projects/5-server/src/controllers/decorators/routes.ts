import 'reflect-metadata';

export function get(path: string) {
  return function (target: any, key: string, _desc: PropertyDescriptor) {
    // set metadata on the thing being decorated
    Reflect.defineMetadata('path', path, target, key);
  };
}
