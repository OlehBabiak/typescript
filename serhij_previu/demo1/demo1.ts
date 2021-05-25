import {User} from "./User";
import {Wife} from "./Wife";

function foo(user: User) {
    user.name.toUpperCase()
    user.greeting();
    user.wife.action()
}
let wife = new Wife('Nastya', 28);
let user = new User('Oleh', 39, 'I`m fucking cool', wife)
foo(user)