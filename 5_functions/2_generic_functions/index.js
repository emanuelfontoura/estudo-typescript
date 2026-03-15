var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1 generic apenas
function firstItem(arr) {
    return arr[0];
}
console.log(firstItem(['uva', 'abacaxi', 'goiaba']));
var n = firstItem([1, 2, 3]);
console.log(n);
// function mergeArrays<T>(arr1: T[], arr2: T[]): T[]{
//     return arr1.concat(arr2)
// }
// console.log(mergeArrays<number | string>(['uva', 'banana'], [1, 2, 3]))
function mergeArray2(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
console.log(mergeArray2([1, 2, 3], ['uva', 'goiaba']));
console.log([1, 2, 3]);
// mais de 1 generic
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(newObject);
