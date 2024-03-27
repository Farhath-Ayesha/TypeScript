//Arrays
var fruits;
fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits);
var fruits1 = ['Apple', 'Orange', 'Banana'];
console.log(fruits1);
var arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
console.log(arr);
//Multitypes array
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(values);
var values1 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(values1);
//Accessing Arrays
var fruits2 = ['Apple', 'Orange', 'Banana'];
console.log(fruits2[0], fruits2[1], fruits2[2]);
//Array Methods
var fruits3 = ['Apple', 'Orange', 'Banana'];
// // lastIndexof
// console.log(fruits3.indexOf('Banana')); // Output: 2
// // Extract a section of the array and return the new array
// console.log(fruits3.slice(1)); // Output: ['Orange', 'Banana']
// // Convert the array to a string
// console.log(fruits3.toString()); // Output: 'Apple,Orange,Banana'
// Sort
console.log(fruits3.sort()); // Output: [ 'Apple', 'Banana', 'Orange' ]
// pop
console.log(fruits3.pop()); // Output: Orange
// push
console.log(fruits3.push('Papaya')); // Output: ['Apple', 'Banana', 'Papaya']
console.log(fruits3);
// Concatenate
console.log(fruits3.concat(['Fig', 'Mango'])); // Output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 
// indexOf
console.log(fruits3.indexOf('Apple')); // Output: 0
var fruits4 = ['Apple', 'Orange', 'Banana'];
// lastIndexof
console.log(fruits4.indexOf('Banana')); // Output: 2
// Extract a section of the array and return the new array
console.log(fruits4.slice(1)); // Output: ['Orange', 'Banana']
// Convert the array to a string
console.log(fruits4.toString()); // Output: 'Apple,Orange,Banana'
