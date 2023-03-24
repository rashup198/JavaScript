const loadScrit = async (src)=>{
    return new Promise((resolve, reject)=>{

    
    let script = document.createElement("script")
    script.src= src;
    script.onload = ()=>{
        resolve(src+" Done Success");
    }
    document.head.append(script)
})
}
// problem1 

let a= loadScrit("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")

a.then((value)=>{
  console.log(value);  
})
 
// problem2

const main2= async()=>{
    console.log(new Date().getMilliseconds());
    let a=await loadScrit("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
    console.log(a);
    console.log(new Date().getMilliseconds());
}
main2()


// problem 3

let p= ()=>{
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject(new Error("Plesase this is not accepted"))
    }, 3000);
})
}
let a = async ()=>{

    try {
        let c= await p()
        console.log(c);
        
    } catch (error) {
        console.log(error);
    }
}
a();


// problem 4

let p1 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(10)
            
        }, 2000);
    })
}

let p2 = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(10)
            
        }, 1000);
    })
}


let p3 =async () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(10)
            
        }, 3000);
    })
}

const run =async()=>{
    console.time("run");
    let a1 = await p1();
   

    let a2 = await p2();
   

    let a3 = await p3();
    console.log(a1,a2,a3);
    console.timeEnd("run");

}


run();