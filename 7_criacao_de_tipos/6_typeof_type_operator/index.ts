type Data<T> = {
    username: string,
    data: T
}

const dadosTipo1: Data<string> = {
    username: 'Emanuel1',
    data: 'testando'
}

const dadosTipo2: Data<number> = {
    username: 'Emanuel2',
    data: 20
}

const dados1: typeof dadosTipo1 = {
    username: 'Emanuel1',
    data: 'testando2'
}

const dados2: typeof dadosTipo2 = {
    username: 'Emanuel2',
    data: 21
}