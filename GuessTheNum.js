let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous Guesses : ";
    }
    guesses.textContent += userGuess + " ";  // To show all of the previous guesses.
    lastResult.style.padding="3px";  // To remove the color which was showing cause of padding.
    if (userGuess === randomNumber) {
        lastResult.style.backgroundColor = "green";
        lastResult.textContent = "Congratulations ! You got it right!";
        lowOrHi.textContent=" ";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!! Out Of Chnace !!!";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong !";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Guessed number is too small";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Guessed number is too large";
        }
    }
    guessCount++;
    guessField.value = " ";
    guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = " ! Play Again !";
    resetButton.style.backgroundColor="aqua";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";
    lastResult.style.padding="0px";   // Setting the lastResult padding to 0px to remoev the unwanted color.

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
