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



// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності". +
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись, +
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.

// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо + (як це поєднати з умовою !!!
// Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!)
