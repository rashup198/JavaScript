let a =[1,2,3,34,213, false , "not present"]

console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length);
a[4]=45;
a[2]=23;

console.log(a);

// methods in array
// to string

let b = a.toString()
console.log(b);
console.log(typeof b);

// join

let c= a.join("-")
console.log(c, typeof c);

//  pop

let d=a.pop() // it will return the popped element

console.log(d);


// push

let r= a.push(56)
console.log(a);


// shift

let k= a.shift() //remove and element from start
console.log(k);

// unshift
let j= a.unshift(78)
console.log(j, a);

let number=[1,2,3,4,5,6,7,8,9]
let number1=[11,22,33,44,55,66,77,88,99]

console.log(number.length);
delete number[0]
console.log(number.length);

let newArr = number.concat(number1)

console.log(newArr);

// sorting

let arr=[32,1,2,445621,213,13,123,123123]

let sortinf= arr.sort()

console.log(arr);

// reverse
console.log(arr.reverse)


// splice and slice

let arr3=[ 23,34,45,56,67,78,89,90]
arr3.splice(2,3,102,121,234,456,256) //first number is the starting address second address is how many element you want to remove and after that numbers are which you want to add

console.log(arr3);
