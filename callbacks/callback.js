// callbacks

function loadScript(src, callback){
    let script = document.createElement("script")
    script.src= src;
    script.onload= function(){
        console.log("Script loaded with SRC: " + src);
        callback(null, src);
    }
    script.onerror= function(){
        console.log("error :loading script with SRC: "+ src);
        callback(new Error ("src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error)
         return
    }
    alert('hello jiiii' + src)
}

function goodmorning(src){
    alert('Namaste ji  kaise ho')
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist//bootstrap.bundle.min.js", hello)


// there will be some cases where the script is not loaded in that case we should know how to handle error