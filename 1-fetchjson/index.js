"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    // const ID = todo.ID;
    // const title = todo.Title;
    // const finished = todo.finished;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n\t\tThe todo with ID: ".concat(id, "\n\t\tHas a title of: ").concat(title, "\n\t\tIs it finished? ").concat(completed, "\n\t"));
});
