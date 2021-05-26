"use strict";
exports.__esModule = true;
exports.Party = void 0;
var Party = /** @class */ (function () {
    function Party(name, HeadOfParty, PartyMembers) {
        this.name = name;
        this.HeadOfParty = HeadOfParty;
        this.PartyMembers = PartyMembers;
    }
    Party.prototype.addDeputy = function (PartyMembers) {
        PartyMembers.push();
        console.log(PartyMembers);
    };
    Party.prototype.deleteDeputy = function (PartyMembers) {
        PartyMembers.pop();
        console.log(PartyMembers);
    };
    Party.prototype.allBribeTakers = function (name, HeadOfParty, PartyMembers) {
    };
    Party.prototype.biggestBribeTaker = function (name, HeadOfParty, PartyMembers) {
    };
    return Party;
}());
exports.Party = Party;
