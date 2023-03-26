const inputSlider= document.querySelector("[data-lengthSlider]");
const lengthDisplay= document.querySelector("[data-leghtNumber]"); 

const passwordDisplay=  document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy-msg]");
const copymsg= document.querySelector("[data-copy]");
const uppercaseCheck= document.querySelector("#uppercase");
const lowercaseCheck= document.querySelector("#lowercase");
const numberCheck= document.querySelector("#numbers");
const symbolCheck= document.querySelector("#symbols");
const indicator= document.querySelector("[data_indicator]");

const generateBtn= document.querySelector(".generateButton");
const allcheckbox= document.querySelectorAll("input[type=checkbox]")



let passoword ="";

let passowordLenght=10;
let checkCount=1;
//  set strength circle to grey 

