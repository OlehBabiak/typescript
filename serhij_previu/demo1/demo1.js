"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var Wife_1 = require("./Wife");
function foo(user) {
    user.name.toUpperCase();
    user.greeting();
    user.wife.action();
}
var wife = new Wife_1.Wife('Nastya', 28);
var user = new User_1.User('Oleh', 39, 'I`m fucking cool', wife);
foo(user);
