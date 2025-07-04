let running = true;
let round = 1;
let winCount = 0;
let loseCount = 0;
let drawCount = 0;
let choices = ["rock", "paper", "scissors"]
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const roundCounter = document.querySelector("#round-counter")
const emojy = document.querySelector("#emojy");
const winCounter = document.querySelector("#score-win");
const drawCounter = document.querySelector("#score-draw");
const loseCounter = document.querySelector("#score-lose");




function comchoice() {
    let randnum = Math.floor(Math.random() * 3);
    switch (randnum) {
        case 0:
            emojy.textContent = "🗿 Rock"
            break;
        case 1:
            emojy.textContent = "📄 Paper"
            break;
        default:
            emojy.textContent = "✂️ Scissors"
            break;
    }
    return choices[randnum];
}
function updateScoreAndRounds() {
    winCounter.textContent = winCount;
    drawCounter.textContent = drawCount;
    loseCounter.textContent = loseCount;
    roundCounter.textContent = "Rounds: " + round; 
}


function playRound(user, com) {
     if (user == com) {
        console.log("Draw!");
        drawCount += 1;
        updateScoreAndRounds()
    } else if (
        (user === "rock" && com === "scissors") ||
        (user === "paper" && com === "rock") ||
        (user === "scissors" && com === "paper")
    ) {
        console.log("Win!");
        winCount++;
        updateScoreAndRounds();
    } else {
        console.log("Lose!");
        loseCount++;
        updateScoreAndRounds();
    }
    if (round >= 5) {
        running = false;
        if (winCount == loseCount) {
            draw();
        } else if (winCount > loseCount) {
            win();
        } else {
            lose();
        }
    }
}


rockBtn.addEventListener('click', () => {
    if (running) {
        playRound("rock", comchoice());
        round += 1;
    }
});
paperBtn.addEventListener('click', () => {
    if (running) {
        playRound("paper", comchoice());
        round += 1;
    }
});
scissorsBtn.addEventListener('click', () => {
    
    if (running) {
        playRound("scissors", comchoice());
        round += 1;
    }
});

function win() {
    console.log("win")
    emojy.textContent = "🌟 WON 😎 🌟"
}
function lose() {
    console.log("lose")
    emojy.textContent = "💔 LOSE 😞 💔"
}
function draw() {
    console.log("draw")
    emojy.textContent = "DRAW 😐"
}