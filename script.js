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

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        let bclass = button.className;
        let playerSelection = String(bclass);
        let computerSelection = getComputerChoice()
        let result = document.querySelector('div.results')
        result.textContent = `${playRound(playerSelection, computerSelection)}`
    });
});








/*
function game () {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?")
        let computerSelection = getComputerChoice()

        if (playRound (playerSelection, computerSelection) === "You Win!") {
            playerScore ++
            alert ("You win this round!")
        } else if (playRound (playerSelection, computerSelection) === "You Lose!") {
            computerScore ++
            alert ("Computer wins this round!")
        } else 
            alert ("This round is a tie!")
            continue

    }

    alert ("You won " + playerScore + " rounds, the computer won " + computerScore + ".")
}
*/



