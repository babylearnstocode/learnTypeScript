const add = (a: number, b: number) => {
  console.log(a + b);
};

const optionalParams = (
  a: number,
  b: number,
  c: number | boolean = 10
): void => {
  console.log(a + b);
  console.log(c);
};

optionalParams(2, 44);

const minus = (a: number, b: number): number => {
  return a - b;
};
let result = minus(33, 3);

//Type Aliases
type StringOrNumb = string | number;
type ObjWithName = { name: string; uid: StringOrNumb };
let greet = (user: { name: string; uid: StringOrNumb }) => {
  console.log(`${user.name} says Hallo`);
};

let greetAgain = (user: ObjWithName) => {
  console.log(`${user.name} says Hallo`);
};

// Funtion signature

let mal: (a: number, b: number) => number;

mal = (a: number, b: number) => {
  return a * b;
};

console.log(mal(4, 5));
