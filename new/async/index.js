// setTimeout(() => {
//   console.log('setTimeout')
// }, 2000)   

// const rashu=function(){
//     document.querySelector("h1").innerHTML = "Hello Rashu"
// }

// const change= setTimeout(rashu, 2000);

// document.querySelector("#stop").addEventListener("click",()=>{
//     clearTimeout(change);
//     console.log("stopped");
// })
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

start.addEventListener("click",()=>{
    setStart;
})

const setStart= setInterval(()=>{
    console.log("It has started");
},1500)



stop.addEventListener("click",()=>{
    clearInterval(setStart);
    console.log("It has stopped");
})

const randcolor=()=>{
    const hex= "0123456789ABCDEF";
    let color= "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.ran dom()*16)];
    }
    return color;
}

let intervalID;
const changeColor=()=>{

   intervalID=  setInterval(changeBg,1000);

    function changeBg(){
        document.querySelector(".bg").style.backgroundColor= randcolor();
    }
}
const stopChange=()=>{
    clearInterval(intervalID);
}

document.querySelector("#change").addEventListener("click",changeColor);
document.querySelector("#stopChange").addEventListener("click",stopChange);  



