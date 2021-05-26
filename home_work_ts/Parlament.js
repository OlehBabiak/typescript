"use strict";
exports.__esModule = true;
var Party_1 = require("./Party");
var Deputy_1 = require("./Deputy");
var Parlament = /** @class */ (function () {
    function Parlament(country, city, parties) {
        this.country = country;
        this.city = city;
        this.parties = parties;
    }
    Parlament.prototype.addParty = function (parties) {
        parties.push();
        console.log('New Parl: ', parties);
    };
    Parlament.prototype.deleteParty = function (parties) {
        parties.pop();
        console.log('New Parl: ', parties);
    };
    Parlament.prototype.allParties = function (parties) {
        console.log(parties);
    };
    Parlament.prototype.someParty = function (parties) {
    };
    return Parlament;
}());
var Deputy1 = new Deputy_1.Deputy('Чорновіл', 'Петро', 44, 'male', 0.1, 12000, 'OPZG', true);
var Deputy2 = new Deputy_1.Deputy('Popovich', 'Ivan', 32, 'male', 0.4, 12000, 'OPZG', false);
var Deputy3 = new Deputy_1.Deputy('Kazinak', 'Petro', 65, 'male', 0.6, 8000, 'ZE', true);
var Deputy4 = new Deputy_1.Deputy('Chereshnja', 'Andrij', 37, 'male', 0.8, 7000, 'ZE', false);
var Deputy1Status = Deputy1.giveBribe(0.1, 12000, 'Петро', 'Чорновіл');
var Deputy2Status = Deputy2.giveBribe(0.4, 9000, 'Ivan', 'Popovich');
var Deputy3Status = Deputy3.giveBribe(0.6, 12000, 'Petro', 'Kazinak');
var Deputy4Status = Deputy4.giveBribe(0.8, 2000, 'Andrij', 'Chereshnja');
var Party1 = new Party_1.Party('OPZG', Deputy1, [Deputy1, Deputy2]);
var Party2 = new Party_1.Party('ZE', Deputy3, [Deputy3, Deputy4]);
var Party3 = new Party_1.Party('OZ', Deputy2, [Deputy2, Deputy3]);
console.log('P1: ', Party1, 'P2: ', Party2);
var UkraineParlament = new Parlament('Ukraine', 'Kyiv', [Party1, Party2]);
console.log('UK p: ', UkraineParlament);
UkraineParlament.addParty([Party3]);
// - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
//// - додати\видалити депутата з фракції
// // - вивести всіх хабарників фракції
// // - вивести найбільшого хабарника у фрації
// //вивести фсіх депутатів фракції
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності". +
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись, +
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.+
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!+
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо + (як це поєднати з умовою !!! +
// Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!) +
