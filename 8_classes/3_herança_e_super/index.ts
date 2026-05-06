class Animal{
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

class Gato extends Animal{
    cor: string

    constructor(nome:string, idade: number, cor: string){
        super(nome, idade)
        this.cor = cor
    }
}

const gato1 = new Gato('Milk', 3, 'Cinza')
gato1.apresentar()

class GatoSelvagem extends Gato{
    habitat: string

    constructor(nome: string, idade: number, cor: string, habitat: string){
        super(nome, idade, cor)
        this.habitat = habitat
    }
}

const gatoSelvagem1 = new GatoSelvagem('Rose', 4, 'Laranja', 'Floresta Amazônica')