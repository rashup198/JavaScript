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

even(arrEve)