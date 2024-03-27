
//Parameter Annotations

function greet(name: string, age: number){
    console.log(`Hello ${name}, your age  is ${age}`);
}

greet('farhath', 23);

//Return type annotation
function greet2(): string{
    return('Hello farhath');
 }

 console.log(greet2());

 //Anonymous Functions
const greet4 = function(name: string) {
    console.log(`Hello, ${name}!`);
};
greet4('ayesha');

const greet3 = (name: string) => {
    console.log(`Hello, ${name}!`);
};

greet3("ayesha");

