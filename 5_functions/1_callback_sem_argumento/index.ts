function executarConsoleLog(f: (tipo: string) => void):void{
    f('arroz')
}

executarConsoleLog((t: string) => console.log(t))