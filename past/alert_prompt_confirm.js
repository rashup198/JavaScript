let a= prompt("Elnter a here","578");
a= Number.parseInt(a);
alert("you entered a of type " + (typeof a))
let write = confirm("Do you want to write to the page")

if(write){
document.write(a)
}
else{
    document.write("Please allow me to write")
}


