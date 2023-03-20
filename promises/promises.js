let promise = new Promise(function(resolve, reject) {
    alert("hello")
    resolve(56)
})



console.log("hello jii 1");
setTimeout(function(){
    console.log("haan jiii in 2 sec  2");
}, 2000)

console.log("my name is "+ "Rashu  3");

console.log(promise);

// promise is a promise that your code will run


// promises is used to for parallel execution of Task 

// like i want to fetch data from google.com
//  fetch data fromm data Api

//  fetch picutes form the Server
//  print downloading
//  rest of the script

let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");

    setTimeout(() => {
        console.log("i am a promise and i am rejected");
        resolve(true)
        
    }, 5000);
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");

    setTimeout(() => {
        console.log("i am a promise and i am rejected");
        // resolve(true)
        reject(new Error("i am an error"))
    }, 5000);
})

p1.then((value)=>{
    console.log(value);
})

p2.catch((Error)=>{
    console.log("Some error in p2");
})
