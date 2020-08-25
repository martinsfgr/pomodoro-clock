let clockDisplay = document.querySelector(".clock__display");
let progressBar = document.querySelector(".clock__time-marker");
let toggleButton = document.querySelector("#start");
let resetButton = document.querySelector("#reset");

let workSessionDuration = 25 * 60;
let currentTimeLeftInSession = workSessionDuration;
let isClockRunning = false;

toggleButton.addEventListener("click", event => {
  event.preventDefault();
  toggleClock();
});

const toggleClock = () => {
  if (!isClockRunning) {
    isClockRunning = true;
    clockTimer = setInterval(decreaseTime, 1000);
    checkEndOfSession(clockTimer);
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
  checkEndOfSession();
  updateProgressBar();
  updateClockDisplay(currentTimeLeftInSession);
}

const checkEndOfSession = () => {
  if (currentTimeLeftInSession === 0) {
    isClockRunning = false;
    clearInterval(clockTimer);
    toggleButtonName();
    currentTimeLeftInSession = workSessionDuration;
    alert('Take a break and start again =)');
  }
}

const toggleButtonName = () => {
  isClockRunning ? toggleButton.innerHTML = "STOP" : toggleButton.innerHTML = "START";
}

const getPercentageOfTimeElapsed = () => {
  let elapsedTime = workSessionDuration - currentTimeLeftInSession;
  let percentage = (elapsedTime * 100) / workSessionDuration;
  
  return percentage.toFixed(2);
}

const updateClockDisplay = (secs) => {
  let minutes = Math.floor(secs / 60);
  let seconds = secs % 60;

  const formattedSchedule = [minutes, seconds]
    .map(value => value > 10 ? value : "0" + value)
    .join(":");
  
  clockDisplay.innerHTML = formattedSchedule;
}

const updateProgressBar = () => {
  let percentage = getPercentageOfTimeElapsed();
  progressBar.style.width = `${percentage}%`;
}

updateClockDisplay(workSessionDuration);
