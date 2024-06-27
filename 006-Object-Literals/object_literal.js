// Old technique

let name = "Aryan";
let obj={
    name:name
};
console.log(obj);

// new technique
// name of object property must be same as the variable name.
let fullname = "Aryankumar Patel"
let obj1 = {
    fullname,
    age:20
};
console.log(obj1);

let arr = [1,2,3,4,5];
let obj2 = {
    arr,
    name:"Aryan",   
    age:20
};
console.log(obj2);
// Output:{arr: Array(5), name: 'Aryan', age: 20}
console.log(obj2.arr[0]);
// Output:1


// If you want to use variable's value as a name of property then use [] and write variable name inside the []. 
// ex: 1 

let firstName = "Aryankumar";
let obj3 = {
    [firstName]: "Patel",
    age:20
};
console.log(obj3);
// Output:- Aryan : 'Patel', age:20
 
// Ex: 2

let server = "Apache";
let obj4 = {
    [server+"2A"]: "Server",
    power : "2 MW",
    detail : function(){   // old method
        return `${this.Apache2A} has required ${this.power} unit`;
    }
};
console.log(obj4);
console.log(obj4.detail());

// new method
let obj5 = {
    [server+"2A"]: "Server",
    power : "2 MW",
    detail(){   // New method in ES6
        return `${this.Apache2A} has required ${this.power} unit`;
    }
};
console.log(obj5);
console.log(obj5.detail());


// 
let lastname = "Patel";
let courses = "Javascript"
function student(lastname, courses){
    return {lastname, courses}; // You can return only courses or lastname
}

var std = student(lastname, courses);
console.log(std)
document.write(std.courses);