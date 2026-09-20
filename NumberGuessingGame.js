

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");
const attempt = document.getElementById("attempt");
const resetButton = document.getElementById("resetButton");

submitGuess.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 100 || guessInput.value === "") {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attempts++;
  attempt.textContent = "Attempts: " + attempts;

  if (userGuess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
    submitGuess.disabled = true;
  } else if (userGuess < secretNumber) {
    message.textContent = "paithiyam ,kammiya irukkuthu! Try again.";
  } else {
    message.textContent = "romba athigama irukuthu! Try again.";
  }

  guessInput.value = "";
  guessInput.focus();
});

resetButton.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  guessInput.value = "";
  message.textContent = "New game started. Make a guess!";
  attempt.textContent = "Attempts: 0";
  submitGuess.disabled = false;

  guessInput.focus();
});