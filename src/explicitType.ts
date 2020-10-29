//explicit types
let char: string;
let agea: number;
let isLoggedIn: boolean;

agea = 2;

//arrays
let watches: string[] = [];

//union types
let mixedType: (string | number | boolean)[] = [];
mixedType.push(222);
mixedType.push('fefef');
mixedType.push(true);
console.log(mixedType);

let uid: string | number;

//objects
let web: object;
web: {
  name: 'lo';
}

let web2: {
  name: string;
  age: number;
  uxui: string;
  team: string[];
};
