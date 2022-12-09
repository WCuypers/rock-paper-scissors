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
}

function capitalize(word) {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return capitalized;
} 

function playRound(playerSelection, computerSelection) {
    let player = capitalize(playerSelection);
    let computer = capitalize(computerSelection);
    if (player === computer) {
        return `It's a Tie! You both had ${player}!`
  } else if (player === "Rock" && computer === "Paper" || player === "Paper" && computer === "Scissors" || player === "Scissors" && computer === "Rock") {
        return `You lose! ${computer} beats ${player}!`
  } else {
        return `You win! ${player} beats ${computer}!`
  }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));