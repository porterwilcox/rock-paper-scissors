//VARIABLES
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let winner = document.querySelector(".winner");
let reset = document.querySelector(".reset");
let playerScoreElem = document.getElementById("player-score");
let compScoreElem = document.getElementById("computer-score");
let playerScore = 0;
let compScore = 0;
let myNum = 0;
let compNum = 0;
let myChoiceStr = '';
let compChoiceStr = '';

//FUNCTION
let rockChoice = function () {
    myNum = 0;
    winner.style.visibility = "visible";
    myChoiceStr = "rock";
    compNum = Math.floor(Math.random() * 3);
    if (compNum == 0) {
        compChoiceStr = "rock";
    }
    else if (compNum == 1) {
        compChoiceStr = "scissors";
    }
    else if (compNum == 2) {
        compChoiceStr = "paper";
    }
}

let scissorsChoice = function () {
    myNum = 1;
    winner.style.visibility = "visible";
    myChoiceStr = "scissors";
    compNum = Math.floor(Math.random() * 3);
    if (compNum == 0) {
        compChoiceStr = "rock";
    }
    else if (compNum == 1) {
        compChoiceStr = "scissors";
    }
    else if (compNum == 2) {
        compChoiceStr = "paper";
    }
}

let paperChoice = function () {
    myNum = 2;
    winner.style.visibility = "visible";
    myChoiceStr = "paper";
    compNum = Math.floor(Math.random() * 3);
    if (compNum == 0) {
        compChoiceStr = "rock";
    }
    else if (compNum == 1) {
        compChoiceStr = "scissors";
    }
    else if (compNum == 2) {
        compChoiceStr = "paper";
    }
}

let whoWon = function () {
    if (myNum == compNum) {
        alert(`${myChoiceStr} vs ${compChoiceStr}. Tie!`);
    }
    else if (myNum - compNum == -1 || myNum - compNum == 2) {
        alert(`${myChoiceStr} vs ${compChoiceStr}. You win!`);
        playerScoreElem.innerText = playerScore+=1;
    }
    else if (compNum - myNum == -1 || compNum - myNum == 2) {
        alert(`${myChoiceStr} vs ${compChoiceStr}. You lose.`);
        compScoreElem.innerText = compScore+=1;
    }
    winner.style.visibility = "hidden";
}





//EVENTS
rock.addEventListener('click', rockChoice);

scissors.addEventListener('click', scissorsChoice);

paper.addEventListener('click', paperChoice);

winner.addEventListener('click', whoWon);

