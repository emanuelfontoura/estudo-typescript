// o uso da interface tira a necessidade de ficar redeclarando o tipo em várias funções, além de facilitar manutenções
function showProductDetails(product) {
    console.log("The product ".concat(product.name.toLowerCase(), " of price $").concat(product.price, ",00 is ").concat(product.isAvailable ? '' : 'not ', "available. ").concat((product.sale ? "It's sale" : "It's not sale")));
}
function submitProductInventory(product) {
    //
}
function removeProductInventory(product) {
    //
}
var Bread = {
    name: 'Bread',
    price: 1,
    isAvailable: true
};
var Coffe = {
    name: 'Coffe',
    price: 4,
    isAvailable: false,
    sale: true
};
showProductDetails(Bread);
showProductDetails(Coffe);
showProductDetails({ name: 'Rice', price: 10, isAvailable: true });
