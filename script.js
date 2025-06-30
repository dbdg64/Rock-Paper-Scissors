let humanScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

function userchoice() {
    let userinput = prompt("rock paper scissors");
    return userinput.toLowerCase();
}

function comchoice() {
    let randnum = Math.floor(Math.random() * 3);
    return choices[randnum];
}

function playRound(user, com) {
    if (user == com) {
        console.log("Draw!");
    } else if (user == choices[0]) {
        if (com == choices[1]) {
            console.log("Lose!");
            humanScore--;
            computerScore++;
        } else if (com == choices[2]) {
            console.log("Win!");
            humanScore++;
            computerScore--;
        }
    } else if (user == choices[1]) {
        if (com == choices[2]) {
            console.log("Lose!");
            humanScore--;
            computerScore++;
        } else if (com == choices[0]) {
            console.log("Win!");
            humanScore++;
            computerScore--;
        }
    } else if (user == choices[1]) {
        if (com == choices[2]) {
            console.log("Lose!");
            humanScore--;
            computerScore++;
        } else if (com == choices[0]) {
            console.log("Win!");
            humanScore++;
            computerScore--;
        }
    } else if (user == choices[2]) {
        if (com == choices[0]) {
            console.log("Lose!");
            humanScore--;
            computerScore++;
        } else if (com == choices[1]) {
            console.log("Win!");
            humanScore++;
            computerScore--;
        }
    }
}

const humanSelection = userchoice();
const computerSelection = comchoice();

playRound(humanSelection, computerSelection);