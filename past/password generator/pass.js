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
let checkCount=0;
handleSlider();
//  set strength circle to grey 
setIndicator("#ccc")
// set passoword length
function handleSlider(){

    inputSlider.value= passowordLenght;
    lengthDisplay.innerText=passowordLenght;

    const min= inputSlider.min;
    const max= indicator.max;
    inputSlider.style.backgroundSize= ((passowordLenght-min)*100/(max-min))+"% 100"
}

function setIndicator(color){
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

function shuffelPassword(Array){
    //fisher yates Method
    for (let i =Array.length-1; i > 0; i--) { 
        const j = Math.floor(Math.random() *(i+1)); 
        const temp = Array[i] 
        Array[i] = Array[j] 
        Array[j] = temp ;
     } 
     let str = "";
     Array.forEach((el)=>
        (str+=el));
        return str;
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
        //none of  the checkbox are selected 
        if(checkCount<=0){
            return;
        }
        if(passowordLenght<checkCount){
            passowordLenght=checkCount;
            handleSlider();

        } 
        // let's  start the journey to find new passoword

        //remove old password
        console.log("Starting the Journey");
        passoword=""; 

        //lets put the stuff mentioned by the checkboxed

        // if(uppercaseCheck.checked){
        //     passoword +=generateUpperCase();
        // }

        // if(lowercaseCheck.checked){
        //     passoword +=generatteLowerCase();
        // }

        // if(numberCheck.checked){
        //     passoword +=generateRandomNumber();
        // }

        // if(symbolCheck.checked){
        //     passoword +=generateSymbol();
        // }


        let funcARR= [];

        if(uppercaseCheck.checked){
                funcARR.push(generateUpperCase);    
        }

        if(lowercaseCheck.checked){
                funcARR.push(generatteLowerCase);    
        }

        if(numberCheck.checked){
                funcARR.push(generateRandomNumber);    
        }

        if(symbolCheck.checked){
                funcARR.push(generateSymbol);    
        }

        //compulsory addition

        for (let i = 0; i < funcARR.length; i++) {
            passoword += funcARR[i]();
            
        }
        
        console.log("Compulsory addition done");
        //remaing addition

        for(let i=0; i<passowordLenght-funcARR.length; i++){
            let randIndex = getRndInterget(0,funcARR.length);
            console.log("random index" + randIndex);
            passoword += funcARR[randIndex]();
        }
        console.log("Remaning addition done");
        //shuffel the generated password

        passoword= shuffelPassword(Array.from(passoword));
        console.log("Suffling dine");
        // show in UI

        passwordDisplay.value=passoword

        console.log("UI addtion done");
        //calculate the password strength

        calcStrength();

         

    });