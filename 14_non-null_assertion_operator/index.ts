// As vezes um valor ainda n está disponível e o TS tende a evidenciar como erro, para evitar isso basta usar !
// Vc está inidicando ao TS que o valor não está disponível no momento, mas estará em breve

const h1 = document.getElementById("tituloprincipal")

console.log(h1?.innerText) // ? funciona como um if que só executa tal coisa se a variável não for null

console.log(h1!.innerText) // ! faz o TS ignorar o preenchimento ou não do h1, ou seja, ele remove null e undefined do tipo