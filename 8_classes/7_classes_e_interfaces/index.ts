interface UserInterface {
    nome: string
    idade: number

    apresentar(): void
    get getNome(): string
    set setNome(nome: string)
}

class User implements UserInterface{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.idade = idade
        this.nome = nome
    }

    apresentar(): void {
        console.log(this.nome, this.idade)
    }

    get getNome(): string {
        return this.nome
    }
    set setNome(nome: string) {
        this.nome = nome
    }
}

const user1 = new User('Emanuel', 22)
user1.setNome = 'Emanuel Victor'
user1.apresentar()