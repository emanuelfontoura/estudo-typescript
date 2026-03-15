function coordinatesMultiply(coord) {
    if (coord.fator) {
        return { x: coord.x * coord.fator, y: coord.y * coord.fator, fator: coord.fator };
    }
    else {
        return { x: coord.x, y: coord.y, fator: coord.fator };
    }
}
var coord1 = coordinatesMultiply({ x: 5, y: 5 });
console.log("As coordenadas s\u00E3o: x: ".concat(coord1.x, " e y: ").concat(coord1.y, " cujo fator \u00E9 ").concat(coord1.fator == undefined ? 1 : coord1.fator));
