let outcome = ["rock", "paper", "scissors"];
let playerSelection = "rock";
let computerPlay = outcome[Math.floor(Math.random()*outcome.length)];
let computerSelection = computerPlay;
//console.log(playerSelection,computerSelection);

function playRound(playerSelection,computerSelection) {
    console.log(playerSelection,computerSelection);
    alert("You lose! Paper beats Rock");
};
playRound(playerSelection,computerSelection);

/* function computerPlay() {
    computerPlay = outcome[Math.floor(Math.random()*outcome.length)];
    return computerPlay;
    };
    console.log(computerPlay()); */
    