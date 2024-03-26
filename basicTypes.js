"use strict";
// Static type checking
const flower = 'rose';
console.log(flower.toUpperCase());
function myMsg(a) {
    return a.toUpperCase();
}
console.log(myMsg('hello ayesha'));
// Non-exception Failures
// i.
const myData = {
    name: 'ayesha',
    age: 23,
};
console.log(myData.age);
// ii. typos
const myFirstName = 'farhath';
const output = myFirstName.toLowerCase();
console.log(output);
// iii. uncalled functions
function myAge() {
    return Math.random() < 0.5;
}
console.log(myAge());
// basic logic errors
// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   // ...
// } else if (value === "a") {
//   // TypeScript's type checking, which is pointing out that the comparison in the else if block is logically impossible because if value is not equal to "a", it must be "b" according to the ternary expression that defines value.
// }
// Explicit typing
let kk;
kk = 1;
function greet(name, age) {
    console.log(`Hello ${name}, your age  is ${age}`);
}
greet('farhath', 23);
// implicit typing
let herName = 'Ayesha';
