const alarm = document.getElementById('alarm');
const setButton = document.getElementById('set');
const resetButton = document.getElementById('reset');
const audio = new Audio('./File_Name.mp3');

let setAlarm;

setButton.addEventListener('click', readValue);
resetButton.addEventListener('click', resetValues);

function readValue() {
    let hour1 = document.getElementById('hour-value').selectedIndex;
    let hour2 = document.getElementById('hour-value').options;

    let minute1 = document.getElementById('minute-value').selectedIndex;
    let minute2 = document.getElementById('minute-value').options;

    let second1 = document.getElementById('second-value').selectedIndex;
    let second2 = document.getElementById('second-value').options;

    setAlarm = `${hour2[hour1].text}:${minute2[minute1].text}:${second2[second1].text}`;
}

function resetValues() {
    document.getElementById('hour-value').selectedIndex = null;
    document.getElementById('minute-value').selectedIndex = null;
    document.getElementById('second-value').selectedIndex = null;
    setAlarm = null;
}

function checkTimes(i) {
    return (i < 10) ? "0" + i : i;
}

function ringAlarm(alarm, time) {
    if (!alarm) {
        audio.pause();
    }
    if (alarm === time) {
        audio.play();
    }
}

function showCurrentTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let time = `${checkTimes(h)}:${checkTimes(m)}:${checkTimes(s)}`;

    document.getElementById('hours').innerHTML = checkTimes(h);
    document.getElementById('min').innerHTML = checkTimes(m);
    document.getElementById('sec').innerHTML = checkTimes(s);

    setTimeout(function() {
        showCurrentTime();
        ringAlarm(setAlarm, time)
    }, 1000);
}

showCurrentTime();