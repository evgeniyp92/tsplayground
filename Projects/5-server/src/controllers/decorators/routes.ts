import 'reflect-metadata';
import { Methods } from './Methods';

export function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, _desc: PropertyDescriptor) {
      // set metadata on the thing being decorated
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
