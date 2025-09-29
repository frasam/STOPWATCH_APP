let displayResult = document.querySelector(".display-result");
let startBtn = document.querySelector(".startBtn");
let stopBtn = document.querySelector(".stopBtn");
let resetBtn = document.querySelector(".resetBtn");

let startWatch = 0; // starting time
let elapseTime = 0; // time that has passed
let timeBetween;    // to store interval ID
let isActive = false;

startBtn.addEventListener("click", () => {
    if (!isActive) {
        startWatch = Date.now() - elapseTime; 
        timeBetween = setInterval(update, 10);
        isActive = true;
    }
});

stopBtn.addEventListener("click", () => {
    if (isActive) {
        clearInterval(timeBetween); 
        elapseTime = Date.now() - startWatch;
        isActive = false;
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timeBetween); 
    elapseTime = 0;
    startWatch = 0;
    isActive = false;
    displayResult.textContent = `00:00:00:00`;
});

function update() {
    let currentTime = Date.now();
    elapseTime = currentTime - startWatch;

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapseTime / 1000) % 60);
    let milliseconds = Math.floor((elapseTime % 1000) / 10);

    displayResult.textContent =
        `${hours.toString().padStart(2, "0")}:
        ${minutes.toString().padStart(2, "0")}:
        ${seconds.toString().padStart(2, "0")}: 
        ${milliseconds.toString().padStart(2, "0")}`;
}