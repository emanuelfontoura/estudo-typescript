function modernGreeting(name: string, greet?:string){
    if(greet){
        console.log(`${greet}, ${name}`)
    }else{
        console.log(name)
    }
}

modernGreeting('Emanuel')
modernGreeting('Emanuel', 'Bom dia')