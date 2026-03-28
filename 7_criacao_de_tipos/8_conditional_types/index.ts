interface User{
    getName(user:string):string
    setName(value: string):string
}

type hasGetName = User extends {getName(user:string):string} ? 'Tem getName' : 'Não tem getName'