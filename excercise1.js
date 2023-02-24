let num = Math.random();
num= Number.parseInt(num);

let inp;
let score= 100;

while(inp!=num){
    score= score-1;
    inp= prompt("Enter your number: ");
    if(inp==num){
        console.log("Conglatulations you guess the correct number: ");
        console.log(`your guess the actual number in ${100-score} chances`);
    }

    else if(inp>a && inp<100){
        console.log("Your number is greater than the actual number: ");
    }

    else if(inp<a && inp>0){
        console.log("your number is smaller than the actual number");
    }

    else{
        console.log("your number is between 1 to 100");
    }

}
