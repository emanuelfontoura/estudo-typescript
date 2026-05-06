class Animal{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    emitirSom(){
        console.log('Som genérico')
    }
}

class Gato extends Animal{
    constructor(nome: string, idade: number){
        super(nome, idade)
    }

    emitirSom(): void {
        console.log('Miau')
    }
}

const gato1 = new Gato('Milk', 3)
gato1.emitirSom()