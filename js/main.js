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
    //console.log("Random Number = " + random);

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

    // if (humanChoice === "errorMessage"){
    //     return "Error: use rock, paper or scissors"
    // } else {// TBD AUSWERTUNGSLOGIK WER HAT GEWONNEN
    // }

    switch (humanChoice) {
        case 'errorMessage':
            console.log("Falsche Eingabe. Erlaubt sind nur Rock, Paper oder Scissors")
            break;
        case 'rock':
            if(computerChoice === "rock"){
                winner="Rock vs. Rock = Unentschieden"
            }else if(computerChoice === "paper"){
                winner="Rock vs. Paper = Computer Wins";
                computerScore += 1;
            } else if (computerChoice === "scissors"){
                winner="Rock vs. Scissors = Human Wins";
                humanScore += 1;
            }
            break;  
        case 'paper':
            if(computerChoice === "rock"){
                winner="Paper vs. Rock = Human Wins"
                humanScore += 1;
            }else if(computerChoice === "paper"){
                winner="Paper vs. Paper = Unentschieden";
            } else if (computerChoice === "scissors"){
                winner="Paper vs. Scissors = Computer Wins";
                computerScore += 1;
            }
            break;  
        case 'scissors':
            if(computerChoice === "rock"){
                winner="Scissors vs. Rock = Computer Wins"
                computerScore += 1;
            }else if(computerChoice === "paper"){
                winner="Scissors vs. Paper = Human Wins";
                humanScore += 1;
            } else if (computerChoice === "scissors"){
                winner="Scissors vs. Scissors = Unentschieden";
            }
            break;  
        default:
          console.log("Sorry, something went wrong");
      }
    console.clear();
    console.log(winner + " Zwischenstand ==> Human: " + humanScore + " Computer: " + computerScore);
    playAgain();
}

function playAgain(){
    let again = prompt("Nochmal? y/n: ");
    if(again === "y"){
        playRound();
    }else{}
}


// INVOKE FUNKTIONS 
//#############################
playRound();

// console.log("Computer: " + getComputerChoice());
// console.log("Human: " + getHumanChoice());