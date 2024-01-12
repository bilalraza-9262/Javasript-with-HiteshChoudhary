// LOOP :

// 1- for loop:

// let hobbies = "cricket";

// for (let i = 0; i < hobbies.length; i++) {

//     console.log(i);
// }

// make a table of 4th :

// let table = 4;
// for (let i = 1; i <= 10; i++) {
//     console.log(table + " X " + i + " = " + i * 4);

// }

// for (let i = 1; i <= 5; i++) {
//     console.log("Multiplication table for " + i + ":");
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " X " + j + " = " + (i * j));
//     }
//     console.log("\n"); // Add a line break after each table
// }


// for (let i = 2; i <= 5; i++) {
//     console.log("maltiplication table of " + i + " : "+ "</br>");
//     for (let j=1; j<=10; j++) {
// console.log(i + " X "+ j + " = "+(i*j)  );
//     }
//     console.log("\n");

function generateFibonacciSequence(terms) {
  const fibonacciSequence = [0, 1];

  for (let i = 2; i < terms; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }

  return fibonacciSequence;
}

const numberOfTerms = 10;
const fibonacciSeries = generateFibonacciSequence(numberOfTerms);
console.log(`Fibonacci sequence of ${numberOfTerms} terms:`, fibonacciSeries);

//0,1,1=2
//0,1,3=3
//0,1,5=4
//0,1,7=5
//0,1,9=6
//0,1,11=7
//0,1,13=8

// }

// FOR OF LOOP


// 2- WHILE:

// let num = 1;
// while (num<6) {
//     num++
// }console.log(num);


// const targetNumber = Math.floor(Math.random() * 100) + 1;
// let guessed = false;
// let attempts = 0;

// console.log("Welcome to the Guessing Game! Try to guess the number between 1 and 100.");

// while (!guessed) {
//     const userGuess = parseInt(prompt("Enter your guess:"));

//     if (isNaN(userGuess)) {
//         console.log("Please enter a valid number.");
//     } else {
//         attempts++;

//         if (userGuess === targetNumber) {
//             console.log("Congratulations! You guessed the correct number " + targetNumber + " in " + attempts + " attempts.");
//             guessed = true;
//         } else if (userGuess < targetNumber) {
//             console.log("Try higher.");
//         } else {
//             console.log("Try lower.");
//         }
//     }
// }


// EVENTS:

//function text() {
// let inputText = document.getElementById('text1');
// inputText.style.color='blue'
//console.log("hi");
//}

function handleClick() {
  let inputText = document.getElementById("text1");
  console.log(inputText.value);

}








