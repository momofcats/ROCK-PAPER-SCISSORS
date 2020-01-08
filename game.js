const COMP_WINS = 0;
const USER_WINS = 1;
let computerScore = 0;
let playerScore = 0;
let bodyElement = document.querySelector("body");
let resultsDiv = document.createElement("div");

bodyElement.appendChild(resultsDiv);
game();

function choosePlayer(e) {
  playerSelection = e.target.value;
  let playerChoice = document.createElement("h4");
  playerChoice.textContent = "You: " + player;
  resultsDiv.appendChild(playerChoice);
  return playerSelection;
}

function computerPlay() {
  let wordCode = Math.floor(Math.random() * 3);
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
  let computerChoice = document.createElement("h4");

  computerChoice.textContent = "Computer: " + computerSelection;
  resultsDiv.appendChild(computerChoice);
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
function game() {
  while (computerScore !== 5 || playerScore !== 5) {
    const buttons = document.querySelector(".js-buttons-container");
    buttons.addEventListener("click", choosePlayer);
    const resultRound = playRound(computerPlay(), chosePlayer());
    if (resultRound === COMP_WINS) {
      computerScore++;
      console.log(computerScore);
    } else if (resultRound === USER_WINS) {
      playerScore++;
      console.log(playerScore);
    }
  }
  if (computerScore > playerScore) {
    console.log("Computer won the game!");
  } else if (computerScore < playerScore) {
    console.log("Player won the game!");
  } else {
    console.log("No winner this time!");
  }
}
