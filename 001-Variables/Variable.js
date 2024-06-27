// Topic 1

// Variable & Constant

// There are 2 Variables and 1 Constant
// Variable is a container to store data
// Constant is a container to store data that cannot be changed
// Variable and Constant are declared with var, let, or const keyword

// Var is from ES5 version
// Let & const are from ES6 version

// Var is not recommended to use anymore because it has some issues 
// Let & const are recommended to use instead of var

// Var is function scope.
// Let & const are block scope.(braces scope)

// using var you can redeclare variable. 
// Example:

var x = 20;
var x = 30; //redeclaration
x = 40;
console.log("x :" + x); //40

// using let you cannot redeclare variable.
// Example:
let y = 20;
// let y = 30; //error
y = 50;
console.log("y :" + y); //40


//var: Function scope example
if(x>20) {
    var abc = 20;
    console.log(abc);
}
console.log(abc)
//output: 20, 20

//let & const: Block scope example
if(x>20) {
    let abcd = 50;
    console.log(abcd);
}
console.log(abcd);
//output: 50, error