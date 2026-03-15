// 1 generic apenas
function firstItem<T>(arr: T[]):T{
    return arr[0]
}

console.log(firstItem<string>(['uva', 'abacaxi', 'goiaba']))

let n:number = firstItem<number>([1, 2, 3])
console.log(n)

function mergeArrays<T>(arr1: T[], arr2: T[]): T[]{
    return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>(['uva', 'banana'], [1, 2, 3]))

// mais de 1 generic
function mergeObjects<U, T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({a: 1, b: 2}, {c: 3, d: 4})
console.log(newObject)