function mostrarNome(nome: string): void{
    console.log(`seu nome é: ${nome}`)
}

mostrarNome('Emanuel')

function somar(n1: number, n2: number): number{
    return n1 + n2
}

console.log(somar(2, 2).toString())

function mostrarFrutas(listaFrutas: string[]): void{
    listaFrutas.forEach(fruta => {
        console.log(fruta)
    })
}

mostrarFrutas(['Uva', 'Pêra', 'Maça'])