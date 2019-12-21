const COMP_WINS = 0;
const USER_WINS = 1;

const computerSelection = computerPlay();
console.log(computerSelection);
const buttons = document.querySelector(".js-buttons-container"); //selected parent container
buttons.addEventListener("click", choosePlayer); // adds listener on each clicked button

function choosePlayer(e) {
  const playerSelection = e.target.value;
  console.log(playerSelection);
  e.stopPropagation(); //Stop the event propagation from running up and down the DOM
  playRound(playerSelection, computerSelection);
}

function computerPlay() {
  let wordCode = Math.floor(Math.random() * 3); // returns a random integer between 0 and 2
  switch (wordCode) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    console.log("You lost the round!");
    return COMP_WINS;
  } else if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    console.log("You won the round!");
    return USER_WINS;
  } else {
    console.log("It's a tie!");
  }
}
