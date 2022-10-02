const country = "Bangladesh";
console.log(country);

/* 
// normal variable
let b: string | number;

// array 
let a: (string | number) [] = [];

b = 'Emon';
a.push('Emon', 21);

// objects
let c: {
    name: string,
    age: number,
    adult: boolean
}

c =  {
    name:  "emon",
    age: 21,
    adult: true,
}
*/

/*
// 05 Dynamic Type OR any Type.
//variable
let a: any;

a = 5;
a =  "Emon";

//Array
let array: any[] = [];
array.push(21, 'emon');

//objects
let b: {
    name: any,
    age: any
}
b = {
    name: 'Bangladesh',
    age:  21
}
*/

// Lesson 6 How to use Function - TypeScript 
// let myFunc = Function ;
let myFunc = (a: number, b: number, c: string = "true")=> {
    return a + b;
};
myFunc(4,5, "false");