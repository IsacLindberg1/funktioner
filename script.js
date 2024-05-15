// Funktion som summerar alla tal mellan min och max
function sumNumbers(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// Funktion som returnerar kvadraten av ett tal
function squareNumber(num) {
  return num * num;
}

// Funktion som använder tidigare funktioner för att summera kvadraten av talen mellan min och max
function sumOfSquares(min, max) {
  return sumNumbers(min, max, squareNumber);
}

// Funktion som kontrollerar om ett ord är ett palindrom
function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

// Exempel med onclick
document.getElementById("myButton").onclick = function() {
  const element = document.getElementById("myElement");
  if (isPalindrome(element.textContent)) {
    element.style.color = "green";
  } else {
    element.style.color = "red";
  }
};
