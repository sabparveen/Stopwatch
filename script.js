let hour = 0;
let minute = 0;
let second = 0;
let interval;

function start() {
    if (!interval) {
        interval = setInterval(timer, 1000);
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    clearInterval(interval);
    interval = null;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('hour').innerText = "00:";
    document.getElementById('minute').innerText = "00:";
    document.getElementById('seconds').innerText = "00";
}

function timer() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    document.getElementById('hour').innerText = (hour < 10 ? "0" + hour : hour) + ":";
    document.getElementById('minute').innerText = (minute < 10 ? "0" + minute : minute) + ":";
    document.getElementById('seconds').innerText = second < 10 ? "0" + second : second;
}
