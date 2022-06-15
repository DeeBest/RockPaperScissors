let outcome = ["rock", "paper", "scissors"];
let playerSelection = prompt("What do you choose?, rock? paper? scissors?").toLowerCase();
let computerPlay = outcome[Math.floor(Math.random()*outcome.length)];
let computerSelection = computerPlay;

function playRound(playerSelection,computerSelection) {

    //alert("You lose! Paper beats Rock");
};

function game() {
    playRound();

        if (computerSelection === playerSelection) {
            console.log("This round is a draw!!");
        } 
        
        else if (computerSelection === "paper" && playerSelection === "rock") {
            console.log("You lose! Paper beats Rock!");
        } 
        
        else if (computerSelection === "scissors" && playerSelection === "paper") {
            console.log("You lose! Scissors beats Paper!");
        }

        else if (computerSelection === "paper" && playerSelection === "scissors") {
            console.log("You win! Scissors beats Paper!");
        }
       
        else if (computerSelection === "scissors" && playerSelection === "rock") {
            console.log("You win! Rock beats Scissors!");
        }

        else if (computerSelection === "rock" && playerSelection === "paper") {
            console.log("You win! Paper beats Rock!");
        }

       else if (computerSelection === "rock" && playerSelection === "scissors") {
            console.log("You lose! Rock beats Scissors!");
        }

        else {
            console.log("You lost this one by default since you failed to make a choice!")
        }

    console.log(playerSelection,computerSelection);
};
game();