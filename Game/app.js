let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const resultBlock = document.querySelector(".container");
const msg = document.querySelector("#msg");

const userScoreMsg = document.querySelector("#user-score");
const compScoreMsg = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);

  return options[idx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw . Play again.";
  msg.style.backgroundColor = "black";
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

const Result = (userScore, compScore ) => {
  if(userScore === 5 || compScore === 5){
    if(userScore > compScore){
      resultBlock.innerHTML = `<h1 class="final-msg">Congratulations! You won the game with a score of ${userScore} to ${compScore}.</h1>`;
      resultBlock.style.backgroundImage = "url('./Images/win.gif')";
    }

    else{
      resultBlock.innerHTML = `<h1 class="final-msg">Sorry! You lost the game with a score of ${userScore} to ${compScore}.</h1>`;
      resultBlock.style.backgroundImage = "url('./Images/lose.gif')";
    }
    
  }
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userScoreMsg.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreMsg.innerText = compScore;
    msg.innerText = `You Lose . Computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  Result(userScore, compScore);
}

