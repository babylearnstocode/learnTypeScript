"use strict";
//function doesn't know what attributes objs have
const addUID1 = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID1({ name: 'test', age: 2222 });
console.log(docOne);
//With generics, allow everything as arg
const addUID2 = (args) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, args), { uid });
};
let docTwo = addUID2({ name: 'test', age: 2222 });
console.log(docTwo.name);
//only allow objects as arg
const addUID3 = (args) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, args), { uid });
};
let docThree = addUID3({ name: 'test', age: 2222 });
console.log(docThree.name);
//only allow objects that have name: string property
const addUID4 = (args) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, args), { uid });
};
let docFour = addUID4({ name: 'test', age: 2222 });
console.log(docFour.age);
const docFive = {
    uid: 1,
    name: 'five',
    data: 'hello'
};
const docSix = {
    uid: 222,
    name: 'six',
    data: { name: 'sixth' }
};
