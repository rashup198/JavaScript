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



