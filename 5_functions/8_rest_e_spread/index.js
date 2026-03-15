function mostrar() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(Array.isArray(args));
}
mostrar(1, 2, 3);
