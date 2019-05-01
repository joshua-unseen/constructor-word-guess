var Word = require("./Word");
var inquirer = require("inquirer");

var wordArray = [
    "Gorgon",
    "Muad'dib"
];
var count = 0;
var guesses = [];

initGame();

function initGame() {
    // debugger;
    var puzzle = new Word(wordArray[Math.floor(Math.random()*wordArray.length)]);
    count = puzzle.word.length + 5;
    guesses = [];
    playGame(puzzle);
}

function playGame(puzzle) {
    if (count) {
        console.log(puzzle.Show());
        if (puzzle.solved) {
            console.log("CORRECT!");
            return;
        }
        if (count < 10) {
            console.log(count + " GUESSES LEFT");
        }
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter:",
                validate: function(letter) {
                    if (letter.match(/^[a-z]$/i) && guesses.indexOf(letter) === -1) {
                        guesses.push(letter);
                        return true;
                    }
                    return false;
                }
            }
        ]).then(guess => {
            count--;
            // console.log(value);
            puzzle.Guess(guess.letter.toLowerCase());
            playGame(puzzle);
        })
    }
}
