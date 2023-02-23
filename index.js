// console.log('namaste JII aap kaise hai');
// let a = 5;
// console.log(a);

// let name = 'rashu'
// console.log(name);
// const c = "rashu"
// var sur = 'pandey';
// var sur = 'rashu pandey';

// console.log(sur);

// var naam = 'babbar'
// console.log(naam);

// naam = 5;

// console.log(naam);

// // obejcts

// let person = {
//     firstnaam: 'rasshu',
//     age: 19
// };

// console.log(person.age);


// let e = 3;
// let r = 6;
// let t = e + r;

// console.log(t);

// let p = 10;

// console.log(++p);


// let q = 5;
// let w = 5;

// let ans1 = (++q) * (--w);
// let ans2 = (q++) * (--w);
// let ans3 = (q++) * (w--);
// let ans4 = (++q) * (w--);
// console.log(ans1);
// console.log(ans2);

// console.log(ans3);
// console.log(ans4);


// // 
// // age = 17;
// // let status = (age >= 18) ? "you can vote" : 'you can not vote'
// // console.log(status);


// //  else if

// let marks = 78;
// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 80) {
//     console.log("B");
// } else if (marks >= 70) {
//     console.log("C");
// } else {
//     console.log("D");
// }


// // switch case
// let number=2;
// switch(number){
//     case 1: console.log('A');
//     break;

//     case 2: console.log('B');
//     break;

//     case 3: console.log('C');
//     break;

//      default: console.log('D');

// }
// let y=0;

// do{
//     console.log(y);
//     y++;
// }while(y<10);



// // string method in js

// let myStr= "My name is rashu"

// console.log(myStr.length);
// console.log(myStr.indexOf("rashu"));


// console.log(myStr.slice(1,6));

// f= myStr.replace("rashu", "pandey")

// console.log(f);


// // dates in js

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getDay());

// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());


// // datatypes

// var str1= "this is a string";
// var str2='this is a string';

// var num1= 442;
// var num2= 43.32;

// var marksScie={
//     ravi:35,
//     shubham:78,
//     rashu:98

// }


// console.log(marksScie);
// var d= null;

// console.log(d);


// var arr=[1,2,3,3,423,324,234,234234];
// console.log(arr);
// console.log(arr.length)

// console.log(arr[5]);


// comparision operator

// var x=98;
// var b= 78;

// console.log(x==b);
// console.log(x>=b);
// console.log(x<=b);
// console.log(x>b);
// console.log(x<b);

// // functions


// function avg(a,b){
//     return(a+b)/2;
// }

// num3= avg(3,4);

// num4= avg(5,8);

// num5= avg(8,9);
// num6= avg(6,2);
// console.log(num3);

// console.log(num4);
// console.log(num5);
// console.log(num6);


// // conditional statements in js

// let age=26;

// if(age==18){
//     console.log("You are not a kid");
// }

// else if(age>=25){
//     console.log("What do you do for living");
// }
// else{
//     console.log("You are a Kid");
// }

// // loops in js

// var arr=[1,2,3,4,5,6,7,7];
// console.log(arr);

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// arr.forEach(function(element) {
//     console.log(element);
// });

// // let j=4;
// // const ac=0;


// // console.log(ac);
// // console.log(j);
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// do{
//     console.log(arr[j]);
//     j++;
// }
// while(j<arr.length);

// js setTimeout and setInterval
// summ=(a,b) => {
//   return a+b;  
// };

// logkaro=()=>{
//   console.log("I am you log ");  
// }
// setTimeout(logkaro,  2000)

// setInterval(logkaro, 2000)


// let  rect={
//     lenght:1,
//     breadth:4,

//     draw: function(){
//         console.log('drawing a rectangle');
//     }
// };

// // factory function

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

// function rectangle ()  {
//     this.length = 1;
//     this.breadth =4;
//     this.draw= function(){
//         console.log('drawing');
//     }
// }

// let rectangleobj = new rectangle();


// practice set

// // chapter q1
//  let sub1 = "harry"

//  let sub2 = 8;

//  console.log(sub1+ sub2);

// //  q2

// console.log(typeof (sub1+sub2));

// // q3


// const some ={
//     name:"rashu",
//     section:1,
//     isprincipal:false

// }

// // q4


// some['friend']= "subham"
// some['name']= "rohit"
// console.log(some);


// // q5

// const dist={

//     appreciate: "recognize the full worth of",
//     worthy:"Something very valuable",
//     tocix:"something hazourdous",
//     yakka:"to do hard work"

// }
// console.log(dist.yakka);
// console.log(dist.tocix);



// let age1= prompt("hey what is your age? ")

//  age1= Number.parseInt(age1)

//  console.log(typeof age1);

//  if(age1<0){
//      console.log("this is not a valid age");
//     }
//     else if(age1<9){
//         console.log("dont drive");
//     }

//     else if(age1<18 && age1>9){
//         console.log("wait for some time");
//     }

//     else{
//      console.log("this is a valid age");
//   }


//   chapter 2 q1

// let inp_age= prompt("what is your age??")

// inp_age= Number.parseInt(inp_age);

// if(inp_age>10 && inp_age<20){
//     console.log("Your age lies b/w 10 and 20");
// }
// else{
//     console.log("Your age does not lies b/w 10 and 20");
// }


// q2

// let inp_age1= prompt("what is your age??")
// inp_age1= Number.parseInt(inp_age1);

// switch(inp_age1){
//     case 12:
//         console.log("your age is 12");
//     break
//         case 14:
//         console.log("your age is 14");
//         break
//         case 17:
//         console.log("your age is 17");
//         break
//         case 121:
//         console.log("your age is 121");
//         break
//         case 123:
//         console.log("your age is 123");
//         break
//         default:
//             console.log("your age is not special");
//             break
// }


// q3

// let inp_num= prompt("what is the number??")
// inp_num= Number.parseInt(inp_num);


// if(inp_num%2==0 && inp_num%3==0){
//     console.log("your num is divisible by 2 and 3");
// }
// else if(inp_num%2==0 || inp_num%3==0){
//     console.log("your number is either divisible by 2 or 3");
// }
// else{
//     console.log("your num is not divisible by 2 and 3");
// }




// let obj={
//     rashu:45,
//     riya:46,
//     sampuu:47
// }
// for(let a1 in obj){
//     console.log(obj[a1]);
// }

// for(let b1 of "RAHSU"){
//     console.log(b1);
// }


// let inp_num= prompt("what is the number??")
// inp_num= Number.parseInt(inp_num);
// let i=0;
// while(i<inp_num){
//     console.log(i);
//     i++;
// }



function onePlusAvg(x,y){
    return Math.round( 1+(x+y)/2)
}

let a= 2
let b=4
let c=6


console.log("one plus avg of a and b is", onePlusAvg(a,b));
console.log("one plus avg of b and c is", onePlusAvg(b,c));
console.log("one plus avg of a and c is", onePlusAvg(a,c));


// chapter 3

// q1

let marks={
    rashu:90,
    subham:34,
    lovihs:56,
    monika:76
}

for (let i = 0; i<Object.keys(marks).length; i++) {
    console.log("the marks of "+ Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]]);
    
}

// another method

for (let key in marks) {
     console.log("marks of " + key + " is "+ marks[key]);
    }


    // q3

// let cn=4
//  let i;
// while(i!=cn){
//     console.log("try again");
//     i= prompt("enter a number")
// }

// console.log("you have entered a correct number");


// q4

const mean = (a,b,c,d)=>{
    return(a+b+c+d)/4
}

console.log("the mean of the numbers is "+ mean(3,4,6,7));