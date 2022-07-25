
let computerPoint =0;
let playerPoint=0;
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random()*3)+1);
    switch(computerChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    
}
function playRound(playerSelection,computerSelection) 
{
    if (playerSelection==="rock" && computerSelection==="scissors" ||playerSelection==="paper"&& computerSelection==="rock" || playerSelection==="scissors" && computerSelection==="paper") {
        console.log("You WİN!");

        playerPoint++;
    }
    else if(playerSelection==="rock" && computerSelection==="rock" || playerSelection==="scissors" && computerSelection==="scissors" || playerSelection==="paper" && computerSelection==="paper"){
        console.log("Equavalent");


    }
    else{
        console.log("You LOST!");

    computerPoint++;
    }

}
function game() {

    for (let i = 0; i < 5; i++) {
    let oyuncu = prompt("Rock, Paper , Scissors").toLowerCase();

    playRound(oyuncu,getComputerChoice());
}
    console.log(`Your point : ${playerPoint}`)
    console.log(`Computer point : ${computerPoint}`)
}
game();