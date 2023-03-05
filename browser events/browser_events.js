let a = document.getElementsByClassName("container")[0]
a.onclick=()=>{
    let b = document.getElementsByClassName("container")[0]

b.innerHTML="hello jiii kaise hoo"
}


let x=function(){
        alert('hello jiii 11')
    
    }

btn.addEventListener('click', x)

let y=function(){
    alert('hello jiii 22')
}
btn.addEventListener('click', y)


let c = prompt('what is your fav number?')

if(c=="2"){
    btn.removeEventListener('click', x)
}
