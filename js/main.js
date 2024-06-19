// GLOBAL VARIABLES DEKLARATION
//#############################
let humanScore = 0;
let computerScore = 0;
let amountRounds = 1;
let currentRound = 0;
let humanChoice = "errorMessage";

const btn1Round = document.querySelector("#btnGo1");
const btn3Round = document.querySelector("#btnGo3");
const btn5Round = document.querySelector("#btnGo5");
const headlineCurrentRound = document.querySelector(".h2rpsCurrentRound");
const humanChoiceRock = document.querySelector("#humanChoiceRock");
const humanChoicePaper = document.querySelector("#humanChoicePaper");
const humanChoiceScissors = document.querySelector("#humanChoiceScissors");
const rpsResultCurrentRound = document.querySelector(".rpsResultCurrentRound");
const p_rpsResultCurrentRound = document.querySelector("#p_rpsResultCurrentRound");
const computerchoice__icon = document.querySelector(".computerchoice__icon");
const computerchoice__choice = document.querySelector(".computerchoice__choice");

//const SVG
const SVG_WAITING = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>';
const SVG_ROCK = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"/></svg>';
const SVG_PAPER = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"/></svg>';
const SVG_SCISSOR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9l0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z"/></svg>';

// Event Listeners
//#############################

// Event Listeners:btn's 
//#########
btn1Round.addEventListener("click", () =>{
    resetGame();
    amountRounds = 1;
    currentRound = 0;
    headlineCurrentRound.textContent = "CURRENT ROUND (1/1)";
    
});

btn3Round.addEventListener("click", () =>{
    resetGame();
    amountRounds = 3;
    currentRound = 0;
    headlineCurrentRound.textContent = "CURRENT ROUND (1/3)";
});

btn5Round.addEventListener("click", () =>{
    resetGame();
    amountRounds = 5;
    currentRound = 0;
    headlineCurrentRound.textContent = "CURRENT ROUND (1/5)";
});

// Event Listeners: humanChoice divs
//#########
humanChoiceRock.addEventListener("click", () =>{
    resetStylesLastRound();
    humanChoice = "rock";
    if(currentRound<amountRounds){
        playRound();
        currentRound += 1;
    }
    if(currentRound+1<=amountRounds){
        headlineCurrentRound.textContent = `CURRENT ROUND (${currentRound+1}/${amountRounds})`;
    }
});

humanChoicePaper.addEventListener("click", () =>{
    resetStylesLastRound();
    humanChoice = "paper";
    if(currentRound<amountRounds){
        playRound();
        headlineCurrentRound.textContent = `CURRENT ROUND (${currentRound+1}/${amountRounds})`;
        currentRound += 1;
    }
    if(currentRound+1<=amountRounds){
        headlineCurrentRound.textContent = `CURRENT ROUND (${currentRound+1}/${amountRounds})`;
    }
    
});

humanChoiceScissors.addEventListener("click", () =>{
    resetStylesLastRound();
    humanChoice = "scissors";
    if(currentRound<amountRounds){
        playRound();
        headlineCurrentRound.textContent = `CURRENT ROUND (${currentRound+1}/${amountRounds})`;
        currentRound += 1;
    }
    if(currentRound+1<=amountRounds){
        headlineCurrentRound.textContent = `CURRENT ROUND (${currentRound+1}/${amountRounds})`;
    }
   
});


// FUNKTIONS DEKLARATION
//#############################

function getComputerChoice(){
    //random return “rock”, “paper” or “scissors”
    let choice = "";
    let random = Math.random();
    //console.log("Random Number = " + random);

    if (random < 0.33){
        computerchoice__icon.removeChild(computerchoice__icon.firstElementChild);
        computerchoice__icon.innerHTML = SVG_ROCK;
        return choice = "rock";
    }else if (random >=0.33 && random < 0.66){
        computerchoice__icon.removeChild(computerchoice__icon.firstElementChild);
        computerchoice__icon.innerHTML = SVG_PAPER;
        return choice = "paper";
    }else{
        computerchoice__icon.removeChild(computerchoice__icon.firstElementChild);
        computerchoice__icon.innerHTML = SVG_SCISSOR;
        return choice = "scissors";
    }
}

function playRound(){
    // play a round between computer an human
    let computerChoice = getComputerChoice();
    let winner = "";

    switch (humanChoice) {
        case 'errorMessage':
            console.log("Falsche Eingabe. Erlaubt sind nur Rock, Paper oder Scissors")
            break;
        case 'rock':
            if(computerChoice === "rock"){
                winner="Rock vs. Rock = Unentschieden"
                setRpsResultCurrentRound(winner, "yellow", "black");
            }else if(computerChoice === "paper"){
                winner="Rock vs. Paper = Computer Wins";
                computerScore += 1;
                setRpsResultCurrentRound(winner, "red", "white");
            } else if (computerChoice === "scissors"){
                winner="Rock vs. Scissors = Human Wins";
                humanScore += 1;
                setRpsResultCurrentRound(winner, "green", "white");
            }
            break;  
        case 'paper':
            if(computerChoice === "rock"){
                winner="Paper vs. Rock = Human Wins"
                humanScore += 1;
                setRpsResultCurrentRound(winner, "green", "white");
            }else if(computerChoice === "paper"){
                winner="Paper vs. Paper = Unentschieden";
                setRpsResultCurrentRound(winner, "yellow", "black");
            } else if (computerChoice === "scissors"){
                winner="Paper vs. Scissors = Computer Wins";
                computerScore += 1;
                setRpsResultCurrentRound(winner, "red", "white");
            }
            break;  
        case 'scissors':
            if(computerChoice === "rock"){
                winner="Scissors vs. Rock = Computer Wins"
                computerScore += 1;
                setRpsResultCurrentRound(winner, "red", "white");
            }else if(computerChoice === "paper"){
                winner="Scissors vs. Paper = Human Wins";
                setRpsResultCurrentRound(winner, "green", "white");
                humanScore += 1;
            } else if (computerChoice === "scissors"){
                winner="Scissors vs. Scissors = Unentschieden";
                setRpsResultCurrentRound(winner, "yellow", "black");
            }
            break;  
        default:
          console.log("Sorry, something went wrong");
      }

 //easy other Solution
//  function playRound(humanChoice, computerChoice) {
//     if(humanChoice === computerChoice) {
//         console.log("It's a tie! Make another pick"); 
//     }
//     else if(
//         (humanChoice == "rock" && computerChoice == "scissors") ||
//         (humanChoice == "scissors" && computerChoice == "paper") ||
//         (humanChoice == "paper" && computerChoice == "rock")
//     ) {
            //alle die gewinnen so
//         humanScore++;
//         console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
//     } else {
            //alle anderen verlierem, also so
//         computerScore++;
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
//     }
// }


    console.clear();
    console.log(winner + " Zwischenstand ==> Human: " + humanScore + " Computer: " + computerScore);
}

function setRpsResultCurrentRound(text, backgroundColor, color){
    p_rpsResultCurrentRound.textContent = text;
    rpsResultCurrentRound.style.backgroundColor = backgroundColor;
    rpsResultCurrentRound.style.color = color;
}

function resetStylesLastRound(){
    humanChoiceRock.style.backgroundColor = "var(--secondaryColor300)";
    humanChoicePaper.style.backgroundColor = "var(--secondaryColor300)";
    humanChoiceScissors.style.backgroundColor = "var(--secondaryColor300)";
    rpsResultCurrentRound.style.backgroundColor = "var(--secondaryColor500)";
    rpsResultCurrentRound.style.color = "white";
}

function resetGame(){
        computerchoice__icon.removeChild(computerchoice__icon.firstElementChild);
        computerchoice__icon.innerHTML = SVG_WAITING;
        humanChoiceRock.style.backgroundColor = "var(--secondaryColor300)";
        humanChoicePaper.style.backgroundColor = "var(--secondaryColor300)";
        humanChoiceScissors.style.backgroundColor = "var(--secondaryColor300)";
        rpsResultCurrentRound.style.backgroundColor = "var(--secondaryColor500)";
        rpsResultCurrentRound.style.color = "white";
        humanScore = 0;
        computerScore = 0;
        amountRounds = 1;
        currentRound = 0;
        humanChoice = "errorMessage";
}