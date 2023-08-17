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
