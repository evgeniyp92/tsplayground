import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { NextFunction, RequestHandler, Request, Response } from 'express';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (!req.body) {
      res.status(422).send('invalid request');
    }
    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send('missing property: ', key);
      }
    }
    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      // access the route handler in each key
      const routeHandler = target.prototype[key];
      // read the set path
      const path = Reflect.getMetadata(
        MetadataKeys.Path,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          routePrefix + path,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
