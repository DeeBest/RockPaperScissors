'use strict'

let outcome = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

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

let results = document.querySelector('#message');
let choices = document.querySelector('#choices');


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        results.textContent = 'No one won! It\'s a tie game!!';
        choices.textContent = `COMPUTER ${computerSelection} ties with PLAYER ${playerSelection}!!`;
    } else if (
        (computerSelection == 'paper' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'rock')  ||
        (computerSelection == 'rock' && playerSelection == 'paper')
        ) {
            playerScore = ++playerScore;
            playerTotalScore();
            results.textContent = `You won this round!!`;
            choices.textContent = `PLAYER ${playerSelection} beats COMPUTER ${computerSelection}!!`;
        } else {
            computerScore = ++computerScore;
            computerTotalScore();
            results.textContent = `You lost this round!!`;
            choices.textContent = `COMPUTER ${computerSelection} beats PLAYER ${playerSelection}!!`;
        }
};

function myFunction() {
    let x = document.getElementById("game");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function declareWinner () {
    myFunction();
    alert("Press F5 to play again!")
    if (playerScore > computerScore) {
        results.textContent = 'You won the battle! It was an epic one!';
    } else {
        results.textContent = 'You lost! The Computer won!';
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