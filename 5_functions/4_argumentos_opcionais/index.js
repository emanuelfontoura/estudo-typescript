function modernGreeting(name, greet) {
    if (greet) {
        console.log("".concat(greet, ", ").concat(name));
    }
    else {
        console.log(name);
    }
}
modernGreeting('Emanuel');
modernGreeting('Emanuel', 'Bom dia');
