type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers & ReadonlyArray<number> = [1, 2, 3, 4, 5]

myNumberArray[0] = 2

//

function showNumbers(numbers: readonly [number, number, number]){
    numbers.forEach(n => console.log(n))
}

showNumbers([1, 2, 3])