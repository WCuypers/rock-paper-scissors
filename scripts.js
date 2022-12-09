function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 1) {
        let computerChoice = "Rock";
        return computerChoice;
    } else if (randomNumber == 2) {
        let computerChoice = "Paper";
        return computerChoice;
    } else {
        let computerChoice = "Scissors";
        return computerChoice;
    }
};

function capitalize(word) {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return capitalized;
};

function playRound(playerSelection, computerSelection) {
    let player = capitalize(playerSelection);
    let computer = capitalize(computerSelection);
    if (player === computer) {
        return `It's a Tie! You both had ${player}!`;
    } else if (player === "Rock" && computer === "Paper" || player === "Paper" && computer === "Scissors" || player === "Scissors" && computer === "Rock") {
        computerScore += 1;
        return `You lose! ${computer} beats ${player}!`;
     } else {
        playerScore += 1;
        return `You win! ${player} beats ${computer}!`;
  }
};

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    console.log(playerScore);
    }
    
    if (playerScore > computerScore) {
        return `You won! You won ${playerScore} times, while the computer won ${computerScore} times!`;
    } else if (playerScore < computerScore) {
        return `You lost! You won ${playerScore} times, while the computer won ${computerScore} times!`;
    } else {
        return `It's a tie! You both have won ${playerScore} times!`;
    }
};

console.log(game()); // Result always either 0-0 tie, or 5-0 for player.