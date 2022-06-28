import 'reflect-metadata';

export function controller(routePrefix: string) {
  return function (target: Function) {
    for (const key in target.prototype) {
      // access the route handler in each key
      const routeHandler = target.prototype[key];
      // read the set path
      const path = Reflect.getMetadata('path', target.prototype, key);
    }
  };
}
