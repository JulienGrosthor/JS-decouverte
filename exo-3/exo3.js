// you can write js here
console.log('exo-3');

let playerInput = prompt("Your choice ( rock, paper, scissors, bomb ) ?").toLowerCase();
let playerChoice = getPlayerChoice(playerInput);
let computerChoice = getComputerChoice();

function getPlayerChoice(playerInput) {
    if (playerInput === 'rock' || 'paper' || 'scissors' || 'bomb') {
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
    if(playerChoice === 'bomb'){
        return 'Won'
    }

    if(playerChoice === computerChoice) {
        return 'Tied'
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        return 'Won'
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper'){
        return 'Lost'
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock'){
        return 'Won'
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        return 'Lost'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        return 'Won'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock'){
        return 'Lost'
    }
}

function playGame(){
    let userChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();
    console.log('Player = ' + userChoice);
    console.log('Bot = ' + computerChoice);
    console.log(findWinner(userChoice, computerChoice));
}

playGame();