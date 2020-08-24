let clockDisplay = document.querySelector(".clock__display").innerHTML;
let progressBar = document.querySelector(".clock__time-marker");
let toggleButton = document.querySelector("#start");
let resetButton = document.querySelector("#reset");

let workSessionDuration = 25 * 60;
let currentTimeLeftInSession = 25 * 60;
let isClockRunning = false;

toggleButton.addEventListener("click", event => {
  event.preventDefault();
  toggleClock();
});

const toggleClock = () => {
  if (!isClockRunning) {
    isClockRunning = true;
    clockTimer = setInterval(decreaseTime, 1000);
    toggleButtonName();
  } 
  
  else if (isClockRunning) {
    isClockRunning = false;
    clearInterval(clockTimer);
    toggleButtonName();
  }
}

const decreaseTime = () => {
  currentTimeLeftInSession--;
  updateProgressBar();
}

const toggleButtonName = () => {
  isClockRunning ? toggleButton.innerHTML = "STOP" : toggleButton.innerHTML = "START";
}

const getPercentageOfTimeElapsed = () => {
  let elapsedTime = workSessionDuration - currentTimeLeftInSession;
  let percentage = (elapsedTime * 100) / workSessionDuration;
  
  return percentage.toFixed(2);
}

const updateProgressBar = () => {
  let percentage = getPercentageOfTimeElapsed();
  progressBar.style.width = `${percentage}%`;
}
