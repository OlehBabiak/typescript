const isFetching:boolean = false;
const isLoading: boolean = true;

const int: number = 42
const age: number = 28
const num: number = 3e5

const message: string = "Hello, I`m string!"

const numberArray: number[] = [1, 1, 2, 5, 7, 11]
const numberArray2: Array<number> = [1, 1, 2, 5, 7, 11] //generic types

const words: string[] = ['Hello', 'World']

//Tuple

const contact: [string, number] = ['Oleg', 12345]
console.log(contact["1"])

//Any

let variable: any = 42
variable = 'It`s me'
variable = []

//=========
function sayMyName(name: string):void {  //пустий тип для ф-цыії, яка нічого не повертає
    console.log(name);
}
sayMyName('Oleh')

 //Never Даний тип вказуємо коли ф-ція повертає еррор та ніколи не закінчує своє виконання і або коли вона постійно щось робить
function throwError(message: string): never {
throw new Error(message)
}

function infinite(): never{
// @ts-ignore
    while (true){
}
}

// TYPE Дозволяє створювати свої власні типи
type Login = string
const login:Login = 'admin'

type ID = string | number // такий код в JS не відображається
const id1:ID = 1234
const id2:ID = '12345'

type someType = string | null | undefined




