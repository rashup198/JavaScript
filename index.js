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
age = 17;
let status = (age >= 18) ? "you can vote" : 'you can not vote'
console.log(status);


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