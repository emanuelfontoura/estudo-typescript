class User<T>{
    nome: string
    idade: number
    prop: T

    constructor(nome: string, idade: number, prop: T){
        this.nome = nome
        this.idade = idade
        this.prop = prop
    }

    teste<U>(x: T, y: U){
        console.log('testando')
    }
}

const user1 = new User<number[]>('Emanuel', 22, [1, 2, 3])
user1.teste<string[]>([1, 2, 3], ['teste1', 'teste2'])