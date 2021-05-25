class TypeScript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name: string){
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel // Змінну model можемоперезаписати тільки в середині конструктора
    }
}

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {  // Ідентичний запис верхньому
    }
}
//================= Модифікатори=======================

