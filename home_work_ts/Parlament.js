"use strict";
exports.__esModule = true;
var Deputy_1 = require("./Deputy");
var Parlament = /** @class */ (function () {
    function Parlament(country, city, parties) {
        this.country = country;
        this.city = city;
        this.parties = parties;
    }
    Parlament.prototype.addParty = function () { };
    Parlament.prototype.deleteParty = function () { };
    Parlament.prototype.allParties = function (parties) {
        console.log(parties);
    };
    Parlament.prototype.someParty = function (parties) {
    };
    return Parlament;
}());
var Deputy1 = new Deputy_1.Deputy('Чорновіл', 'Петро', 44, 'male', 0.1, 12000, 'OPZG', true);
var Deputy2 = new Deputy_1.Deputy('Popovich', 'Ivan', 32, 'male', 0.4, 12000, 'Julia', false);
var Deputy3 = new Deputy_1.Deputy('Kazinak', 'Petro', 65, 'male', 0.6, 8000, 'ZE', false);
var Deputy4 = new Deputy_1.Deputy('Chereshnja', 'Andrij', 37, 'male', 0.8, 7000, 'Poroshenko', false);
var Deputy1Status = Deputy1.giveBribe(0.1, 12000, 'Петро', 'Чорновіл');
var Deputy2Status = Deputy2.giveBribe(0.4, 9000, 'Ivan', 'Popovich');
var Deputy3Status = Deputy3.giveBribe(0.6, 12000, 'Petro', 'Kazinak');
var Deputy4Status = Deputy4.giveBribe(0.8, 2000, 'Andrij', 'Chereshnja');
// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
