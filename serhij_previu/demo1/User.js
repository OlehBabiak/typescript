"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age, skils, wife) {
        this.name = name;
        this.age = age;
        this.skils = skils;
        this.wife = wife;
    }
    User.prototype.greeting = function () {
        console.log("Hello, my name is " + this.name + ", I " + this.age + " years old, I have wife, her name is \n        " + this.wife.name + ", she is " + this.wife.age + ", I have this skils " + this.skils + ": ");
    };
    return User;
}());
exports.User = User;
