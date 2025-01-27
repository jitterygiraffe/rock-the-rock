//randomly returning one of the following string values: "rock", 
//"paper", "scissors"
function getComputerChoice(){
    if (Math.floor(Math.random()*3) === 0) {
        return console.log("rock") }
     else if (Math.floor(Math.random() * 3) ===1) {
        return console.log("paper")
    } else if (Math.floor(Math.random() * 3) ===2) {
        return console.log("scissors")
    }
};

// getComputerChoice();

function getHumanChoice() {
  let choice = prompt("What's your choice?"); 
  console.log(choice); 
    choice = choice.toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        return prompt("Please make valid choice");
        
        // console.log( "Please make valid choice")
    }
    return choice;
}


// getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
  }
  
  const humanSelection = getHumanChoice();               
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);

  

