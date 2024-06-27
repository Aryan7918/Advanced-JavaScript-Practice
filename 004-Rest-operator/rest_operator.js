// rest operator

// JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.

// The rest operator is used to gather the remaining elements into an array.
// The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.


function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}
let output;
output = myBio('Oluwatobi', 'Sofela', 'CodeSweetly', 'Web Developer', 'Male');
document.write(output);    // ['CodeSweetly', 'Web Developer', 'Male'];


// Example 2

function sum(...args){
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// let sum = sum(10,2,0,50,80,90,15,25); 

document.write("<br>" + sum(10,2,0,50,80,90,15,25));
document.write("<br>" + sum(10,15,25) + "<br>");


// Example 3

function total(name, ...args){
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  document.write(name +" " + total);
}

total("Aryan", 20,30,40,50);


