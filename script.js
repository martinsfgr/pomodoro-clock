let clockDisplay = document.querySelector(".clock__display").innerHTML;
let toggleButton = document.querySelector("#start");

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
  getPercentageOfTimeElapsed();
  console.log(currentTimeLeftInSession);
}

const toggleButtonName = () => {
  isClockRunning ? toggleButton.innerHTML = "STOP" : toggleButton.innerHTML = "START";
}

const getPercentageOfTimeElapsed = () => {
  let elapsedTime = workSessionDuration - currentTimeLeftInSession;
  let percentage = (elapsedTime * 100) / workSessionDuration;
  console.log(percentage);
}
