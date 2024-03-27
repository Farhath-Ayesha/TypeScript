//Arrays
let fruits: string[] ;
fruits=['Apple', 'Orange', 'Banana'];
console.log(fruits);

let fruits1: Array<string> = ['Apple', 'Orange', 'Banana'];
console.log(fruits1);

let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
console.log(arr);



//Multitypes array
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
console.log(values);

let values1: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(values1); 