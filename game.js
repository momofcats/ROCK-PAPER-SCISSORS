const COMP_WINS = 0;
const USER_WINS = 1;

let bodyElement = document.querySelector("body");
let resultsDiv = document.createElement("div"); //created div
let computerChoice = document.createElement("h4"); //created h4 inside of div
let computerSelection = computerPlay();
computerChoice.textContent = "Computer: " + computerSelection; // put text inside h4
resultsDiv.appendChild(computerChoice); //appended computer selection to a div

bodyElement.appendChild(resultsDiv); // appended div to document
const buttons = document.querySelector(".js-buttons-container"); //selected parent container
buttons.addEventListener("click", choosePlayer); // adds listener on each clicked button

function choosePlayer(e) {
  const playerSelection = e.target.value;
  let playerChoice = document.createElement("h4");
  playerChoice.textContent = "You: " + playerSelection;
  resultsDiv.appendChild(playerChoice); // add to div result of player selection
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
  let roundScore = document.createElement("h4");
  resultsDiv.appendChild(roundScore);
  if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    roundScore.textContent = "You lost the round!";
    return COMP_WINS;
  } else if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    roundScore.textContent = "You won the round!";
    return USER_WINS;
  } else {
    roundScore.textContent = "It's a tie!";
  }
}
