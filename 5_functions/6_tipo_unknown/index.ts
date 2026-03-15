let valor: unknown = 'arroz'
//console.log(valor.length) não vai funcionar

if (typeof valor === 'string'){
    console.log(valor.length)
}

let valor2: any = 'feijão'
console.log(valor2.length)