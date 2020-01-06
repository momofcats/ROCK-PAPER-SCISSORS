const COMP_WINS = 0;
const USER_WINS = 1;
let computerScore = 0;
let playerScore = 0;

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

function game(n) {
  for (let i = 0; i < n; i++) {
    const promptPlayer = prompt("Rock, paper, scissors?");
    const playerSelection = promptPlayer.toLowerCase();
    const computerSelection = computerPlay();
    const resultRound = playRound(playerSelection, computerSelection);
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

game(5);
