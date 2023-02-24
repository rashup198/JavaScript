// q1


// let age = prompt("enter your age");
// age= Number.parseInt(age);


// q2 , q3


let runagain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false
}

while (runagain) {
    let age = prompt("enter your age");
    age = Number.parseInt(age);


    if (age < 0) {
        console.error("You have entered a negetive value")
    }
    if (canDrive(age)) {
        console.log(alert("You can drive"));
    } else if(canDrive(age)) {
        console.log(alert("You can't drive"));
    }
    runagain = confirm("Do you want to play again?")
}


