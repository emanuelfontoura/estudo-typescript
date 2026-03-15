function executarConsoleLog(f) {
    f('arroz');
}
executarConsoleLog(function (t) { return console.log(t); });
