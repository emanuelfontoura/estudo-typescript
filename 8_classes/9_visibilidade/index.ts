class User{
    protected saldo: number = 1000
    private cpf: string = '111'
    public x: number = 1

    get getCPF(){
        return this.cpf
    }
    set setCPF(cpf: string){
        this.cpf = cpf
    }
}

class UserProfissional extends User{ 
    showSaldo(){
        this.x = 2 // -> consegue acessar normal
        // this.cpf -> não consegue acessar
        return this.saldo // -> só consegue acessar por método
    }
}

const teste = new UserProfissional
// teste.saldo -> não consegue acessar diretamente
console.log(teste.showSaldo())