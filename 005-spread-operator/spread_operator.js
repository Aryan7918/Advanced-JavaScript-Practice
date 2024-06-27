// Spread Operator
// Spread Operator is used to expand an array or object into its individual elements.
// It is represented by three dots (...) and is used to copy an array or object.

// Note: A spread operator is effective only when used within array literals, function calls, or initialized properties objects.


// array to value
var a = [10,20,30,40,50,60,70];
console.log(...a);
// output: 10 20 30 40 50 60 70


// array
var a = [10,20,30,40,50,60,70];
console.log([...a]);
// output: [10, 20, 30, 40, 50, 60, 70]


// string into Array
const myName = "Aryan ";
console.log([...myName]);
// ["A","r","y","a","n"," "]


// spread with function
const numbers = [1, 3, 5, 7];
function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));
// 16


// How Spread Works in an Object Literal
const mName = ["Aryan", "Patel"];
const bio = { ...mName, runs: "google.com" };
console.log(bio);
// { 0: "Aryan", 1: "Patel", runs: "google}


// Beware of how spread works when used on objects containing non-primitives!
const myNames = ["Sofela", "is", "my"];
const aboutMes = ["Aryan", ...myNames, "name."];
console.log(aboutMes);

const Name = { 
    fullName: { firstName: "Aryan", lastName: "Patel" }
};  
const bios = { ...Name };
Name.fullName.firstName = "Kano";
console.log(myName); // { fullName: { firstName: "Kano", lastName: "Patel" } }
console.log(bio); // { fullName: { firstName: "Kano", lastName: "Patel" } }