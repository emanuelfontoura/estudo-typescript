var _a;
function somarOuConcatenar(content1, content2) {
    if (typeof content1 == 'string' && typeof content2 == 'string') {
        return "".concat(content1).concat(content2);
    }
    else if (typeof content1 == 'number' && typeof content2 == 'number') {
        return content1 + content2;
    }
    else {
        return undefined;
    }
}
console.log(somarOuConcatenar('2', '2'));
console.log((_a = somarOuConcatenar(2, 2)) === null || _a === void 0 ? void 0 : _a.toString());
console.log(somarOuConcatenar(1, '2'));
