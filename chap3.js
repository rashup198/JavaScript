// q1


let str= "hac\"";
console.log(str.length);


// q2

const sentance=  'The quicl brown fox jumps over the lazy';
const word= 'fox';

console.log(sentance.includes(word));

// q3

console.log(word.toUpperCase());
console.log(word.toLowerCase());

// q4

let str2 ="Please give Rs 1000"
let amount= str2.slice(15);
amount= Number.parseInt(amount);
console.log(amount);
console.log(typeof amount);

// q5

let friend = "deepika";
friend[3]="R"
console.log(friend); // the string will not get edited because the string immutable 