function getComputerChoice(){
   let randomNumber = Math.random()
   if (randomNumber < 0.33) {
    return 'rock'
   } else if (randomNumber < 0.66) {
    return 'paper'
   } else {
    return 'scissors'
   }
}

console.log(getComputerChoice())

let playerSelection = prompt('What is your game choice? (Rock, Paper, Scissors').toLowerCase()

console.log(playerSelection)

let computerSelection = getComputerChoice()

function playGame(computerSelection, playerSelection){
    if (computerSelection == playerSelection) {
        return 'Game is a tie!'
    } else if ((computerSelection == 'rock' && playerSelection == 'scissors')
    || (playerSelection == 'scissors' && computerSelection == 'paper')
    || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return string('You win! You picked' + playerSelection + ' and the compter picked ' + computerSelection)
    }
}