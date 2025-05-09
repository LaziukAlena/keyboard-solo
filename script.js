const words = ['apple', 'banana', 'grape', 'peach', 'melon'];
let word = '';
let index = 0;

const wordDiv = document.querySelector('.word');
const correctCountSpan = document.querySelector('.correct-count');
const wrongCountSpan = document.querySelector('.wrong-count');
const mistakesSpan = document.querySelector('.word-mistakes');

let correctWords = 0;
let wrongWords = 0;
let mistakes = 0;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function showWord(w) {
  wordDiv.innerHTML = '';
  for (let symbol of w) {
    const span = document.createElement('span');
    span.textContent = symbol;
    wordDiv.appendChild(span);
  }
}

function newWord() {
  word = getRandomWord();
  index = 0;
  mistakes = 0;
  mistakesSpan.textContent = '0';
  showWord(word);
}

document.addEventListener('DOMContentLoaded', newWord);

document.addEventListener('keydown', function (e) {
  const spans = wordDiv.querySelectorAll('span');
  const key = e.key;

  if (key === word[index]) {
    spans[index].classList.remove('w'); 
    spans[index].classList.add('c');    
    index++;
    if (index === word.length) {
      correctWords++;
      correctCountSpan.textContent = correctWords;
      newWord();
    }
  } else {
    spans[index].classList.add('w'); 
    mistakes++;
    mistakesSpan.textContent = mistakes;
  }
});