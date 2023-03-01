// a funnction along with refrennce to its outer environment is called cluser

// clouser is the combination of fucntion and its lexical scope bundelled together 

function outer(){
    var a=10
    function inner(){
        console.log(a);
    }
     
    return inner;
}

outer()();

// data hiding and encapsulation


// lets say a variable has some data and we dont want a function to access it so there we use data hiding and data incapsulation

function Counter(){
var count=0;
 this.incrementCounter = function (){
     count++;
     console.log(count);
}
this.decrementCounter = function (){
    count--;
    console.log(count);
    }
}

var counter1= new Counter();
counter1.incrementCounter();
  