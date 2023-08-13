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