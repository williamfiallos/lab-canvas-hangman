let hangman;
let theGame;
let theCanvas;

function Hangman(words, secretWord, letters, guessedLetter, errorsLeft) {
  this.words = [];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
  
}

Hangman.prototype.getWord = function () {
  let randomWord = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[randomWord];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  this.letters = this.secretWord.split("");
};

// Hangman.prototype.checkClickedLetters = function (pressedLetter) {
//   if (this.letters.indexOf(pressedLetter.toLowerCase()) === -1) {
//       this.letters.push(pressedLetter.toLowerCase());
//       this.checkIfCorrect(pressedLetter);
//       theCanvas.writeCorrectLetter(pressedLetter);
//       this.xIndex = [];
//       return true
//     } return false
//   };
// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
