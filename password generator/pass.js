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
const allcheckbox= document.querySelectorAll("input[type=checkbox]");

const symbol= "~!@#$%^&*()_+`:;<>?/,.{}|[]\/*";

let passoword ="";

let passowordLenght=10;
let checkCount=1;
handleSlider();
//  set strength circle to grey 

// set passoword length
function handleSlider(){

    inputSlider.value= passowordLenght;
    lengthDisplay.innerText=passowordLenght;

    
}

function setIndicator(){
    indicator.style.backgroundColor= color;
}

function getRndInterget(min, max){ 

   return Math.floor(Math.random()*(max-min))+min;
}

function generateRandomNumber(){

    return getRndInterget(0,9);
}

function generatteLowerCase(){
  return String.fromCharCode(getRndInterget(97,123));

}

function generateUpperCase(){
    return String.fromCharCode(getRndInterget(65,90));

}

function generateSymbol(){
    const randNum= getRndInterget(0,symbol.length);
    return symbol.charAt(randNum);
}

function calcStrength(){
    let hasUpper=  false;
    let hasLower= false;
    let hasNum= false;
    let hasSym= false;


    if(uppercaseCheck.checked) hasUpper=true;
    if(lowercaseCheck.checked) hasLower=true;
    if(numberCheck.checked) hasNum=true;
    if(symbolCheck.checked) hasSym=true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passowordLenght>=8){
        setIndicator("#0f0")
    }else if(
        (hasLower || hasUpper)&&
        (hasNum || hasSym)&&
        passowordLenght>=6
    ){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copymsg.innerText = "Copied"
        
    } catch (e) {
        copymsg.innerText="failed"
    }

    // to make the copied text visible
copymsg.classList.add("active")

setTimeout( () => {
    copymsg.classList.remove("active")
}, 2000);
}

function handleCheckBoxChange(){
    checkCount=0;
    allcheckbox.forEach((checbox)=>{
        if(checbox.checked){
            checkCount++;
        }
    });

    //special case 
    if(passowordLenght<checkCount){
        passowordLenght=checkCount;
        handleSlider();
    }
}

allcheckbox.forEach((checbox)=>{
    checbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e)=>{
     passowordLenght= e.target.value;
     handleSlider();
})


copyBtn.addEventListener("click",()=>{
    if(passwordDisplay.value){
        copyContent();
    }
} )

generateBtn.addEventListener('click', ()=>{

})



