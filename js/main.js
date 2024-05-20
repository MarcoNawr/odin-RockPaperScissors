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
    let choice = prompt("Was wählst du? ");
    const errorMessage = "Du musst eins der drei vailiden Werte auswählen: rock, paper or scissors"; 
    choice = choice.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else {
        return errorMessage;
    }    
}

function playRound(){
    let humanChoice = "";
    let computerChoice = "";
}

// INVOKE FUNKTIONS 
//#############################

//Human Choice
console.log("Computer: " + getComputerChoice());
console.log("Human: " + getHumanChoice());