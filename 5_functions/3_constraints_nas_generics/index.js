function firstItem(arr, f) {
    return f(arr[0]);
}
firstItem(['uva', 'goiaba', 'melancia'], function (t) {
    console.log(t);
    return t;
});
