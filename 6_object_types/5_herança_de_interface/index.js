var cat1 = {
    name: 'Milk',
    age: 2,
    meow: function () {
        console.log("".concat(this.name, " meow!"));
    }
};
var dog1 = {
    name: 'Chico',
    age: 6,
    bark: function () {
        console.log("".concat(this.name, " barked!"));
    }
};
cat1.meow();
dog1.bark();
