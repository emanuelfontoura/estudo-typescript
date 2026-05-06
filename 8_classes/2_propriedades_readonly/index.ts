class User {
    nome: string
    idade: number
    readonly classe: string

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
        this.classe = 'user'
    }
}

const user1 = new User('Emanuel', 22)
// user1.classe = '2' 