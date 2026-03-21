interface Car {
    default: string // vc pode adicionar outras propriedades junto com o index signature, desde que sejam do mesmo tipo
    [key: string]: string // qualquer chave que for uma string, tem por obrigação ter um valor no tipo string
}

const Car1: Car = {
    default: 'x',
    color: 'red',
    model: 'xxxxxx',
    //wheels: 2
}

Car1.commerce = 'Carsales'

//

type ApiResponse = {
    id: number
    [key: string]: string | number
}

const user: ApiResponse = {
    id: 1,
    nome: 'Emanuel',
    idade: 22,
    sexo: 'Masculino'
}