// function statement aur fuction declaration



// hoisting the process of moving function decleration to the top of file and this thing is done  automatically by the JS engine



function a(){
    console.log("a called ");
}
// function expression
var b = function(){
    console.log("b called");
}

a();
b();

// anonymous function
// function () {

// }

// named function expression
var b = function asas(){
    console.log(asas);

}

a();
b();




// diffrence between parameter and argument

// first class function
var b = function (param1){
    console.log(param1);
    return function(){

    }
}



console.log(b());



// --------------------------------------------------


// function declaration

function run(){
    console.log('running');
}

//named funtion assignment 

let stand = function walk(){
    console.log('walking');
}


//Anonymous function assignment

let stand2 = function(){
    console.log('still walking');
}

run();

stand();
stand2();


function sum(a,b){
    let total = 0;
    for (let value of arguments) 
        total = total+value;

        return total  
    
}

let ans =sum(2,4,5,9,8)
console.log(ans);



// rest operator

function sum1(num,value, ...args){
    console.log(args)
}

sum1(1,2,7,7,8,9);


//default parameter

function intrest(p,r=5,y=10){
    return p*r*y/100;
}
console.log(intrest(1000,6 ));