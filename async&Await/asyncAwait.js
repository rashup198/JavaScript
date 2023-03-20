
async function harry(){

    let delhiWeater = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Deg");
        }, 2000)
    })
    
    
    let BangWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Deg");
        },5000)
    })
    
    // delhiWeater.then(alert)
    // BangWeather.then(alert)


    console.log("Feathing delhi Weather Please wait.....");
    let delhiW= await delhiWeater;
    console.log("Featched delhi Weather "+delhiW);

    console.log("Feathing Banglore Weather Please wait.....");
    let bangloreW= await BangWeather;
    console.log("Featched Banglore Weather " + bangloreW);

    return[delhiW, bangloreW];

}


console.log("Hello jii Welcome to weather control room");
let a = harry();
a.then((value)=>{
    console.log(value);
})

