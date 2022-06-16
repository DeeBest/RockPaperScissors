'use strict'

function computerPlay() {

    let outcome = ["rock", "paper", "scissors"];

    computerPlay = outcome[Math.floor(Math.random() * outcome.length)];

    return computerPlay;
};
computerPlay();

function playRound(playerSelection, computerSelection) {

    playerSelection = "rock";

    computerSelection = computerPlay;

    if (computerPlay === "paper") {

        console.log("You lose! Paper beats Rock.");

    } else if (computerPlay === "scissors") {

        console.log("You win! Rock beats Scissors.");

    } else if (computerPlay === "rock") {

        console.log("It's a Tie!");
    }

    console.log(playerSelection, computerPlay);
}

function game() {

    playRound();

}
game();