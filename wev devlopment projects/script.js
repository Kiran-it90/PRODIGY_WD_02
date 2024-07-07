let timer; // Timer variable
let startTime; // Time when start button is clicked
let pausedTime = 0; // Time spent paused
let running = false; // Flag to track if stopwatch is running
let lapCount = 1; // Lap count

// Start or stop function
function startStop() {
  if (!running) {
    startTimer();
    document.getElementById("startStopButton").textContent = "Stop";
    document.getElementById("pauseResumeButton").textContent = "Pause";
    document.getElementById("pauseResumeButton").disabled = false;
  } else {
    stopTimer();
    document.getElementById("startStopButton").textContent = "Start";
    document.getElementById("pauseResumeButton").textContent = "Pause";
  }
}

// Start the timer
function startTimer() {
  running = true;
  startTime = Date.now() - pausedTime;
  timer = setInterval(updateTime, 10);
}

// Pause or resume function
function pauseResume() {
  if (running) {
    clearInterval(timer);
    pausedTime = Date.now() - startTime;
    running = false;
    document.getElementById("pauseResumeButton").textContent = "Resume";
  } else {
    startTimer();
    document.getElementById("pauseResumeButton").textContent = "Pause";
  }
}

// Stop the timer
function stopTimer() {
  clearInterval(timer);
  running = false;
  pausedTime = 0;
}

// Reset function
function reset() {
  clearInterval(timer);
  running = false;
  pausedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStopButton").textContent = "Start";
  document.getElementById("pauseResumeButton").textContent = "Pause";
  document.getElementById("pauseResumeButton").disabled = true;
  lapCount = 1;
  document.getElementById("lapTimes").innerHTML = "";
}

// Update the displayed time
function updateTime() {
  let currentTime = Date.now();
  let elapsedTime = new Date(currentTime - startTime);
  let formattedTime = elapsedTime.toISOString().substr(11, 8);
  document.getElementById("display").textContent = formattedTime;
}

// Record lap time function
function recordLap() {
  let currentTime = Date.now();
  let elapsedTime = new Date(currentTime - startTime);
  let formattedTime = elapsedTime.toISOString().substr(11, 8);
  let lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCount}: ${formattedTime}`;
  document.getElementById("lapTimes").prepend(lapItem);
  lapCount++;
}
