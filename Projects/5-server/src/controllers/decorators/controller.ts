import 'reflect-metadata';
import express from 'express';

export const router = express.Router();

export function controller(routePrefix: string) {
  return function (target: Function) {
    for (const key in target.prototype) {
      // access the route handler in each key
      const routeHandler = target.prototype[key];
      // read the set path
      const path = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        router.get(routePrefix + path, routeHandler);
      }
    }
  };
}
