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