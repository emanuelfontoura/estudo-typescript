class Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(this.nome, this.idade)
    }
}

const pessoa1 = new Pessoa('Emanuel', 22)
pessoa1.apresentar()