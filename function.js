// function statement aur fuction declaration

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
asas();



// diffrence between parameter and argument

// first class function
var b = function (param1){
    console.log(param1);
    return function(){

    }
}



console.log(b());



// arrow function