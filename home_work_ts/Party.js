"use strict";
exports.__esModule = true;
exports.Party = void 0;
var Party = /** @class */ (function () {
    function Party(name, HeadOfParty, PartyMembers) {
        this.name = name;
        this.HeadOfParty = HeadOfParty;
        this.PartyMembers = PartyMembers;
    }
    Party.prototype.addDeputy = function (name, HeadOfParty, PartyMembers) {
        console.log(HeadOfParty);
    };
    Party.prototype.deleteDeputy = function (name, HeadOfParty, PartyMembers) {
        console.log(PartyMembers);
    };
    return Party;
}());
exports.Party = Party;
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
//вивести фсіх депутатів фракції
