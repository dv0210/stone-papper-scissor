let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was draw");
};

const showWinner = (userwin) => {

    if (userwin) {

        console.log("you win");
        

   }else{
    console.log("you lose");
    
   }

}

const playGame = (userChoice) => {
  console.log("userChoice =", userChoice);

  const compChoice = genCompChoice();

  console.log("compChoice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
