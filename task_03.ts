const square = (x: number): number => {
  return x * x;
};

const double = (x: number): number => {
  return x * 2;
};

const addFive = (x: number): number => {
  return x + 5;
};

const compose = (f: Function, g: Function, h: Function) => (x: number) => {
  return h(g(f(x)));
};

const newFunction = compose(square, double, addFive);

const result_03 = newFunction(2);
console.log(result_03);
