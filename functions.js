//Parameter Annotations
function greet(name, age) {
    console.log("Hello ".concat(name, ", your age  is ").concat(age));
}
greet('farhath', 23);
//Return type annotation
function greet2() {
    return ('Hello farhath');
}
console.log(greet2());
//Functions Which Return Promises
//  async function getFavoriteNumber(): Promise<number> {
//     return 26;
//   }
//   console.log(getFavoriteNumber);
// Anonymous functions
var greet4 = function (name) {
    console.log("Hello, ".concat(name, "!"));
};
greet4('ayesha');
var greet3 = function (name) {
    console.log("Hello, ".concat(name, "!"));
};
greet3("ayesha");
