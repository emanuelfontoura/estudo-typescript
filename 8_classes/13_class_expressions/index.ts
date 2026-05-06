const user = class<T>{
    nome: string

    constructor(nome: string){
        this.nome = nome
    }

    apresentar(){
        console.log(this.nome)
    }
}

const user1 = new user<string>('Emanuel')
user1.apresentar()