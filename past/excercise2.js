


 let inp = prompt("Enter your Input (S/W/G)")
 let comp= Math.floor(Math.random()*3);

let comp_inp =["S","W","G"][comp]


const match =(comp_inp, inp)=>{
    if(comp_inp==inp){
        return "Nobody. Match is Tied"
    }
    else if(comp_inp=== "S" && inp==="W"){
        return "Computer"
    }
    else if(comp_inp=== "G" && inp==="W"){
        return "User"
    }
    else if(comp_inp=== "S" && inp==="G"){
        return "User"
    }
    else if(comp_inp=== "G" && inp==="S"){
        return "Computer"
    }
    else if(comp_inp=== "W" && inp==="G"){
        return "User"
    }
    else if(comp_inp=== "W" && inp==="S"){
        return "Computer"
    }
}
let result = match(comp_inp, inp)
document.write(`COMPUTER:${comp_inp} <br> User :${inp} <br> The winner is:${result.toLocaleUpperCase()}`);