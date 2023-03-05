let a = document.getElementsByTagName('div')[0]

a.innerHTML= a.innerHTML + '<h1>HELLO world</h1>' ;
//this will insert a HEllo world in h1 tag in div  

let div = document.createElement('div')
div.innerHTML = '<h1>HEllo jiiiii</h1>';
document.body.append(div)
a.append(div)
a.prepend(div)