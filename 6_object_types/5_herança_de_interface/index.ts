interface Animal {
    name: string
    age: number
}

interface Dog extends Animal{
    bark():void
}

interface Cat extends Animal{
    meow():void
}

const cat1: Cat = {
    name: 'Milk',
    age: 2,
    meow(){
        console.log(`${this.name} meow!`)
    }
}

const dog1: Dog = {
    name: 'Chico',
    age: 6,
    bark(){
        console.log(`${this.name} barked!`)
    }
}

cat1.meow()
dog1.bark()

interface Patient{
    name: string
    age: number
    disease: string
}

type CatPatient = Cat & Patient
type DogPatient = Dog & Patient

const catPatient1: CatPatient = {
    name: 'Milk',
    age: 2,
    disease: 'seila',
    meow(){
        //
    }
}

const dogPatient1: DogPatient = {
    name: 'Chico',
    age: 6,
    disease: 'seila',
    bark(){
        //
    }
}