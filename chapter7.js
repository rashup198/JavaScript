document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"

document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"

document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"


Array.from(document.getElementsByTagName("nav")).forEach((Element)=>{
    Element.style.background="cyan";
})
