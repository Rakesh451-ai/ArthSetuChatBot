// ArthSetu Chat — Finance Interview Timer
// 2-minute countdown for each finance interview question

let timeLeft = 120;
const timerEl = document.getElementById("timer");

if (timerEl) {
    const interval = setInterval(() => {
        timeLeft--;
        const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const secs = String(timeLeft % 60).padStart(2, "0");
        timerEl.textContent = `⏱ ${mins}:${secs}`;

        // Warning when 30 seconds left (finance interview pressure)
        if (timeLeft <= 30) timerEl.style.color = "#f44336";
        if (timeLeft <= 0) {
            clearInterval(interval);
            timerEl.textContent = "⏱ Time's up! Move to next question.";
        }
    }, 1000);
}

// (Any other functions from your original scripts.js would go here,
//  with all "FutureQuadra" or "Interview Coach" references replaced by "ArthSetu Chat")