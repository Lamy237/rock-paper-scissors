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
        incrementWinnerScore(playerChoice, computerChoice);
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
        playerScoreDisplay.textContent = `${playerScore} PT`;
    } else {
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore} PT`;
    }
};