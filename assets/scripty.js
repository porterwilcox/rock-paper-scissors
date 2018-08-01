//VARIABLES
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let winner = document.querySelector(".winner");
let myNum = 0;
let compNum = 0;

//FUNCTION
let rockChoice = function () {
   myNum = 0;
   winner.style.visibility = "visible";
   compNum = Math.floor(Math.random()*3);
}

let scissorsChoice = function () {
    myNum = 1;
    winner.style.visibility = "visible";
    compNum = Math.floor(Math.random()*3);
}

let paperChoice = function () {
    myNum = 2;
    winner.style.visibility = "visible";
    compNum = Math.floor(Math.random()*3);
}

let whoWon = function () {
    if(myNum == compNum) {
        alert("Tie!");
    }
    else if (myNum - compNum == -1 || myNum - compNum == 2) {
        alert("You Win!");
    }
    else if (compNum - myNum == -1 || compNum - myNum == 2) {
        alert("Wha Wha Whaaa! Computer Wins...")
    }
}




//EVENTS
rock.addEventListener('click', rockChoice);

scissors.addEventListener('click', scissorsChoice);

paper.addEventListener('click', paperChoice);

winner.addEventListener('click', whoWon);
