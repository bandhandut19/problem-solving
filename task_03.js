var square = function (x) {
    return x * x;
};
var double = function (x) {
    return x * 2;
};
var addFive = function (x) {
    return x + 5;
};
var compose = function (f, g, h) { return function (x) {
    return h(g(f(x)));
}; };
var newFunction = compose(square, double, addFive);
var result_03 = newFunction(2);
console.log(result_03);
