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
// Sort
console.log(fruits3.sort());
// pop
console.log(fruits3.pop());
// push
console.log(fruits3.push('Papaya'));
console.log(fruits3);
// Concatenate
console.log(fruits3.concat(['Fig', 'Mango']));
// indexOf
console.log(fruits3.indexOf('Apple'));
var fruits4 = ['Apple', 'Orange', 'Banana'];
// lastIndexof
console.log(fruits4.indexOf('Banana'));
// Extract a section of the array and return the new array
console.log(fruits4.slice(1));
// Convert the array to a string
console.log(fruits4.toString());
//Any
var anyType;
anyType = "Not sure of which type";
anyType = 3;
console.log(anyType);
