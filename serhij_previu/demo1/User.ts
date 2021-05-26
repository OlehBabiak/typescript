import {Wife} from "./Wife";

export class User {
    name: string;
    age: number;
    skils: string;
    wife: Wife

    constructor(name: string, age: number, skils: string, wife: Wife) {
        this.name = name;
        this.age = age;
        this.skils = skils;
        this.wife = wife;
    }
    greeting(){
        console.log(`Hello, my name is ${this.name}, I ${this.age} years old, I have wife, her name is 
        ${this.wife.name}, she is ${this.wife.age}, I have this skils ${this.skils}: `)
    }
}

