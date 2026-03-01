// Com o TS também é possível determinar os tipos e propriedades de um objeto
type Coordinate = {
    x: number, 
    y: number,
    fator?: number // propriedade opcional
}

function coordinatesMultiply(coord: Coordinate): Coordinate{
    if (coord.fator){
        return {x: coord.x * coord.fator, y: coord.y * coord.fator, fator: coord.fator}
    } else {
        return {x: coord.x, y: coord.y, fator: coord.fator}
    }
}


const coord1: Coordinate = coordinatesMultiply({x: 5, y: 5})

console.log(`As coordenadas são: x: ${coord1.x} e y: ${coord1.y} cujo fator é ${coord1.fator == undefined ? 1 : coord1.fator}`)