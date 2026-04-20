// The querySelector() method is a JavaScript Web API used to find and 
// return the first element within a document or 
// specific element that matches a specified CSS selector.

let timerDisplay = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');    

let msec = 0;
let sec = 0;
let min = 0;

let timerId = null;

startBtn.addEventListener('click', function() {
    if (timerId != null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    msec = 0;
    sec = 0;
    min = 0;
    timerDisplay.innerHTML = `00:00:00`;
});
                              

function startTimer() {
    msec++;
    if (msec == 100) {
        sec++;
        msec = 0;
       if (sec == 60) {
            min++;
            sec = 0;
       } 
    }
    let msecString;
    if (msec < 10) {
        msecString = `0${msec}`;
    }
    else {
        msecString = msec;
    }

     let secsString;
    if (sec < 10) {
        secsString = `0${sec}`;
    }
    else {
        secsString = sec;
    }

    let minsString;
    if (min < 10) {
        minsString = `0${min}`;
    }
    else {
        minsString = min;
    }                                                                                                                                                                                                 

    timerDisplay.innerHTML = `${minsString}:${secsString}:${msecString}`;
}