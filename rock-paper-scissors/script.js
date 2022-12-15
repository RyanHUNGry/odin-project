const getComputerChoice = () => {
    const choices = ["Scissors", "Rock", "Paper"]
    return choices[Math.floor((Math.random()*choices.length))]
}

const playRound = (playerSelection, computerSelection) => {
    const playerSelectionLower = playerSelection.toLowerCase();
    const computerSelectionLower = computerSelection.toLowerCase();

    // Use a switch statement to determine the outcome of the round
    switch (playerSelectionLower) {
        case computerSelectionLower:
            return "Tie!";
        case "scissors":
            if (computerSelectionLower === "rock") {
                return "You lose, scissors loses to rock";
            } else {
                return "You win, scissors wins to paper";
            }
        case "rock":
            if (computerSelectionLower === "paper") {
                return "You lose, rock loses to paper";
            } else {
                return "You win, rock wins to scissors";
            }
        case "paper":
            if (computerSelectionLower === "scissors") {
                return "You lose, paper loses to scissors";
            } else {
                return "You win, paper wins to rock";
            }
    }
}

const game = (playerSelection) => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}

const input = window.prompt("Enter your choice of rock, papers, or scissors!")
game(input)
