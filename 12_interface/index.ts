interface Point{
    x: number,
    y: number,
    z: number
}

// Ai vem a pergunta: qual a diferença entre type e interface? já q o type faria a mesma coisa, tipo:
type Point2 = {
    x: number,
    y: number,
    z: number
}

// Primeira diferença: interface pode ser acrescentada
interface Point{
    fator?: number
}

// --> ts une automaticamente as duas, virando: interface Point{x: number, y:number, z: number, fator?: number}
// --> com o type isso n é possível

// Segunda diferença: interface pode gerar herança
interface PointX extends Point{
    fatorCambial: number
}

// --> para fazer isso com type vc teria que usar o insersection type com &
// --> algo assim: type PointX = Point2 & {fatorCambial: number}

// --> Portanto, o uso de interface é mais apropriado para uso em objetos/entidades, enquanto o type é mais apropriado para composição 
// --> e lógica de tipos