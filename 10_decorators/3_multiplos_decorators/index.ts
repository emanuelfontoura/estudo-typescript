function a(){
    console.log('iniciou decorator A')
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log('executou decorator A')
    }
}

function b(){
    console.log('iniciou decorator B')
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ){
        console.log('executou decorator B')
    }
}

class User{
    @a()
    @b()
    executar(){
        console.log('funcao executada')
    }
}

const user1 = new User
user1.executar()