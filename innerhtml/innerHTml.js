let x = document.getElementsByTagName('span')[0] //this will normallly print that this is an span
console.log(x);


let y =document.getElementsByTagName('span')[0] //this will return as an object
console.dir(y);


console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

console.log(document.body.textContent);