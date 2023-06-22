const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = '5th July 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = new Date(newYearsDate - currentDate) * 1000;

    const days = Math.floor(seconds / 360 /24);
    const hours = Math.floor(seconds /360 ) % 24;
    const minutes = Math.floor(seconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds)

    cons
    alert(newYearsDate - currentDate);
}

//countdown();

//setInterval(countdown, 1000);