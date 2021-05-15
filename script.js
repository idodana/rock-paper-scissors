function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper") {
        return "Computer Wins!";
    }
    else {
        return "Player Wins!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your selection (Rock/Paper/Scissors):");
        let computerSelection = computerPlay();
        console.log(`player chose ${playerSelection}.\nComputer chose ${computerSelection}.\n${playRound(playerSelection, computerSelection)}`);
    }
}

game()