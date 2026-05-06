abstract class User{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        console.log(this.nome)
    }
}

class UserProfessional extends User{
}

const user1 = new UserProfessional('Emanuel', 22)
user1.apresentar()