class Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    get getNome(){
        return `Nome: ${this.nome}`
    }
}

const pessoa1 = new Pessoa('Emanuel', 22)
console.log(pessoa1.getNome)