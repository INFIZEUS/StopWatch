const clock = document.querySelector(".clock");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

let sec = 0, min = 0, hr = 0;
let intervalId;


// function to start the second hand
const startStopWatch = () => {

    intervalId = setInterval(() => {
        if(sec < 59) {
            sec++;
        } 
        else if(min >= 59) {
            min = 0;
            hr++;
        } else {
            sec = 0;
            min++;
        } 

        const hours = String(hr).padStart(2, "0");
        const minutes = String(min).padStart(2, "0");
        const seconds = String(sec).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);
};

// function to stop the stop watch timer
const stopStopWatch = (()=>{
    clearInterval(intervalId);
});