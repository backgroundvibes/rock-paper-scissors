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
        return "You Lose!"
    } else {
        return "You Win!"
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach ((button) => {
    button.addEventListener('click', () => {
        let bclass = button.className;
        let bstring = String(bclass);
        let result = playRound(bstring, getComputerChoice())
        scoreboard(result)
        roundCount ()
    })
})

let playerScore = document.querySelector(".player")
let computerScore = document.querySelector (".computer")
let p = 0
let c = 0
let roundWin = document.querySelector(".roundWinner")

function scoreboard(res) {
    rounds ++

    if (res === "You Win!") {
        roundWin.textContent = "You Win!"
        p ++
        playerScore.textContent = "Player Score: "
        playerScore.textContent += p
    } else if (res === "You Lose!") {
        roundWin.textContent = "You Lose!"
        c ++
        computerScore.textContent = "Computer Score: "
        computerScore.textContent += c
    } else {
        roundWin.textContent = "Tie!"
    }
}

let rounds = 0

function roundCount () {
    if (rounds != 5) {
       
    } else if (p > c) {
        roundWin.textContent = "You won the game!"
        buttons.forEach ((button) => {
            button.remove()
        })
    } else if (p < c) {
        roundWin.textContent = "You lost the game!"
        buttons.forEach ((button) => {
            button.remove()
        })
    } else {
        roundWin.textContent = "You tied with the computer for the game!"
        buttons.forEach ((button) => {
            button.remove()
        })
    }
}

