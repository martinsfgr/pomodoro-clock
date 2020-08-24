let clockDisplay = document.querySelector(".clock__display").innerHTML;
let toggleButton = document.querySelector("#start");
let workingTime = 25 * 60;

toggleButton.addEventListener("click", event => {
  event.preventDefault();
  toggleClock(toggleButton);
});

const toggleClock = (button) => {
  if (button.innerHTML === "START") {
    clockTimer = setInterval(() => {
      workingTime--;
      console.log(workingTime);
    }, 1000);

    button.innerHTML = "STOP";
  } else if (button.innerHTML === "STOP") {
    clearInterval(clockTimer);
    button.innerHTML = "START";
  }
}
