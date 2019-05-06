var Word = require("./Word");
var inquirer = require("inquirer");
var clc = require("cli-color");

var wrong = clc.red;
var right = clc.green;

var wordArray = [
    "Muad'dib",
    "Atreidies",
    "Harkonnen",
    "Mentat",
    "Stilgar",
    "Chani",
    "Feyd Rautha",
    "Sardukar",
    "Spice Melange",
    "Emperor Shaddam IV",
    "Shadout Mapes",
    "Sandworm",
    "Gom Jabbar"
];
// var count = 0;
var guesses = [];
var puzzleIndex = 0;

console.clear();
console.log("ARE WE DUNE YET?");
initGame();

function initGame() {
    // console.log(wordArray);
    puzzleIndex = Math.floor(Math.random() * wordArray.length);
    var puzzle = new Word(wordArray[puzzleIndex]);
    console.log(puzzle.Show());
    // count = puzzle.word.length + 5;
    guesses = [];
    playGame(puzzle);
}
function resetGame() {
    wordArray.splice(puzzleIndex, 1);
    if (wordArray.length) {
        console.log("You solved it!  Next puzzle:");
        initGame();
    }
    else {
        console.log("All puzzles solved!");
    }
}

function playGame(puzzle) {
    if (puzzle.solved) {
        resetGame();
        return;
    }
    else if (puzzle.count) {
        if (puzzle.count < 10) {
            console.log(puzzle.count + " GUESSES LEFT\n");
        }
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter:",
                validate: function (letter) {
                    if (letter.match(/^[a-z]$/i) && guesses.indexOf(letter) === -1) {
                        guesses.push(letter);
                        return true;
                    }
                    return false;
                }
            }
        ]).then(guess => {
            // console.log(value);
            var guessResult = puzzle.Guess(guess.letter.toLowerCase());
            console.log(puzzle.Show());
            if (guessResult) {
                    console.log(right("CORRECT!\n"));
                }
                else {
                    console.log(wrong("INCORRECT!\n"));
                }
            playGame(puzzle);
        })
    }
    else {
        console.log("You have failed!");
    }
}
