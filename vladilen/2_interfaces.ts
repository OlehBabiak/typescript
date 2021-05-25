//Інтерфейси - тип для обєктів чи клачів, де вказуємо які поля, ф-ції чи елемнти
// мають бути присутніми. Ні у що не компелюються, потрібні тільки на стадії розробки
interface Rect {
    readonly id: string // readonly - тільки для читання
    color?: string //? - означає що даний параметр не обовязковий
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '32157',
    size: {
        width: 15,
        height: 25
    }
}
rect2.color = 'black ' //нЕ ЗВАЖАЮЧИ НА ТЕ, ЩО ПРИСВОЄННЯ ЗМІННІЙ РОБИМО ЧЕРЕЗ CONST В JS МИ МОЖЕМО
// ЗМІНЮВАТИ ВМІСТ ЗМІННОЇ АЛЕ НЕ ПЕРЕПРИСВОЮВАТИ ЇЙ ЗНАЧЕННЯ

const rect3 = {} as Rect
const rect4 = <Rect> {} //РІвноцінні записи, останній старіший

//======================= Наслідування інтерфейчів
 interface RectWithAria extends Rect{
     getArea: () => number
 }
 const rect5: RectWithAria = {
    id: '123321',
     size: {
        width: 20,
         height: 40
     },
     getArea(): number{
        return this.size.width* this.size.height
     }
 }
 //================================
interface Styles {
[key: string]: string //щоб не перераховувати всі ключі
}
const css: Styles = {
    border: '1 px solid black',
    margiTop: '2px',
    borderRadius: '5px'
}