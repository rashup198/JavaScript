console.log("Hello JIIIIIII");

let lastName='Pandey'

let firstName=  new String('Rashu');

let message ="this is my first message";
let word = message.split(' ');
console.log(word);


let date = new Date();

console.log(date);

let date2 = new Date('june 20 1998 07:15');
console.log(date2);

let date3= new Date(1998, 6, 20 , 7);
console.log(date3);


date3.setFullYear(1947);
console.log(date3);



let numbers =[1,2,34,6,8];
console.log(numbers);


let courses= [
    {no:1, naam:'Love'},
    {no:2, naam:'Rashu'}
];

console.log(courses);

let course = courses.find(function(course){
    return course.naam=='Love';
})



// let course= courses.find(course=>{
//     course.naam=='Love';
// })
console.log(course);

// for of
let arr=[10,12,23,54,67,89,90];
for(let value of arr){
    console.log(value);
}

// for each
arr.forEach(function(number){
    console.log(number);
})



let arr1=[2,3,4,65,21,45,47,2312,]

const joined = arr1.join('-');
console.log(joined);
