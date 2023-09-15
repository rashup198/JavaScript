const idss=document.getElementById('heading');
idss.style.color='red';
idss.style.background='black';
idss.style.padding='23px';
idss.style.fontSize='23px';
idss.style.fontFamily='cursive';
idss.style.border='2px solid green'; 
idss.style.borderRadius='23px';

const ids= document.querySelector('h2')
ids.style.color='red';
ids.style.background='black';
ids.style.padding='23px';
ids.style.fontSize='23px';                                                  
ids.style.fontFamily='cursive';
ids.style.border='2px solid green';
ids.style.borderRadius='23px';

const myul = document.querySelector('ul');

myul.querySelector('li').style.color='red';
myul.querySelector('li:last-child').style.color='green';
myul.querySelector('li:nth-child(2)').style.color='yellow';
myul.querySelector('li:last-child').style.background='orange';
myul.querySelector('li').style.background='orange';

// const newul= document.querySelectorAll('li');
// newul.forEach((li)=>{
//     li.style.color='blue';
//     li.style.background='yellow';
//     li.style.fontSize='23px';
//     li.style.fontFamily='cursive';
//     li.style.border='2px solid green';
//     li.style.borderRadius='23px';
// })

const newlist = document.getElementsByClassName('list');
console.log(newlist);
const updatedlist=Array.from(newlist);
console.log(updatedlist);

updatedlist.forEach((li)=>{
li.style.color='blue';
li.style.background='yellow';
li.style.fontSize='23px';
li.style.fontFamily='cursive';
li.style.border='2px solid green';
li.style.borderRadius='23px';
li.style.padding='10px';
li.style.margin='10px'; 
})