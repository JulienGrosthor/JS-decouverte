// you can write js here
console.log('exo-3');

let playerInput = prompt("Your choice ( rock, paper, scissors ) ?").toLowerCase();
let playerChoice = getPlayerChoice(playerInput);
let computerChoice = getComputerChoice();

function getPlayerChoice(playerInput) {
    if (playerInput === 'rock' || 'paper' || 'scissors') {
        return playerInput;
    } else {
        console.log('MESSAGE: INPUT ERROR');
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (2 - 0) + 0);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function findWinner(playerChoice, computerChoice) {

}