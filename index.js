console.log('namaste JII aap kaise hai');
let a = 5;
console.log(a);

let name = 'rashu'
console.log(name);
const c = "rashu"
var sur = 'pandey';
var sur = 'rashu pandey';

console.log(sur);

var naam = 'babbar'
console.log(naam);

naam = 5;

console.log(naam);

// obejcts

let person = {
    firstnaam: 'rasshu',
    age: 19
};

console.log(person.age);


let e = 3;
let r = 6;
let t = e + r;

console.log(t);

let p = 10;

console.log(++p);


let q = 5;
let w = 5;

let ans1 = (++q) * (--w);
let ans2 = (q++) * (--w);
let ans3 = (q++) * (w--);
let ans4 = (++q) * (w--);
console.log(ans1);
console.log(ans2);

console.log(ans3);
console.log(ans4);


// 
// age = 17;
// let status = (age >= 18) ? "you can vote" : 'you can not vote'
// console.log(status);


//  else if

let marks = 78;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else {
    console.log("D");
}


// switch case
let number=2;
switch(number){
    case 1: console.log('A');
    break;

    case 2: console.log('B');
    break;

    case 3: console.log('C');
    break;

     default: console.log('D');

}
let y=0;

do{
    console.log(y);
    y++;
}while(y<10);



// string method in js

let myStr= "My name is rashu"

console.log(myStr.length);
console.log(myStr.indexOf("rashu"));


console.log(myStr.slice(1,6));

f= myStr.replace("rashu", "pandey")

console.log(f);


// dates in js

let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getDay());

console.log(myDate.getFullYear());
console.log(myDate.getMinutes());


// datatypes

var str1= "this is a string";
var str2='this is a string';

var num1= 442;
var num2= 43.32;

var marksScie={
    ravi:35,
    shubham:78,
    rashu:98

}


console.log(marksScie);
var d= null;

console.log(d);


var arr=[1,2,3,3,423,324,234,234234];
console.log(arr);
console.log(arr.length)

console.log(arr[5]);


// comparision operator

var x=98;
var b= 78;

console.log(x==b);
console.log(x>=b);
console.log(x<=b);
console.log(x>b);
console.log(x<b);

// functions


function avg(a,b){
    return(a+b)/2;
}

num3= avg(3,4);

num4= avg(5,8);

num5= avg(8,9);
num6= avg(6,2);
console.log(num3);

console.log(num4);
console.log(num5);
console.log(num6);


// conditional statements in js

let age=26;

if(age==18){
    console.log("You are not a kid");
}

else if(age>=25){
    console.log("What do you do for living");
}
else{
    console.log("You are a Kid");
}

// loops in js

var arr=[1,2,3,4,5,6,7,7];
console.log(arr);

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}


arr.forEach(function(element) {
    console.log(element);
});

// let j=4;
// const ac=0;


// console.log(ac);
// console.log(j);
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}


do{
    console.log(arr[j]);
    j++;
}
while(j<arr.length);

// js setTimeout and setInterval
// summ=(a,b) => {
//   return a+b;  
// };

// logkaro=()=>{
//   console.log("I am you log ");  
// }
// setTimeout(logkaro,  2000)

// setInterval(logkaro, 2000)


let  rect={
    lenght:1,
    breadth:4,

    draw: function(){
        console.log('drawing a rectangle');
    }
};

// factory function

// function createRectangle(){
//     let  rect={
//         lenght:1,
//         breadth:4,
    
//         draw: function(){
//             console.log('drawing a rectangle');
//         }
//     };
//     return rect;
// }

// let rectangleobj1 = createRectangle();

// constructor function

function rectangle ()  {
    this.length = 1;
    this.breadth =4;
    this.draw= function(){
        console.log('drawing');
    }
}

let rectangleobj = new rectangle();