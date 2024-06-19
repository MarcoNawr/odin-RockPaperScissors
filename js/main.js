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


// Event Listeners
//#############################

// Event Listeners:btn's 
//#########
btn1Round.addEventListener("click", () =>{
    resetStylesLastRound();
    amountRounds = 1;
    currentRound = 0;
    headlineCurrentRound.textContent = "CURRENT ROUND (1/1)";
    
});

btn3Round.addEventListener("click", () =>{
    resetStylesLastRound();
    amountRounds = 3;
    currentRound = 0;
    headlineCurrentRound.textContent = "CURRENT ROUND (1/3)";
});

btn5Round.addEventListener("click", () =>{
    resetStylesLastRound();
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
        return choice = "rock";
    }else if (random >=0.33 && random < 0.66){
        return choice = "paper";
    }else{
        return choice = "scissors"
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
                humanChoicePaper.style.backgroundColor = "green";
            }else if(computerChoice === "paper"){
                winner="Paper vs. Paper = Unentschieden";
                humanChoicePaper.style.backgroundColor = "yellow";
            } else if (computerChoice === "scissors"){
                winner="Paper vs. Scissors = Computer Wins";
                computerScore += 1;
                humanChoicePaper.style.backgroundColor = "red";
            }
            break;  
        case 'scissors':
            if(computerChoice === "rock"){
                winner="Scissors vs. Rock = Computer Wins"
                computerScore += 1;
                humanChoiceScissors.style.backgroundColor = "red";
            }else if(computerChoice === "paper"){
                winner="Scissors vs. Paper = Human Wins";
                humanScore += 1;
                humanChoiceScissors.style.backgroundColor = "green";
            } else if (computerChoice === "scissors"){
                winner="Scissors vs. Scissors = Unentschieden";
                humanChoiceScissors.style.backgroundColor = "yellow";
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
}