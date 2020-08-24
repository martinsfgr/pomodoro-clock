let clockDisplay = document.querySelector(".clock__display").innerHTML;
let toggleButton = document.querySelector("#start");

let workingTime = 25 * 60;
let isClockRunning = false;

toggleButton.addEventListener("click", event => {
  event.preventDefault();
  toggleClock();
});

const decreaseTime = () => {
  workingTime--;
  console.log(workingTime);
}

const toggleClock = () => {
  if (!isClockRunning) {
    isClockRunning = true;
    clockTimer = setInterval(decreaseTime, 1000);

    toggleButton.innerHTML = "STOP";
  } 
  
  else if (isClockRunning) {
    isClockRunning = false;
    clearInterval(clockTimer);

    toggleButton.innerHTML = "START";
  }
}
