// Destructuring Objects
const person = {    
    name: 'Aryan',
    age: 20
}
let {name, age} = person;
console.log(name, age); // Aryan 20

// Note: Make property name same as variable name.

let user = {
    name: "Aryan",
    age: 20,
    city: "Kadi"
}
let {name:n , age:a, city:c} = user;
console.log(n, a, c); // Aryan 20 Kadi

