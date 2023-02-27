// chapter5 

// q1

// let arr= [1,2,3,4,5,6,7,83]
// let a = prompt("Enter a number")
// a= Number.parseInt(a)
// arr.push(a)
// console.log(arr);


// q2

// let arr= [1,2,3,4,5,6,7,83];
// let a;

// do{
//      a = prompt("Enter a number")
//     a= Number.parseInt(a)
//     arr.push(a)
//     console.log(arr);

// }
// while(a!=0);
// console.log(arr);


// q3

let arr1 =[1,2,30,4,50,6,7,83,670]

let n = arr1.filter((x)=>{
    return x%10==0
})

console.log(n);


// q4

let arr3=[1,2,30,4,50,6,7,83,670]
let a1= arr3.map((x)=>{

    return x*x
})

console.log(a1);


// q5

let arr4= [1,2,3,4,5,6,7,8]

let a4= arr4.reduce((x1,x2)=>{
    return x1*x2
})
console.log(a4);


