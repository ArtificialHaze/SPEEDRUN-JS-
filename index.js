// VARIABLES

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const highscoreDisplay = document.querySelector("#highscore");

let words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "champion",
  "ghost",
  "fierce",
];

const levels = {
  easyMode: 7,
  mediumMode: 3,
  hardMode: 2,
};

const currentLevel = levels.mediumMode;

let time = currentLevel;
let score = 0;
let isPlaying;

// FUNCTIONS

function initializeApp() {
  seconds.innerHTML = currentLevel;

  loadWord(words);

  wordInput.addEventListener("input", startMatching);

  setInterval(countDownFunction, 1000);

  setInterval(checkGameStatus, 50);
}

function startMatching() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    loadWord(words);
    wordInput.value = "";
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct Word.";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function loadWord(words) {
  const randomNumber = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomNumber];
}

function countDownFunction() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkGameStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "GAME OVER.";
    score = -1;
  }
}

// EVENT LISTENER

window.addEventListener("load", initializeApp);
