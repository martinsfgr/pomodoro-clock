let clockDisplay = document.querySelector(".clock__display").innerHTML;
let toggleButton = document.querySelector("#start");

let workingTime = 25 * 60;

toggleButton.addEventListener("click", event => {
  event.preventDefault();

  togglePomodoroTimer(toggleButton);
  console.log("Botão funcionando");
});

const togglePomodoroTimer = (button) => {
  if (button.innerHTML === "START") {
    startTimer(true);
    button.innerHTML = "STOP";
  } else {
    startTimer(false);
    button.innerHTML = "START";
  }
}

const startTimer = (inProgress) => {
  let refreshInterval = setInterval(pomodoroInProgress, 1000);

  if (!inProgress) {
    console.log('a');
  }
}

const pomodoroInProgress = () => {
  workingTime--;
  console.log(workingTime);
}
