type NumberString = number | string // pode ser number ou string

function somarOuConcatenar(content1: NumberString, content2: NumberString): NumberString | undefined{
    if (typeof content1 == 'string' && typeof content2 == 'string'){
        return `${content1}${content2}`
    }else if (typeof content1 == 'number' && typeof content2 == 'number'){
        return content1 + content2
    }else {
        return undefined
    }
}

console.log(somarOuConcatenar('2', '2'))

console.log(somarOuConcatenar(2, 2)?.toString())

console.log(somarOuConcatenar(1, '2'))