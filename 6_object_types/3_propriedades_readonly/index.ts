interface Car{
    brand: string
    model: string
    year: number
    readonly wheels: number
}

const Car1: Car = {
    brand: 'Fiat',
    model: 'Fiat Uno 1.0M 2012',
    year: 2012,
    wheels: 4
}

Car1.model = 'Fiat Uno 1.0M'
// Car1.wheels = 3 -> vai dar erro pois não é possível alterar uma propriedade readonly