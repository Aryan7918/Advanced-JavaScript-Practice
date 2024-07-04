export let message = "ES6 Modules Practice";

export function user(name){
    return `Hello ${name}`;
}

export class student{
    constructor(){
        console.log("Constructor Method");
    }
}

export default function(){
    console.log("Hello, kaiso ho aap?")
}

// export {user, message, student} ; 
// use above technique instead of writing export before every variable or function or class.