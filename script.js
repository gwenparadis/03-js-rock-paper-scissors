function computerPlay(max) {
    return Math.floor(Math.random() * max);
}

let win = 0;
let lose = 0;
let tie = 0;
const userChoice = prompt("Enter R, P, or S");
const indexChoice = computerPlay(3);
const computerChoices = ["R", "P", "S"];
const computerChoice = computerChoices[indexChoice];
const playAgain = ["Y", "N"];

if (userChoice === computerChoice) {
    tie++;
} else if (userChoice === "R" && computerChoice === "S"
    || userChoice === "S" && computerChoice === "P"
    || userChoice === "P" && computerChoice === "R") {
    win++;
} else {
    lose++;
}

if (tie++) {
    alert("It's a tie!")
} else if (win++) {
    alert("Wow! You won!")
} else if (lose++) {
    alert("Oh no! You lost.")
}

confirm("Refresh the page to play again!");