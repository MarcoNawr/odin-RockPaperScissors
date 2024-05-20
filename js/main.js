// GLOBAL VARIABLES DEKLARATION
//#############################
let humanScore = 0;
let computerScore = 0;

// FUNKTIONS DEKLARATION
//#############################

function getComputerChoice(){
    //random return “rock”, “paper” or “scissors”
    let choice = "";
    let random = Math.random();
    console.log("Random Number = " + random);

    if (random < 0.33){
        return choice = "rock";
    }else if (random >=0.33 && random < 0.66){
        return choice = "paper";
    }else{
        return choice = "scissors"
    }
}

function getHumanChoice(){
    //return valid human choice
    let choice = prompt("Was wählst du (rock, paper oder scissors)? ");
    choice = choice.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else {
        return choice = "errorMessage";
    }    
}

function playRound(){
    // play a round between computer an human
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner = "";

    if (humanChoice === "errorMessage"){
        return "Error: use rock, paper or scissors"
    } else {// TBD AUSWERTUNGSLOGIK WER HAT GEWONNEN
    }
    
}

// INVOKE FUNKTIONS 
//#############################
playRound();

// console.log("Computer: " + getComputerChoice());
// console.log("Human: " + getHumanChoice());