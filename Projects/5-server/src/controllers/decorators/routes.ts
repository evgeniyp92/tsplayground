import 'reflect-metadata';

export function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, _desc: PropertyDescriptor) {
      // set metadata on the thing being decorated
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder('get');
export const put = routeBinder('put');
export const post = routeBinder('post');
export const del = routeBinder('del');
export const patch = routeBinder('patch');
