// 1) написать интерфейс Animal который описывает:
//     тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bird = /** @class */ (function () {
    function Bird(lang, mooveType) {
        this.lang = lang;
        this.mooveType = mooveType;
    }
    Bird.prototype.animalInfo = function () {
        return "The bird " + this.mooveType + " and say " + this.lang;
    };
    return Bird;
}());
var crow = new Bird('Karr', 'fly');
var duck = new Bird('Krja', 'swim');
var birdInfoCrow = crow.animalInfo();
var birdInfoDuck = duck.animalInfo();
console.log(birdInfoCrow);
console.log(birdInfoDuck);
var Cat = /** @class */ (function () {
    function Cat(lang, mooveType) {
        this.lang = lang;
        this.mooveType = mooveType;
    }
    Cat.prototype.animalInfo = function () {
        return "The cat " + this.mooveType + " and say " + this.lang;
    };
    return Cat;
}());
var myCat = new Cat('miu', 'run');
var catInfoMyCat = myCat.animalInfo();
console.log(catInfoMyCat);
var Fish = /** @class */ (function () {
    function Fish(lang, mooveType) {
        this.lang = lang;
        this.mooveType = mooveType;
    }
    Fish.prototype.animalInfo = function () {
        return "The fish " + this.mooveType + " and say " + this.lang;
    };
    return Fish;
}());
var karasj = new Fish('nothing', 'swim');
var fishInfoKarasj = karasj.animalInfo();
console.log(fishInfoKarasj);
// 2) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(side1, side2, side3) {
        var _this = _super.call(this) || this;
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.side1 + this.side2 + this.side3;
    };
    Triangle.prototype.area = function () {
        return (this.side1 + this.side2 + this.side3) / 2;
    };
    return Triangle;
}(Shape));
var triangle1 = new Triangle(20, 40, 30);
var triangle2 = new Triangle(15, 20, 10);
var triangle3 = new Triangle(35, 35, 15);
var triangle4 = new Triangle(25, 20, 30);
var allTriangles = [triangle1, triangle2, triangle3, triangle4];
for (var _i = 0, allTriangles_1 = allTriangles; _i < allTriangles_1.length; _i++) {
    var triangle = allTriangles_1[_i];
    var areaes = triangle.area();
    var perimetres = triangle.perimeter();
    console.log('triangle areaes: ', areaes, 'triangle perimetres: ', perimetres);
}
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(side1, side2) {
        var _this = _super.call(this) || this;
        _this.side1 = side1;
        _this.side2 = side2;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.side1 * this.side2;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.side1 + this.side2);
    };
    return Rectangle;
}(Shape));
var rectangle1 = new Rectangle(20, 40);
var rectangle2 = new Rectangle(15, 20);
var rectangle3 = new Rectangle(35, 35);
var rectangle4 = new Rectangle(25, 20);
var allRectangles = [rectangle1, rectangle2, rectangle3, rectangle4];
for (var _a = 0, allRectangles_1 = allRectangles; _a < allRectangles_1.length; _a++) {
    var rectangle = allRectangles_1[_a];
    var areaes = rectangle.area();
    var perimetres = rectangle.perimeter();
    console.log('rectangle areaes: ', areaes, 'rectangle perimetres: ', perimetres);
}
