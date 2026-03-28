type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character 

function showValueOfCharacter(character: Character, key: C): Character[C]{
    return character[key]
}

console.log(showValueOfCharacter({name: 'Emanuel', age: 22, hasDriveLicense: true}, 'age'))