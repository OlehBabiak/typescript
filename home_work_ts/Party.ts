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
    console.log(HeadOfParty)

    }
    deleteDeputy(name: string, HeadOfParty: Deputy, PartyMembers: Deputy[]){
        console.log(PartyMembers)

    }
    allBribeTakers(name: string, HeadOfParty: Deputy, PartyMembers: Deputy[]){
        console.log(PartyMembers)

    }
    biggestBribeTaker(name: string, HeadOfParty: Deputy, PartyMembers: Deputy[]){
        console.log(PartyMembers)

    }
}



