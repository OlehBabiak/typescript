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
    addDeputy(PartyMembers: Deputy[]){
    PartyMembers.push()
        console.log('NEW party: ', PartyMembers)
    }
    deleteDeputy(PartyMembers: Deputy[]){
        PartyMembers.pop()
        console.log('NEW party: ', PartyMembers)
    }
    allBribeTakers(name: string, HeadOfParty: Deputy, PartyMembers: Deputy[]){


    }
    biggestBribeTaker(name: string, HeadOfParty: Deputy, PartyMembers: Deputy[]){


    }
}



