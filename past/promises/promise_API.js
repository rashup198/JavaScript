let p1=  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 1");

    }, 11000);
})

let p2=  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 2");

    }, 5000);
})


let p3=  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    //    reject(new Error("Error"))

    }, 3000);
})


// p1.then((value)=>{
//     console.log(value);
// })


// p2.then((value)=>{
//     console.log(value);
// })


// p3.then((value)=>{
//     console.log(value);
// })



// the promise.all does not work
// when there is an error in your promise
// so for that case we can use Promise.allSettled

// Promise.all

// let promise_all = Promise.all([p1, p2, p3])


// Promise.allSettled

// let promise_all1= Promise.allSettled([p1,p2, p3])



// Promise.race
let promise_all1= Promise.race([p1,p2, p3])
promise_all1.then((value)=>{
    console.log(value);
})



