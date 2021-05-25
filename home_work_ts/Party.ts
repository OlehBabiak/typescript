import {Deputy} from "./Deputy";

export class Party {
    name: string;
    HeadOfParty: Deputy;
    PartyMembers: Deputy[]
    constructor(
        name: string,
        HeadOfParty: Deputy,
        PartyMembers: Deputy[]) {
        this.name = name;
        this.HeadOfParty = HeadOfParty;
        this.PartyMembers = PartyMembers
    }
addDeputy(name: string, HeadOfParty: Deputy, PartyMembers: Deputy[]){


    }
}

let Party1 = new Party()

// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
//вивести фсіх депутатів фракції