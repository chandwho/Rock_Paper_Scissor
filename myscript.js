let buttons = document.querySelectorAll('#button-container');
let player_score = document.querySelector('#player-score');
let machine_score = document.querySelector('#machine-score');
let result_line = document.querySelector('#result-line');
let replay_button = document.querySelector('.replay-button');

countWin = countLoss = 0;

function getComputerChoice(){
    let choice=["Rock", "Paper", "Scissor"];
    return(choice[ (Math.floor(Math.random()*choice.length)) ]);
}

buttons.forEach(button => {
    button.addEventListener('click', getPlayerChoice);
}); 

function getPlayerChoice(e){
    playerSelection = e.target.id;
    playRound(playerSelection, getComputerChoice());
};

function playRound(playerSelection, computerSelection){

    console.log(playerSelection);
    console.log(computerSelection);

        if(playerSelection.toLowerCase()===computerSelection.toLowerCase()){
            result_line.innerText = "It's a tie."
            console.log(playerSelection, computerSelection);   
        }

        else if( (playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase()==="scissor") || 
        (playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase()==="rock") ||
        (playerSelection.toLowerCase()==="scissor" && computerSelection.toLowerCase()==="paper") ){
            result_line.innerText = `You Win! ${playerSelection} beats ${computerSelection}` ;
            countWin++;
            player_score.innerText = countWin;
            console.log(playerSelection, computerSelection);  
        }
    
        
        else if( (playerSelection.toLowerCase()==="scissor" && computerSelection.toLowerCase()==="rock") ||
        (playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase()==="paper") ||
        (playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase()==="scissor") )
        {
            result_line.innerText = `You Lose! ${computerSelection} beats ${playerSelection}` ;
            countLoss++;
            machine_score.innerText = countLoss;
            console.log(playerSelection, computerSelection);
        }
    
    result();  
    
}


function result() {
    console.log(countWin);
    console.log(countLoss);
    if(countWin == 5 && countLoss < 5){
        result_line.innerText = "You are worthy! Here is your red pill.";

        buttons.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        });

        replay_button.setAttribute('class', 'focus');

        replay_button.addEventListener('click', function(){
            location.reload();
        });
}
    
    else if(countLoss == 5 && countWin < 5){
        
        result_line.innerText = "You Lost! Humanity now has no hope.";

        buttons.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        });

        replay_button.setAttribute('class', 'focus');

        replay_button.addEventListener('click', function(){
            location.reload();
        });
}  
    
    else if(countWin == 5 && countLoss == 5){

        result_line.innerText = "It's a tie. Keep fighting!";

        buttons.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        });

        replay_button.setAttribute('class', 'focus');

        replay_button.addEventListener('click', function(){
            location.reload()
        });
    }

}



