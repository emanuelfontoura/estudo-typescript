function getKey<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key]
}

interface Pessoa{
    nome: string
    idade: number
    sexo: string
}

const pessoa: Pessoa = {
    nome: 'Emanuel',
    idade: 22,
    sexo: 'Masculino'
}

console.log(getKey(pessoa, 'nome'))