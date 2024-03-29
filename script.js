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

function playGame(computerSelection, playerSelection){
    if (playerScore == 5) {
        return String('This game is already over, you beat the computer!')
    } else if (computerScore == 5) {
        return String('This game is already over, the computer beat you!')
    } else {
        if (computerSelection == playerSelection) {
            return 'Game is a tie!'
        } else if (playerSelection != 'rock' && playerSelection != 'scissors' && playerSelection != 'paper') {
            return 'You did not enter Rock, Paper, or Scissors.'
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors')
        || (playerSelection == 'scissors' && computerSelection == 'paper')
        || (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerScore++;
    
            if (playerScore == 5) {
                return String('You win the game! You picked ' + playerSelection + ' and the compter picked ' + computerSelection + '. Your score is now '
            + playerScore + `. The computer's score is now ` + computerScore + '.')
            } else {
                return String('You won that round! You picked ' + playerSelection + ' and the compter picked ' + computerSelection + '. Your score is now '
            + playerScore + `. The computer's score is now ` + computerScore + '.')
            }
        } else {
            computerScore++;
    
            if (computerScore == 5) {
                return String('You lost the game! You picked ' + playerSelection + ' and the compter picked ' + computerSelection + '. Your score is now '
                + playerScore + `. The computer's score is now ` + computerScore + '.')
            } else {
                return String('You lose that round! You picked ' + playerSelection + ' and the compter picked ' + computerSelection + '. Your score is now '
            + playerScore + `. The computer's score is now ` + computerScore + '.')
            }
        }
    }
    
};

const resultsContainer = document.querySelector('.results')

const rock = document.getElementById('rock')

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    const result = document.createElement('p');
    result.textContent =  playGame(getComputerChoice(), rock.innerText.toLowerCase());

    resultsContainer.appendChild(result);
})

const paper = document.getElementById('paper')

paper.addEventListener('click', () => {
    const result = document.createElement('p');
    result.textContent =  playGame(getComputerChoice(), paper.innerText.toLowerCase());

    resultsContainer.appendChild(result);
})

const scissors = document.getElementById('scissors')

scissors.addEventListener('click', () => {
    const result = document.createElement('p');
    result.textContent =  playGame(getComputerChoice(), scissors.innerText.toLowerCase());

    resultsContainer.appendChild(result);
})