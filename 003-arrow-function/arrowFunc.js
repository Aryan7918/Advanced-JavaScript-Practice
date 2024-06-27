// Arrow Functions

// without arrow function
let hello = function(){
    return "Hello";
}
console.log(hello());

// With arrow function
let hellos = () => {
    return "Hello World!";
}
console.log(hellos());

// You have to call function using variable name
// New method
const sub = (a, b) => a - b;
console.log(sub(80, 50));

document.querySelector("h1").innerText = hellos();