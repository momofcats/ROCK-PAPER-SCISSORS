(function() {
  let playerScore = 0;
  let computerScore = 0;

  const playerChoice = document.querySelector(".js-player_choice");
  const computerChoice = document.querySelector(".js-computer_choice");
  const compScore = document.querySelector(".js-computer_score");
  const yourScore = document.querySelector(".js-player_score");
  const gameOvermessage = document.querySelector(".js-game_result");

  const buttonsContainer = document.querySelector(".js-buttons-container");
  const buttons = document.querySelectorAll(".js-button");

  buttonsContainer.addEventListener("click", function(e) {
    const el = e.target;
    if (!el.classList.contains("js-button")) {
      return;
    }
    for (i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("button--selected");
    }
    el.classList.add("button--selected");
    playRound(el.alt);
  });

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
  function playRound(selected) {
    let playerSelection = selected;
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
  }
})();
