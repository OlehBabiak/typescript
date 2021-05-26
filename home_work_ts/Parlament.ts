import {Party} from "./Party";
import {Deputy} from "./Deputy";
class Parlament {
    country: string;
    city: string;
    parties: Party[]
    constructor(country: string, city: string, parties: Party[]) {
        this.country= country
        this.city=city
        this.parties =parties
    }
    addParty(){}
    deleteParty(){}
    allParties(parties: Party[]){
        console.log(parties)
    }
    someParty(parties: Party[]){

    }
}

let Deputy1 = new Deputy('Чорновіл','Петро', 44,'male' ,0.1, 12000, 'OPZG', true )
let Deputy2 = new Deputy('Popovich','Ivan', 32,'male', 0.4, 12000, 'OPZG', false )
let Deputy3 = new Deputy('Kazinak','Petro', 65,'male', 0.6, 8000, 'ZE', true )
let Deputy4 = new Deputy('Chereshnja','Andrij', 37,'male', 0.8, 7000, 'ZE', false )

let Deputy1Status = Deputy1.giveBribe(0.1, 12000, 'Петро', 'Чорновіл')
let Deputy2Status = Deputy2.giveBribe(0.4, 9000, 'Ivan', 'Popovich')
let Deputy3Status = Deputy3.giveBribe(0.6, 12000, 'Petro', 'Kazinak')
let Deputy4Status = Deputy4.giveBribe(0.8, 2000, 'Andrij', 'Chereshnja')

let Party1 = new Party('OPZG', Deputy1, [Deputy1, Deputy2])
let Party2 = new Party('ZE', Deputy3, [Deputy3, Deputy4])

let UkraineParlament = new Parlament('Ukraine', 'Kyiv', [Party1, Party2])


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