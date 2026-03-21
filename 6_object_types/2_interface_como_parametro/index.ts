interface Product {
    name: string
    price: number
    isAvailable: boolean
    sale?: boolean
}

// o uso da interface tira a necessidade de ficar redeclarando o tipo em várias funções, além de facilitar manutenções
function showProductDetails(product: Product){
    console.log(
        `The product ${product.name.toLowerCase()} of price $${product.price},00 is ${product.isAvailable ? '' : 'not '}available. ${(product.sale ? "It's sale" : "It's not sale")}`
    )
}

function submitProductInventory(product: Product){
    //
}

function removeProductInventory(product: Product){
    //
}

const Bread: Product = {
    name: 'Bread',
    price: 1,
    isAvailable: true
}

const Coffe: Product = {
    name: 'Coffe',
    price: 4,
    isAvailable: false,
    sale: true
}

showProductDetails(Bread)
showProductDetails(Coffe)
showProductDetails({name: 'Rice', price: 10, isAvailable: true})