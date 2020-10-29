"use strict";
const add = (a, b) => {
    console.log(a + b);
};
const optionalParams = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
optionalParams(2, 44);
const minus = (a, b) => {
    return a - b;
};
let result = minus(33, 3);
let greet = (user) => {
    console.log(`${user.name} says Hallo`);
};
let greetAgain = (user) => {
    console.log(`${user.name} says Hallo`);
};
// Funtion signature
let mal;
mal = (a, b) => {
    return a * b;
};
console.log(mal(4, 5));
