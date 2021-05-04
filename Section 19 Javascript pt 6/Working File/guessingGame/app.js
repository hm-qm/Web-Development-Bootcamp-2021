
let max = parseInt(prompt("Enter the maximum number!"));
while (!max){
    max = parseInt(prompt("Enter a valid number!"));
}

const ranNum = Math.floor(Math.random() * max) + 1
console.log(ranNum);

let guess = parseInt(prompt("Enter your guess!"))
let attempts = 1;

while (parseInt(guess) !== ranNum){
    if (guess === "q") break;
    attempts++;
    if (guess < ranNum){
        guess = prompt("Too low! Try guessing again..")
    }
    else {
        guess = prompt("Too high! Try guessing again..")
    }
    
}
if (guess === "q"){
    console.log("Disappointing. See you next time.");
}
else{
console.log("You guessed correctly!");
console.log(`It took you ${attempts} guesses`);
}
