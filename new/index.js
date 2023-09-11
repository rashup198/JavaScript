//  word vs keyword
// console.log(a);
// var a =12;

// // loop - for , while

// for (let index = 0; index <30; index++) {
//     const element = "rashu";
//     console.log(element);
    
// }

// for(let i=25; i<50; i++){
//     console.log(i);
// }


// while(a<20){
//     a++;
//     console.log(a);

// }
var b =0;
while (b<10) {
    
    console.log(b, b**2);
    b++
}

var b=105;
while (b>7) {
    b= b-7
    console.log(b);
}

var b=10;
while (b>1) {
    b=b-1
    console.log(b);  
}

console.log("using for loop");
for (var i =10; i>0; i-- ){
    console.log(i);
}

console.log("first 10 natural no.");
var b =0;
while(b<10){
    b=b+1
    console.log(b);
}

console.log("using  for loop");

for (var i=0; i<=10; i++){
    console.log(i);
}

console.log("2d array");

function printarray(arr){
    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr[0].length; j++){
            console.log(arr[i][j]);
        }
    }
}

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

printarray(arr);


console.log("printing the even number in the given array");

function even(arrEve) {
    for(var i=0; i<arrEve.length; i++){
        if (arrEve[i]%2==0) {
            console.log(arrEve[i]);
        }
    }
}

var arrEve =[12,143,31,14,23,34];
even(arrEve);

// ------------------

 console.log("delete element in an array");

 function del(arrdel, ele) {
    for(var i=0; i<arrdel.length; i++){
        if(arrdel[i]==ele){
            arrdel.splice(i,1);
        }
    }
    return arrdel;
 }
 var arrdel = [12,23,2312,123,1,23,12,3123,13]
 var ele = 23
  Newarr= del(arrdel, ele);

  console.log(Newarr);


  console.log("async loop");

    for(var i=0; i<5; i++){
        setTimeout(() => {
            console.log(i);
        },1000);
    }
  
// --------------


console.log("foreach loop");


var num=[2,3,4,3,2,1,4,3,35,3];

num.forEach(function(i){
    console.log(i+2);
});



console.log("forin loop");


var obj =[{
    name:"Rashu",
    age:20,
    city:"Bhopal"
},
{
    name:"Ramesh",
    age:29,
    city:"Sehore"
},
{
    name:"Raju",
    age:25,
    city:"Ratlam"
}
]


for (var key in obj) {
    console.log(key, obj[key]);
   console.log(key,obj[key].name);
}

console.log("callback function");

setTimeout(function() {
   console.log("this is printed after 5 sec"); 
},5000);
    

console.log("first class fuction");
console.log("function statement and expression");

function a() {
    console.log("a called");
}
a();
var b = function () {
    console.log("b called");
}

b();

// the function statement follows the hoisting while the funtion expression
// does not follows the hoisting 

console.log("anonymus function");

// a function without any name is anonymus function it is used a value in JS

var d = function() {
    for(var i=0; i<=5; i++){
        console.log(i);
    }
}
d();

console.log("named function expression");

var b = function xyz(){
    var ar=[12,23,5,6,74,34]    
    for(var i=0; i<ar.length; i++){
        console.log(ar[i]);
        // console.log(xyz);
    }
}
b();


console.log("diff b/w parameter and arrgument");

var b = function(param1, param2){
    console.log("the value of param1+param2 is: "+ (param1+param2));
}

b(2,3)

console.log("first class function");

var b = function(param1){
    console.log(param1);
    console.log("this is the main function");
}

b(function(){
    console.log("this is inside other function");
})

// ------------

console.log("another method to demonstrate it");

var b = function(param1) {
    console.log("this is inside the main function");
    console.log(param1);
}

function xyz() {
    console.log("im inside the xyz function");
}

b(xyz);


console.log("how arrays are made behind the scenes");

var ab=[12,34,5,6,7,8,2];

console.log(typeof(ab));
//this is will give object because it created the array as 

var cd= {
    0:12,
    1:34,
    2:5,
    3:6,
    4:7,
    5:6,
    6:2
}
console.log(cd);

ab[-1]= 2;
console.log(ab);

console.log("delete object prop");


var fg ={
    name:"Rashu",
    age:20,
    city:"Sehore"
}

delete fg.age
console.log(fg);

console.log("how to copy reference value");


var af =[12,4,5,4,634,5,6,32];
var bf =[...af]

bf.pop();
console.log(af);
console.log(bf);

var t=[{
    name:"Rashu",
    age:20,
    city:"Bhopal"
},
{name:"riya",
age:18,
city:"Bhopal"}]

var copyt={...t};

copyt.name="pandey";
copyt.age=34;
copyt.city="Sehore"
console.log(t);
console.log(copyt);


console.log("Turthy and falsy");


if(8){
    console.log("yes");
}
else{
    console.log("no");
}

if (0) {
    console.log("yes");
} else {
    console.log("no");    
}


console.log("callback function");

setTimeout(function x(){
    console.log("this is printed after 5 sec");         
}, 5000);

function z(y){
    console.log("printing z");
    y();
}

 z(function y(){
    console.log("printing y");
 })

 document.getElementById("rashu").addEventListener("click", function(){
    console.log("the button is clicked");
 })


console.log("question 1");

function magic (){
    var x="im in magic"
    function insideMagic(){
        console.log(x);
        var x="im inside magic"
    }
    insideMagic();
}
magic();

// this will print undefined because the variable x is hoisted and it is declared
// but not defined so it will print undefined you can check it by commenting the
// insideMagic function

console.log("Math js  ");

const num1 = 100;
console.log(num1);
const num2 = new Number(200);
console.log(num2);
console.log(num2.toFixed(2));
console.log(num2.toString().length);
console.log(Math.abs(-100));
console.log(Math.pi);
console.log(Math.round(100.324));
console.log(Math.ceil(100.324));
console.log((Math.random()*10)+1);
console.log("fixed");
console.log(Math.floor(Math.random()*10)+1);

console.log("date and time");

let date = new Date();
console.log(date); 
console.log(date.getDate());
console.log(date.toDateString());   
console.log(typeof(date));

let date1 = new Date(2023,0,23);
console.log(date1.toDateString());
console.log(date1.toLocaleString());

 
// how to add two arrays

const array1 =["rashu", "riya", "rani"];
const array2 =["Pandey", "Sharma", "shukla"]

const new_array= array1.concat(array2);
console.log(new_array);

// spread operator
const new_array1 = [...array1,...array2];
console.log(new_array1);
 
// what to do if you have array inside an array

const anotherArray= [1,2,3,4,[5,6,3,2,4],5,6,7,8,9,[2,4,5,3,22],5,6,3,2];
const realArray = anotherArray.flat(8);  

console.log(realArray);

// how to convert any node/object/element into array

console.log(Array.from("rashu"));
console.log(Array.isArray(realArray));
console.log(Array.isArray("Rashu"));

// how to get a array from se set of element 

const var1=100;
const var2=200;
const var3=300;

const array3 = Array.of(var1,var2,var3);
console.log(array3);


// how to create a array with 100 elements

const array4 = Array(100);
console.log(array4);


//Objects

const mySym = Symbol("key1");

const person = {
    name:"Rashu",
    "full name":"Rashu Pandey",
    age:20,
    [mySym]: "key1",
    city:"Bhopal",
    hobbies:["coding", "reading", "singing"],
    address:{
        street:"Bhopal",
        pincode:462001
    }
}

console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address.pincode);
console.log(person["name"]);
console.log(person["full name"]);  
console.log(person[mySym]);

// how to add a new property in the object

person.email="rashup198@gmail.com";
console.log(person);

// how to freeze an object

// const person1 = Object.freeze(person);

person.name="Riya";
console.log(person);

// you can notice now to object is not getting changed because it is freezed

//object  Functions

person.greet = function(){
    console.log("hello");
}
person.greet1 = function(){
    console.log(`hello  ${this.name} and your age is ${this["age"]}`);
}
console.log(person.greet());
console.log(person.greet1());


// how to delete a property from an object

delete person.greet;
console.log(person);

// how to get the keys of an object

console.log(Object.keys(person));

// how to create a new object 

const newPerson = {};

newPerson.id = 1;
newPerson.name = "Rahul";
newPerson.age = 22;
newPerson.city = "Sehore";
newPerson.hobbies = ["coding", "reading", "singing"];
newPerson.isLogin = true;

console.log(newPerson);

  //how to nesting in a object

  const user ={
    id:1,
    fullname:{
        userFullname:{
            firstName:"Rashu",
            lastName:"Pandey"
        }
    }
  }
 
  console.log(user.fullname.userFullname.firstName);
  console.log(user.fullname.userFullname.lastName);

//   how merge two object

const obj1 = {
    name:"Rashu",
    age:20,
    city:"Bhopal"
}

const obj2 = {
    name:"Riya",
    age:18,
    city:"Sehore"
}

const obj3 = Object.assign({},obj1,obj2); // we are giving empty object as a target and all the obj1 and obj2 as a source it is a good practice to give empty object as a target
console.log(obj3);

// using spread operator

const obj4 = {...obj1,...obj2}; 
console.log(obj4);

// how to get the keys and values of an Object

console.log(Object.keys(obj4));  // it will always return the array
console.log(Object.values(obj4));


//destructing of an object

const course = {
    name:"JS",
    price: "1000",
    duration:"2 months"
}

const{name,price,duration} = course;
console.log(name);
console.log(price);
console.log(duration);

//function

function saymyname(){
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");       
}

console.log(saymyname());

// diffrence b/w log and return

function add(a,b){
    console.log(a+b);
}
const result = add(2,3);

console.log("the result is: ",result); //this will print undefined because the add function is not returning anything

function add1(a,b){
    return a+b;
}
const result1 = add1(2,3);
console.log("the result is: ",result1);

function loginUserMessage(username){
    if(username.length<2){
    return `the username ${username} is too short`;
    }
    else{
        return `Welcome ${username}`;
    }
}

console.log(loginUserMessage("R"));

// funtion with object

//rest operator

function calcluateCartPrice(...prices){
    return prices;
    
}
 
console.log(calcluateCartPrice(100,200,300,400,500));

const user1 = {
    username :"Rashu",
    price:1000,
}

function handleUser(anyuser){
    return `the user "${anyuser.username}" has to pay ${anyuser.price}`;
}

console.log(handleUser(user1));

// function with arrays

const arr1 = [1,2,3,4,5,6,7,8,9,10];

function returnArray(getArray){
    return `the array is ${getArray}`;
}

console.log(returnArray(arr1));
