var isFetching = false;
var isLoading = true;
var int = 42;
var age = 28;
var num = 3e5;
var message = "Hello, I`m string!";
var numberArray = [1, 1, 2, 5, 7, 11];
var numberArray2 = [1, 1, 2, 5, 7, 11]; //generic types
var words = ['Hello', 'World'];
//Tuple
var contact = ['Oleg', 12345];
console.log(contact["1"]);
//Any
var variable = 42;
variable = 'It`s me';
variable = [];
//=========
function sayMyName(name) {
    console.log(name);
}
sayMyName('Oleh');
//Never Даний тип вказуємо коли ф-ція повертає еррор та ніколи не закінчує своє виконання і або коли вона постійно щось робить
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    // @ts-ignore
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '12345';
