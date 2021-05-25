function numberChanger(numberToChange: number | string): string {
if (typeof numberToChange === 'number'){
return numberToChange.toFixed(2)
}
return numberToChange
}
let s = numberChanger('Hello')
console.log(s);
let n = numberChanger(15.21568784867)
console.log(n);

class Car {
    protected year: number;
    protected producer: string;
    power: number = 240;
    constructor(year: number, producer: string) {
        this.year = year
        this.producer = producer
    }
}
let car1 = new Car(2015, 'Ford')
console.log(car1);

class superCar extends Car{
    color: string
    constructor(year: number, producer: string, color: string) {
        super(year, producer);
        this.color = color;
        this.producer = producer;
        this.year = year
    }
}
let car2 = new Car(2011, 'KIA')
let car3 = new superCar(2019, 'Tesla', 'red')
console.log(car2);
console.log(car3);
//============модифікатори доступу
//private = видимий тільки в межах свого класу
//protected = видимий тільки для нащадків
//readonly
//public  - default

class User {
    private password: string;
    email: string;
    constructor(pass: string, mail: string) {
        this.password = pass;
        this.email = mail;
    }
    loginUser(pass: string, mail: string){
        // return pass === this.password && mail === this.email;
        if(pass === this.password && mail === this.email){
            return true
        }
        return false
    }
}
let Oleh = new User('5544684644', 'oleg@ukr.net')
let success = Oleh.loginUser('545465484', 'ifo@mail.ru')
console.log(success);
let Nastja = new User('165566135', 'nastja@ukr.net')
   let success2 = Nastja.loginUser('165566135', 'nastja@ukr.net');
console.log(success2);