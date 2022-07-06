'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const displaySecretNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};

const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    displayMessage(`🚫 No Number!`);
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    displaySecretNumber(secretNumber);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (highScore < score) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`💥 You lost the game!`);
      displayScore(0);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start guessing...`);
  displaySecretNumber(`?`);
  document.querySelector(`.guess`).value = ``;
  displayScore(score);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
