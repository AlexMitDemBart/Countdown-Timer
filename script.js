const newYear = "1 December 2021"

function calculateTime(){
    const daysElement = document.getElementById("days")
    const hoursElement = document.getElementById("hours")
    const minsElement = document.getElementById("mins")
    const secondsElement = document.getElementById("seconds")

    const newYearsTime = new Date(newYear)
    const currentTime = new Date();
    const totalSeconds = (newYearsTime - currentTime) / 1000

    const days = Math.floor(totalSeconds /3600 / 24)
    const hours = Math.floor(totalSeconds /3600) %24
    const mins = Math.floor(totalSeconds /60) %60
    const seconds = Math.floor(totalSeconds) %60

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = mins;
    secondsElement.innerHTML = seconds;
}

//Initial
setInterval(calculateTime, 1000);