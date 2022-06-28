"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = exports.routeBinder = void 0;
require("reflect-metadata");
function routeBinder(method) {
    return function (path) {
        return function (target, key, _desc) {
            // set metadata on the thing being decorated
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.routeBinder = routeBinder;
exports.get = routeBinder('get');
exports.put = routeBinder('put');
exports.post = routeBinder('post');
exports.del = routeBinder('del');
exports.patch = routeBinder('patch');
