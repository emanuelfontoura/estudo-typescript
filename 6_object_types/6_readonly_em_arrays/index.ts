let fruits: ReadonlyArray<string> = ['Uva', 'Laranja', 'Banana']

console.log(fruits)

// fruits[0] = 'teste' -> vai dar erro pois a array não pode ser alterada, apenas lida

// fruits.push -> não tem o método push, pois não é possível adicionar novos elementos na array

fruits = fruits.map(fruit => `Fruta: ${fruit}`) // se quiser alterar algum item ou todos os itens, terá de usar o método MAP

console.log(fruits)