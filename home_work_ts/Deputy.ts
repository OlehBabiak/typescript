export class Deputy {
    surName: string;
    name: string;
    age: number;
    gender: string;
    honestLevel: number;
    minSizeBribe: number;
    party: string;
    headOfParty: boolean
    constructor(
        surName: string,
        name: string,
        age: number,
        gender: string,
        honestLevel: number,
        minSizeBribe: number,
        party: string,
        headOfParty: boolean) {
        this.surName = surName;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestLevel = honestLevel;
        this.minSizeBribe = minSizeBribe;
        this.party= party;
        this.headOfParty= headOfParty
    }
    giveBribe(honestLevel: number, minSizeBribe: number, surName: string, name: string){
        if (honestLevel < 0.5 || minSizeBribe > this.minSizeBribe * this.honestLevel)
        {return console.log(`Депутат ${surName} ${name} хабарник`)}
        else
        if(minSizeBribe < this.minSizeBribe * this.honestLevel){
            return console.log(`Депутат ${surName} ${name} вагається, можливо він ХАБАРНИК `)
        }else if(minSizeBribe < this.minSizeBribe)
        {return console.log(`Депутат ${surName} ${name} - молодець, відмовився`)}
    }
}
let Deputy1 = new Deputy('Чорновіл','Петро', 44,'male' ,0.1, 12000, 'OPZG', false )
let Deputy2 = new Deputy('Popovich','Ivan', 32,'male', 0.4, 12000, 'Julia', false )
let Deputy3 = new Deputy('Kazinak','Petro', 65,'male', 0.6, 8000, 'ZE', false )
let Deputy4 = new Deputy('Chereshnja','Andrij', 37,'male', 0.8, 7000, 'Poroshenko', false )

let Deputy1Status = Deputy1.giveBribe(0.1, 12000, 'Петро', 'Чорновіл')
let Deputy2Status = Deputy2.giveBribe(0.4, 9000, 'Ivan', 'Popovich')
let Deputy3Status = Deputy3.giveBribe(0.6, 12000, 'Petro', 'Kazinak')
let Deputy4Status = Deputy4.giveBribe(0.8, 2000, 'Andrij', 'Chereshnja')


// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності". +
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.

// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо + (як це поєднати з умовою !!!
// Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!)