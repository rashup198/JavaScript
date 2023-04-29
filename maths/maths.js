let lastname = "pandey";

let firstname= new String("rashu");

let date = new Date();

 let date2 = new Date('sat 20 june 1998')
 console.log(date2);

 let date3 = new Date(1998, 6, 20, 07)
 console.log(date3);


 let numbers = [1,2,3,5,4,3,2,2,2,12,1];

 console.log(numbers);

 numbers.push(12);

 console.log(numbers);

 numbers.unshift(0);
 console.log(numbers);

 numbers.splice(2,0,'a','b','c');
 console.log(numbers);


//  searching

console.log(numbers.indexOf(12));

// we want to check if the number exist or not

if(numbers.indexOf(4)!=-1){
    console.log('present');
}

console.log(numbers.includes(12));




let cources =[
    {no:1, name:'love'},
    {no:2, name:'rashu'},
    {no:3, name:'riya'},
    {no:4, name:'rahul'},
    {no:5, name:'hero'},
    {no:6, name:'raju'},

]

console.log(cources);

let cource= cources.find(function(cource){
    return cource.name=='rashu';
})
console.log(cource);


let courcee = cources.find(function(courcee){
    return courcee.no==1;
})
console.log(courcee);



let num2 =[2,43,5,21,423,123,435,345]
num2.pop();
console.log(num2);



// emptying an array 

 let arr2 =[1,2,3,4,5]

 let ar3 =  arr2;

 arr2.length=0;

 console.log(arr2);


//  combining and slicing arrays


let one =[1,2,3,4,5,6,7,8,9];

let two =[10,11,12,13,14,15,16,17];
let combined = one.concat(two);
 console.log(combined);


 let sliced = combined.slice(2,4);

 console.log(sliced);

// slicing an object

 let rangler =[
    {no:1, name:'love'},
    {no:2, name:'rashu'},
    {no:3, name:'riya'},
    {no:4, name:'rahul'},
    {no:5, name:'hero'},
    {no:6, name:'raju'},

]

let sl = Array.prototype.slice.call(rangler, 4);
console.log(sl);


// itrating in array
let arrrr =[1,2,3,4,5,6,7];

// forof

for (let iterator of arrrr) {
    console.log(iterator);
}


// foreach

arrrr.forEach (numberss=>console.log(numberss))

let numb5=[1,2,-1,-3];
filterd = numb5.filter(function(value){
    return value>=0;
})
//filterd = numb5.filter(value=> value>=0);
console.log(filterd);


//maping

//it maps each element of array to something else


let map_num =[7,8,9,10];

let ite = map_num.map(function(value){
    return 'student_no' + value;
})


console.log(ite);


// maping with object

num_obj =[1,2,9,-1];

let filterd_obj= num_obj.filter(function(value){
    return value>=0;
})

let items = filterd_obj.map(function(numm){
    let obj = {value:numm}
        return obj;
    
})

console.log(items);
