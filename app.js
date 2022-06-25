'use strict'

let outcome = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let message;

function computerPlay() {
    return outcome[Math.floor(Math.random() * outcome.length)];
};

function playerTotalScore () {
    let playerCurrentScore = document.querySelector('#player-Score');
    playerCurrentScore.textContent = playerScore;
};

function computerTotalScore () {
    let computerCurrentScore = document.querySelector('#computer-Score');
    computerCurrentScore.textContent = computerScore;
};


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        console.log('No one won! It\'s a tie game!!');
        console.log(`Computer - ${computerScore}   ${computerSelection} : ${playerSelection}   ${playerScore} - Player`);
    } else if (
        (computerSelection == 'paper' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'rock')  ||
        (computerSelection == 'rock' && playerSelection == 'paper')
        ) {
            playerScore = ++playerScore;
            playerTotalScore();
            console.log(`You won this round! ${playerSelection} beats ${ computerSelection}!!`);
            console.log(`Computer - ${computerScore}   ${computerSelection} : ${playerSelection}   ${playerScore} - Player`);
        } else {
            computerScore = ++computerScore;
            computerTotalScore();
            console.log(`You lost this round! ${computerSelection} beats ${playerSelection}!!`)
            console.log(`Computer - ${computerScore}   ${computerSelection} : ${playerSelection}   ${playerScore} - Player`);
        }
};

function declareWinner () {
    if (playerScore > computerScore) {
        alert('You won the battle! It was an epic one!')
    } else {
        alert('You lost! The Computer won!')
    }
};

let rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
});

let paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
});

let scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
});
