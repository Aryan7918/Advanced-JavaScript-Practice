// Destructuring Arrays
// old technique
let user = ["Aryan", 20, "Kadi"];
// let name = user[0];
// let age = user[1];
// let city = user[2];

// New technique
let student = ["Aryankumar", "Aug", "Mahesana"];
let [firstname, month, District] = student;
console.log(firstname);
document.write(firstname + "<br>");

// Example 2
let [firstnames, months, districts, state="gujarat"] = student;
console.log(state);// gujarat
document.write(state + "<br>");//gujarat

// Example 3
let  users = ["Aryan",[200000,"Male"]];
let [name,[salary,Gender]] = users;
console.log(salary); //200000
document.write(salary + "<br>"); // 200000

// Example 4
let usersss = ["Aryan", 20, "Kadi"];
let [name1, ...args] = usersss;
console.log(args); // [20, Kadi]
document.write(args + "<br>"); // [20, Kadi]

// Example 5
function Student([name, age=20, city]){
    console.log(name + " " + age + " " + city);
    document.write("Name: "+ name + "<br>"+ "Age: " + age + "<br>"+ "City: " + city);
}
Student(["Aryan",20,"Kadi"]);

// Example 6
function User(){
    return ["Aryan",20,"Kadi"];
}
let [name2,age2, city2] = User();