// Typeof tipos primitivos

function somarOuMostrar(valor: number | string):number | void {
    if (typeof valor === 'number'){
        return valor + 10  
    }else{
        console.log('Valor:', valor.toUpperCase());
    }
}

somarOuMostrar(5);
somarOuMostrar('teste');

// Instanceof tipos de classe
class Dog {
    bark(){console.log('Woof')}
}

class Cat {
    meow(){console.log('Meow')}
}

type Pet = Dog | Cat

function animalSound(animal: Pet): void{
    if(animal instanceof Dog){
        animal.bark()
    }else{
        animal.meow()
    }
}

// Usando operador IN
function animalSound2(animal: Pet): void{
    if('bark' in animal){
        animal.bark()
    }else{
        animal.meow()
    }
}

// Usando uma propriedade do próprio objeto
type Square = {
    kind: 'square'
    size: number
}

type Circle = {
    kind: 'circle'
    radius: number
}

type Shape = Circle | Square

function area(shape: Shape): number{
    if(shape.kind === 'square'){
        return shape.size * shape.size
    }else{
        return shape.radius
    }
}

// Usando uma função personalizada que verifica o tipo
function isStringArray(value: unknown): value is string[]{
    return Array.isArray(value) && value.every(v => typeof v === 'string')
}

function mostrarOuSomarArray(value: string[] | number[]): string | number{
    if(isStringArray(value)){
        return value.join(',')
    }else{
        return value.reduce((acc, currentValue) => currentValue + acc, 0)
    }
}