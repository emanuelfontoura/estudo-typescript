function mostrarNome(nome) {
    console.log("seu nome \u00E9: ".concat(nome));
}
mostrarNome('Emanuel');
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2).toString());
function mostrarFrutas(listaFrutas) {
    listaFrutas.forEach(function (fruta) {
        console.log(fruta);
    });
}
mostrarFrutas(['Uva', 'Pêra', 'Maça']);
