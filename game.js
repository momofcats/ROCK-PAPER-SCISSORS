let playerScore = 0;
let computerScore = 0;

let resultsContainer = document.createElement("div");
let bodyElement = document.querySelector("body");
const playerChoice = document.createElement("h4");
const computerChoice = document.createElement("h4");
const compScore = document.createElement("h4");
const yourScore = document.createElement("h4");
const gameOvermessage = document.createElement("h4");
bodyElement.appendChild(resultsContainer);

const buttons = document.querySelector(".js-buttons-container");
buttons.addEventListener("click", playRound);

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
function playRound(e) {
  let playerSelection = e.target.value;
  let computerSelection = computerPlay();
  showSelectons(playerSelection, computerSelection);
  if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    computerScore++;
  } else if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    playerScore++;
  }
  compScore.textContent = "computer score: " + computerScore;
  yourScore.textContent = "player score: " + playerScore;
  resultsContainer.appendChild(compScore);
  resultsContainer.appendChild(yourScore);
  game(computerScore, playerScore);
}

function game(computerScore, playerScore) {
  if (computerScore === 5 || playerScore === 5) {
    if (computerScore > playerScore) {
      gameOvermessage.textContent = "Computer won the game!";
    } else if (playerScore > computerScore) {
      gameOvermessage.textContent = "Player won the game!";
    } else {
      gameOvermessage.textContent = "It's a tie!";
    }
    resultsContainer.appendChild(gameOvermessage);
    disableButtons();
  }
}

function disableButtons() {
  const button = document.querySelectorAll(".js-button");
  for (i = 0; i < button.length; i++) {
    button[i].disabled = true;
  }
}

function showSelectons(playerSelection, computerSelection) {
  playerChoice.textContent = "player: " + playerSelection;
  computerChoice.textContent = "computer: " + computerSelection;
  resultsContainer.appendChild(computerChoice);
  resultsContainer.appendChild(playerChoice);
}
