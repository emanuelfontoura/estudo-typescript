// CONSISTE EM JÁ DEDFINIR NOS PARAMETROS DO CONSTRUCTOR AS PROPRIEDADES

class User{
    constructor(public nome: string, private saldo: number, protected x: number){
        this.nome = nome
        this.saldo = saldo
        this.x = x
    }
}

const newUser = new User('Emanuel', 22, 100)