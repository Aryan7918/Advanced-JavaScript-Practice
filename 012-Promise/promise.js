// Promises are used to handle asynchronous operations and can be in one of three states: pending, fulfilled, or rejected.

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise is in one of three states: pending, fulfilled, or rejected

function fetchUserId(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const users = {
                1: {name: 'Aryan', age: 20},
                2: {name: 'Jay', age: 21},
                3: {name: 'Rohan', age: 22},
            }

            const user = users[userId];
            if(user){
                resolve(user);
            }else{
                reject('User not found');
            } 
        
        }, 1000); 
            
    });
}

fetchUserId(1)
.then(user=>{console.log(`User data:- Age: ${user.age}, Name: ${user.name}`)})
.catch(err=>{console.error('Error: ', err)});