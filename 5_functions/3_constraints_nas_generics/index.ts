function getId<T extends {id: number}>(value: T):number{
    return value.id
}

type User = {
    nome: string,
    idade: number
}

getId<User & {id: number}>({id: 1, nome: 'Emanuel', idade: 22})