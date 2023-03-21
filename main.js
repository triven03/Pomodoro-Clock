var start = document.getElementById('start');
var reset = document.getElementById('reset');
var wp = document.getElementById('wplus');
var wmin = document.getElementById('wminus');
var bp = document.getElementById('bplus');
var bmin = document.getElementById('bminus');



var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;
var workmin = 25;
var breakmin = 5;
var currentTime = 0;
var isRunning = false;

start.addEventListener('click', function() {
    isRunning = !isRunning;

    updateButton();
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        stopInterval()
        startTimer = undefined;
    }
})

wp.addEventListener('click', function() {
    workmin++;
    wm.innerText = workmin;
});
wmin.addEventListener('click', function() {
    if (wm.innerText != 0) {
        workmin--;

        wm.innerText = workmin;
    }
});
bp.addEventListener('click', function() {
    breakmin++;
    bm.innerText = breakmin;
});
bmin.addEventListener('click', function() {
    if (bm.innerText != 0) {
        breakmin--;
        bm.innerText = breakmin;
    }
});


reset.addEventListener('click', function() {
    wm.innerText = workmin;
    ws.innerText = "00";

    bm.innerText = breakmin;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})




//Start Timer Function
function timer() {
    //Work Timer Countdown
    if (ws.innerText != 0) {
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if (wm.innerText == 0 && ws.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

function updateButton() {
    if (isRunning) {
        start.innerText = "Stop"
        return
    }

    start.innerText = "Start"
}

//Stop Timer Function
function stopInterval() {
    clearInterval(startTimer);
}