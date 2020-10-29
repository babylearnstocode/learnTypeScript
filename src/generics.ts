//function doesn't know what attributes objs have
const addUID1 = (obj: object) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...obj, uid };
};

let docOne = addUID1({ name: 'test', age: 2222 });

console.log(docOne);

//With generics, allow everything as arg
const addUID2 = <T>(args: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...args, uid };
};

let docTwo = addUID2({ name: 'test', age: 2222 });
console.log(docTwo.name);

//only allow objects as arg
const addUID3 = <T extends object>(args: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...args, uid };
};

let docThree = addUID3({ name: 'test', age: 2222 });
console.log(docThree.name);

//only allow objects that have name: string property
const addUID4 = <T extends { name: string }>(args: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...args, uid };
};

let docFour = addUID4({ name: 'test', age: 2222 });

console.log(docFour.age);

//with interfaces
interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const docFive: Resource<string> = {
  uid: 1,
  name: 'five',
  data: 'hello'
};

const docSix: Resource<object> = {
  uid: 222,
  name: 'six',
  data: { name: 'sixth' }
};
