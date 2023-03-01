// a funnction along with refrennce to its outer environment is called cluser

// clouser is the combination of fucntion and its lexical scope bundelled together 

function outer(){
    function inner(){
        console.log(a);
    }
     
    return inner;
}

outer()();
