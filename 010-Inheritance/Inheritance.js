// Inheritance
// Inheritance is a way to create a new class from an existing class.
// The new class is called the derived class and the existing class is called the base class.


class employee{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        console.log("Constructor Employee")
    }
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`)
    } 
}

class manager extends employee{
    constructor(name, age, email, department, salary){
        super(name, age, email);
        this.department = department;
        this.salary = salary;
        console.log("Constructor Manager")
    }
    getDetails(){
        super.getDetails();
        console.log(`Department: ${this.department}, Salary: ${this.salary}`)
    }

}

let a = new manager("Aryan",20,"aryan@email.com","IT",100000 );
console.log(a);
a.getDetails();
