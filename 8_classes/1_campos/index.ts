class Carro{

    modelo: string
    ano: number

    constructor(modelo: string, ano: number){
        this.modelo = modelo
        this.ano = ano
    }
}

const carro1 = new Carro('Ford Fusion', 2025)
console.log('modelo', carro1.modelo)