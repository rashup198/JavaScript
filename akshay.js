var a=10;
function b(){
    var x=10;
    console.log(x);

}

console.log(window.a);

function x(){
    var a= 7;

    function y(){
        console.log(a);
    }
    y();
}
x();