let num =[3,54,2,5,7,]

// for(let i=0 ; i<num.length; i++){
//     console.log(num[i]);
// }


// forEach

num.forEach((element)=>{
    console.log(element*element);
})

// Array.from

let name="Rashu"
let arr= Array.from(name)
console.log(arr);

// for Off

for (let i of num) {
    console.log(i);
}