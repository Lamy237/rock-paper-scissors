const computerChoiceDisplay = document.getElementById("computerChoice");
const playerChoiceDisplay = document.getElementById("playerChoice");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const possibleChoices = document.querySelectorAll("button");

let playerChoice;
let computerChoice;

possibleChoices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        playerChoiceDisplay.style.backgroundImage = `url('../img/${event.target.id}.png')`;
        playerChoice = event.target.id;
        computerChoice = generateComputerChoice();
        let winner = incrementWinnerScore(playerChoice, computerChoice);
        markWinner();
        animateLastWinnerChoice(winner);
    })
});

const generateComputerChoice = () => {
    const rpsArray = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * rpsArray.length);
    const choice = rpsArray[randomNumber];

    computerChoiceDisplay.style.backgroundImage = `url('../img/${choice}.png')`;
    return choice;
};

let playerScore = 0;
let computerScore = 0;

const incrementWinnerScore = (player, computer) => {
    if (player === computer) {
        // TIE GAME: NOTHING TO DO
    } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock"
        || player === "scissors" && computer === "paper") {
        playerScore++;
        return playerChoiceDisplay;
    } else {
        computerScore++;
        return computerChoiceDisplay;
    }
};

const markWinner = () => {
    if (playerScore > computerScore) {
        playerScoreDisplay.textContent = `${playerScore} PT 🏆`;
        computerScoreDisplay.textContent = `${computerScore} PT`;
    } else if (playerScore < computerScore) {
        playerScoreDisplay.textContent = `${playerScore} PT`;
        computerScoreDisplay.textContent = `${computerScore} PT 🏆`;
    } else {
        playerScoreDisplay.textContent = `${playerScore} PT`;
        computerScoreDisplay.textContent = `${computerScore} PT`;
    }
};

const animateLastWinnerChoice = (elementToAnimate) => {
    if (elementToAnimate) {
        elementToAnimate.classList.add("animate");
        setTimeout(() => {
            elementToAnimate.classList.remove("animate");
        }, 1002);
    }
};
