// Class contains Properties(variables) and Methods(functions)
// Class is a blueprint for creating objects


class hello{
    // Properties
    name = "Hello World"; // public property
    #age = 20; // private property
    
    // Methods
    sayHello(){
        console.log(this.name);
    }
}

let a = new hello();
a.sayHello();

// Type of Methods:
// 1. Constructor Method
// 2. Prototype Method
// 3. Static Method

// 1. Constructor Function: 
// Constructor Function call itself when object is created

// 2. Prototype Method 
// Prototype Method is a function that is called when we call a property of an object that is not 
// defined in the object itself.
// It is simple function

// 3. static method:
// static method is used to call without creating object.
// we call static method using class name.method name()
class student{
    constructor(name, age, gender){ //constructor method
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    hey(){ //prototype function
        console.log("Hey " + this.name);
        console.log(`My age is ${this.age} `);
    }

    static staticMethod(){
        console.log("Static Method");
    }

}

let std = new student('Aryan',20,'Male');
std.hey();
student.staticMethod()