let score1 = 0;
let score2 = 0;
let timeLeft = 10;
let gameInterval;
let isPlaying = false;

const scoreDisplay1 = document.getElementById("score1");
const scoreDisplay2 = document.getElementById("score2");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Start Game Function
startBtn.addEventListener("click", () => {
    score1 = 0;
    score2 = 0;
    timeLeft = 10;
    isPlaying = true;
    scoreDisplay1.textContent = score1;
    scoreDisplay2.textContent = score2;
    startBtn.disabled = true;

    gameInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            isPlaying = false;
            startBtn.disabled = false;
            if (score1 > score2) {
                alert("Player 1 Wins! 🎉");
            } else if (score2 > score1) {
                alert("Player 2 Wins! 🎉");
            } else {
                alert("It's a Tie! 🤝");
            }
        }
    }, 1000);
});

// Player 1 Clicking/Tapping
btn1.addEventListener("click", () => {
    if (isPlaying) {
        score1++;
        scoreDisplay1.textContent = score1;
    }
});

// Player 2 Clicking/Tapping
btn2.addEventListener("click", () => {
    if (isPlaying) {
        score2++;
        scoreDisplay2.textContent = score2;
    }
});

// Keyboard Controls (Player 1 = 'A' Key, Player 2 = 'L' Key)
window.addEventListener("keydown", (e) => {
    if (!isPlaying) return;
    if (e.key.toLowerCase() === "a") {
        score1++;
        scoreDisplay1.textContent = score1;
    } else if (e.key.toLowerCase() === "l") {
        score2++;
        scoreDisplay2.textContent = score2;
    }
});