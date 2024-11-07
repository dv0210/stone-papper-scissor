let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#resultText");
let userScorepara = document.querySelector("#userScore");
let compScorepara = document.querySelector("#compScore");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game draw";
  msg.style.backgroundColor = "rgb(36, 33, 33)";
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

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
    showWinner(userwin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
