// 1) написать интерфейс Animal который описывает:
//     тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
//

interface Animal {
    mooveType: string;
    lang: string;
    animalInfo():string
}
class Bird implements Animal{
    mooveType: string;
    lang: string;
        constructor(lang: string, mooveType: string) {
        this.lang = lang;
        this.mooveType = mooveType;
    }
    animalInfo(): string {
        return `The bird ${this.mooveType} and say ${this.lang}`
    }

}

let crow = new Bird('Karr', 'fly')
let duck = new Bird('Krja', 'swim')
let birdInfoCrow = crow.animalInfo()
let birdInfoDuck = duck.animalInfo()
console.log(birdInfoCrow)
console.log(birdInfoDuck)

class Cat implements Animal{
    mooveType: string;
    lang: string;
    constructor(lang: string, mooveType: string) {
        this.lang = lang;
        this.mooveType = mooveType;
    }
    animalInfo(): string {
        return `The cat ${this.mooveType} and say ${this.lang}`
    }

}

let myCat = new Cat('miu', 'run')
let catInfoMyCat = myCat.animalInfo()

console.log(catInfoMyCat)

class Fish implements Animal{
    mooveType: string;
    lang: string;
    constructor(lang: string, mooveType: string) {
        this.lang = lang;
        this.mooveType = mooveType;
    }
    animalInfo(): string {
        return `The fish ${this.mooveType} and say ${this.lang}`
    }

}

let karasj = new Fish('nothing', 'swim')
let fishInfoKarasj = karasj.animalInfo()

console.log(fishInfoKarasj)



// 2) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract  class Shape {
    abstract perimeter(): number
    abstract area(): number
}

class Triangle extends Shape{
    side1:number;
    side2:number;
    side3:number
    constructor(side1:number, side2:number, side3:number) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3
    }
    perimeter(): number {
        return this.side1 + this.side2 + this.side3
    }
    area(): number {
        return (this.side1 + this.side2 + this.side3)/2
    }
}

let triangle1 = new Triangle(20,40,30)
let triangle2 = new Triangle(15,20,10)
let triangle3 = new Triangle(35,35,15)
let triangle4 = new Triangle(25,20,30)

let allTriangles = [triangle1, triangle2, triangle3, triangle4]
for (const triangle of allTriangles) {
    let areaes = triangle.area()
    let perimetres = triangle.perimeter()
    console.log('triangle areaes: ', areaes, 'triangle perimetres: ', perimetres)
}

class Rectangle extends Shape{
    side1: number;
    side2: number;
    constructor(side1: number, side2: number) {
        super();
        this.side1 = side1;
        this.side2 = side2;
    }

    area(): number {
        return this.side1 * this.side2;
    }

    perimeter(): number {
        return 2 * (this.side1 + this.side2);
    }
}

let rectangle1 = new Rectangle(20,40)
let rectangle2 = new Rectangle(15,20)
let rectangle3 = new Rectangle(35,35)
let rectangle4 = new Rectangle(25,20)

let allRectangles = [rectangle1, rectangle2, rectangle3, rectangle4]
for (const rectangle of allRectangles) {
    let areaes = rectangle.area()
    let perimetres = rectangle.perimeter()
    console.log('rectangle areaes: ',areaes, 'rectangle perimetres: ',perimetres)
}