let randomNum;
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomNum = Math.random();
  if (randomNum <= 0.33) {
    computerSelection = "ROCK";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    computerSelection = "PAPER";
  } else {
    computerSelection = "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    alert("It's a tie! try again.");
    return "It's a tie!";
  } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
    playerScore++;
    return "You won! PAPER beats ROCK";
  } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
    computerScore++;
    return "You lost! ROCK beats SCISSORS";
  } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
    computerScore++;
    return "You lost! PAPER beats ROCK";
  } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
    playerScore++;
    return "You won! SCISSORS beats PAPER";
  } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
    computerScore++;
    return "You lost! SCISSORS beats PAPER";
  } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
    playerScore++;
    return "You won! ROCK beats SCISSORS";
  } else {
    alert("invalid input, try again");
    getComputerChoice();
    playerSelection = prompt("Enter your move:").toUpperCase();
    playRound(playerSelection, computerSelection);
  }
}

while (playerScore < 5 && computerScore < 5) {
  getComputerChoice();
  playerSelection = prompt("Enter your move:").toUpperCase();
  alert(
    playRound(playerSelection, computerSelection) +
      "\nYour Score: " +
      playerScore +
      "\nComputer's score: " +
      computerScore
  );
}

if (computerScore > playerScore) {
  alert("You lost the game! Better luck next time.");
} else if (computerScore < playerScore) {
  alert("Congratulations! You won the game");
}
