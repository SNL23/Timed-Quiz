var countDownTimer;
var timerEl = document.querySelector(".timer")
var seconds = 90;

function setTime() {
    countDownTimer = setInterval(function () {
        seconds--;
        timerEl.textContent = "Time:" + seconds;
        if (seconds === 0) {
            endQuiz()
        }

    }, 1000);
}

function endQuiz() {
    clearInterval(countDownTimer)

}
function startQuiz() {
    setTime()

}

