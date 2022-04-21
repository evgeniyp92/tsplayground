"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n\t\tThe todo with ID: ".concat(id, "\n\t\tHas a title of: ").concat(title, "\n\t\tIs it finished? ").concat(completed, "\n\t"));
};
