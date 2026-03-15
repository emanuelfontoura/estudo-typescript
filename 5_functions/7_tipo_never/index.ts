// funções com never
function erro():never{
    throw new Error('erro')
}

// function loopInfinito(): never{
//     while (true){}
// }

// funções com void
function mostrarNome(nome: string): void{
    console.log(nome)
}