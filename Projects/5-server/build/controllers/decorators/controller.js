"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            // access the route handler in each key
            var routeHandler = target.prototype[key];
            // read the set path
            var path = Reflect.getMetadata('path', target.prototype, key);
        }
    };
}
exports.controller = controller;
