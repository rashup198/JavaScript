// q1

function sum(num1, num2) {
    
    let total = num1+num2;
    return total
}

console.log(sum(4,5));

// q2 Write a function that takes a string as an argument and returns its length.

function stringLen(str){

    let len= str.length;

    return len;

}

console.log(stringLen('rashu'));

// q3 Write a program that takes two numbers and displays their sum, difference, product, and quotient.

function twonum(num1, num2) {

    let sum= num1+num2;

    let diff= num1-num2;

    let product = num1*num2;

    let quotient = num1/num2;


   console.log(sum);
   console.log(diff);
   console.log(product)
    console.log(quotient);    
}

console.log(twonum(2,4));

// q4  Write a function that takes two numbers as arguments and returns the larger number

function largest(num1, num2) {
    
     if (num1<num2) {
       return ('num2 is greater than num1') 
    }
    else{
        return ('num1 is greater than num2')
    }
}

console.log(largest(6,9));

// q5 Write a program that displays a string in reverse order.

function reversestr(str) {
    const reversestr = str.split("").reverse().join("");

    return reversestr;
}

console.log(reversestr('Rashu'));


// q6 Write a program that takes a number and checks whether it is positive, negative, or zero

function check(val){

    if(val<0){
        console.log('Number is negetive')
    }
    if(val=0){
        console.log('Number is zero')
    }
    
    if(val>0){
        console.log('Number is positive')
    
    }
    
}
 
console.log(check(12));


// q7 Write a program that takes a number and prints the multiplication table for that number

let number = 10;

for (let i = 1; i <= number; i++) {
    let result = number*i;

    console.log(`${number} x ${i} = ${result}`);
    
}

// q8 Write a program that takes a number and calculates the sum of all numbers from 1 to that number.


function sumOfNumbers(number) {
   
    let sum = 0;
   
    for (let i = 1; i <= number; i++) {
     
      sum += i;
    }
 
    return sum;
  }
  

  console.log(sumOfNumbers(10));

//  q9 Write a program that takes a string and prints out the number of vowels in the string.
  function vov(str){

    let vowels=['a','e','i','o','u']
    let count =0;

    for(let i =0 ; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++
        }
    }

    return count;
  }

  console.log(vov("rashu"));