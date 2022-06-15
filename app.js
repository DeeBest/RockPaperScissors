let outcome = ["rock", "paper", "scissors"];
let playerSelection = prompt("What do you choose?, rock? paper? scissors?").toString().toLowerCase();
let computerPlay = outcome[Math.floor(Math.random()*outcome.length)];
let computerSelection = computerPlay;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection) {

};

function game() {
    playRound();

    if    (computerSelection === playerSelection) {
            console.log("This round is a draw!!");

        } 
        
        else if (computerSelection === "paper" && playerSelection === "rock") {
            computerScore++;
            console.log("You lose! Paper beats Rock!");
        } 
        
        else if (computerSelection === "scissors" && playerSelection === "paper") {
            computerScore++;
            console.log("You lose! Scissors beats Paper!");
        }

        else if (computerSelection === "paper" && playerSelection === "scissors") {
            playerScore++;
            console.log("You win! Scissors beats Paper!");
        }
       
        else if (computerSelection === "scissors" && playerSelection === "rock") {
            playerScore++;
            console.log("You win! Rock beats Scissors!");
        }

        else if (computerSelection === "rock" && playerSelection === "paper") {
            playerScore++;
            console.log("You win! Paper beats Rock!");
        }

       else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;    
        console.log("You lose! Rock beats Scissors!");
        }

        else {
            console.log("You lost this one by default since you failed to make a choice!")
        }

        console.log("Player" + "-" + playerScore + "   " + playerSelection + " : "  + computerSelection + 
        "   " + computerScore + "-" + "Computer");
};
game();
/* game();
game();
game();
game(); */