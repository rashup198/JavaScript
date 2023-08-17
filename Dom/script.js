// pillars of dom

// 4 pillars of dom

// 1. Selection of an element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listner

// 1. Selection of an element

var a =document.querySelector("h1");

console.log(a);

// 2. Changing HTML
a.innerHTML="Hello World";

// 3. Changing CSS
a.style.fontSize="100px";
a.style.color="red";
a.style.backgroundColor="orange";

// 4. Event Listner

 
a.addEventListener("click",function(){
    a.innerHTML="changed";
    a.style.color="blue";
    a.style.backgroundColor="green";
    console.log("I am clicked");

})

var bulb =document.querySelector("#bulb")
var btn =document.querySelector("button")

var flag =0;

btn.addEventListener("click",function(){
    if(flag==0){
       bulb.style.backgroundColor="yellow";
       flag=1;
    }
    else{
        bulb.style.backgroundColor="transparent"; 
        flag=0;
    }
   
})


var h2Select= document.querySelector("h2")

console.log(h2Select);

var allSelctor = document.querySelectorAll("h2")
console.log(allSelctor);


allSelctor.forEach(function(e){
    console.log(e  );

})


var box = document.querySelector("#box")

box.innerHTML="<h1>Hello World</h1>";
box.textContent="<h1>Hello World</h1>"

