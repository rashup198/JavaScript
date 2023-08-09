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


function d(){
    var i=2;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("namaste javaScript");
}
d();