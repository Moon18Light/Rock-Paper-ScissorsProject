let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //for all inside choice class
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//ComputerChoice func.
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"] //taking array to access indexwise
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//DrawGame func.
const drawGame = () => {
   console.log("game was draw.");
   msg.innerText = "Game was Draw. Play again.";
   msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {

        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        // msg.innerText = "You win!";
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        // msg.innerText = "You lose.";
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//PlayGame func.
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    // console.log("comp choice =", compChoice);

if(userChoice === compChoice){
    //Draw Game
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock"){
        //scissors, paper 
        userWin = compChoice === "paper" ? false : true; 
    } else if(userChoice === "paper"){
        //rock, scissors 
        userWin = compChoice === "scissors" ? false : true; 
    } else {
        //rock, paper 
        userWin = compChoice === "rock" ? false : true; 
    } 
    showWinner(userWin, userChoice, compChoice);
    }
};



//UserChoice func.
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

//LOGIC
/*Math.random() -> it generate random floating value
Math.random * 10 -> it gives value in range from (0-9)
Similarly, Math.random * 3 -> it gives value in range from (0-2)
Math.floor(Math.random * 3) -> it gives integer value only*/