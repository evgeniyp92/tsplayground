"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('invalid request');
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send('missing property: ', key);
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            // access the route handler in each key
            var routeHandler = target.prototype[key];
            // read the set path
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Middleware, target.prototype, key) ||
                [];
            var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Validator, target.prototype, key) ||
                [];
            var validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray([routePrefix + path], middlewares, false), [validator,
                    routeHandler], false));
            }
        }
    };
}
exports.controller = controller;
