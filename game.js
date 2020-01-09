let playerScore = 0;
let computerScore = 0;

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
  console.log("you: " + playerSelection);
  console.log("computer: " + computerSelection);
  if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    console.log("You lost the round!");
    computerScore++;
  } else if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    console.log("You won the round!");
    playerScore++;
  } else {
    console.log("It's a tie!");
  }

  console.log("player score: " + playerScore);
  console.log("computer score: " + computerScore);
  game(computerScore, playerScore);
}

function game(computerScore, playerScore) {
  if (computerScore === 5 || playerScore === 5) {
    if (computerScore > playerScore) {
      console.log("Computer won the game!");
    } else if (playerScore > computerScore) {
      console.log("Player won the game!");
    } else {
      console.log("It's a tie!");
    }
    disableButtons();
  }
}

function disableButtons() {
  const button = document.querySelectorAll(".js-button");
  for (i = 0; i < button.length; i++) {
    button[i].disabled = true;
  }
}
