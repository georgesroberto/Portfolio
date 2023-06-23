const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');
const weeksEl = document.getElementById('weeks');

const newYears = "05 July 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const weeks = Math.round(days/7);

    secondsEl.innerHTML = seconds;
    minutesEl.innerHTML = minutes;
    hoursEl.innerHTML = hours;
    daysEl.innerHTML = days;
    weeksEl.innerHTML = weeks;

    if (totalSeconds == 0) {
        clearInterval(countdownInterval);
        alert("Happy Birthday Georges!");
    }
}

countdown();

setInterval(countdown, 1000);

