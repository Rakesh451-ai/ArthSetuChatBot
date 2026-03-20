// 2-minute countdown timer for each question
let timeLeft = 120;

const timerEl = document.getElementById("timer");

if (timerEl) {
    const interval = setInterval(() => {
        timeLeft--;
        const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const secs = String(timeLeft % 60).padStart(2, "0");
        timerEl.textContent = `⏱ ${mins}:${secs}`;

        if (timeLeft <= 30) timerEl.style.color = "#f44336"; // red warning
        if (timeLeft <= 0) {
            clearInterval(interval);
            timerEl.textContent = "⏱ Time's up!";
        }
    }, 1000);
}