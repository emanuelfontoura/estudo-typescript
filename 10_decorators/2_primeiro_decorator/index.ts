function mostrar(){
    console.log('decorator iniciada')
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log('decorator executada')
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class User{
    @mostrar()
    mostarNome(nome: string){
        console.log(nome)
    }
}

const user1 = new User
user1.mostarNome('Emanuel')