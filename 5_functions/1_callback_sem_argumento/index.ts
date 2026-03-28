function executarConsoleLog<T>(f: (tipo: T) => void, data: T):void{
    f(data)
}

executarConsoleLog<string>((t) => console.log(t), 'OLÁ')