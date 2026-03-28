function exibirDado<T>(dado: T): string{
    return `O dado é ${dado}`
}

console.log(exibirDado(5))
console.log(exibirDado('Testando'))
console.log(exibirDado({a: 1, b: 2}))