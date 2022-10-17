function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num==0) {
        return "rock"
    } else if (num==1) {
        return "paper"
    } else {
        return "scissors"
    }

}
function playRound (playerSelection, computerSelection) {

    playerSelection.toLowerCase()

    if (playerSelection===computerSelection) {
        return "Tie!"
    } else if (playerSelection=="rock" && computerSelection=="paper") {
        return "You Lose!"
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        return "You Lose!"
    } else if (playerSelection=="scissors" && computerSelection=="rock") {
        return "You Lose"
    } else {
        return "You Win!"
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
