let arr=[45,34,12]

// array map

let a= arr.map((value, index, array)=>{

    console.log(value ,index, array);
    return value+1

})

console.log(a);

// map is used to create a new array and for each is used when you want to perform opperation of each Element of the array



// array filter method

let arr2=[45,34,12,12,5,7,0]

let a2=arr2.filter((a)=>{
    return a<10
})

console.log(a2);

// filters an array with values that passes a test and creates a new array and it does not modify the original array


//array reduce method

let arr3= [5,4,12,12,5,7,0]

const reduce_func =(h1,h2,h3) =>{
    return h1+h2+h3
}

let newArr3 = arr3.reduce(reduce_func)
console.log(newArr3);


// it reduces an arrray to a single value

