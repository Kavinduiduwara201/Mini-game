```js
function guessNumber() {
  const secretNumber = 7; // fixed secret number
  const guess = Number(document.getElementById('guessInput').value);
  const result = document.getElementById('guessResult');

  if (!guess || guess < 1 || guess > 10) {
    result.textContent = 'Please enter a number between 1 and 10.';
    result.style.color = 'red';
  } else if (guess === secretNumber) {
    result.textContent = '🎉 Correct! You guessed it right!';
    result.style.color = 'green';
  } else if (guess < secretNumber) {
    result.textContent = 'Too low! Try a higher number.';
    result.style.color = 'orange';
  } else {
    result.textContent = 'Too high! Try a lower number.';
    result.style.color = 'orange';
  }
}
