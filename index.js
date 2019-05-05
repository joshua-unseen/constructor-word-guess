var Word = require("./Word");
var inquirer = require("inquirer");

var wordArray = [
    "Muad'dib",
    "Atreidies",
    "Harkonnen",
    "Mentat",
    "Spice Melange",
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
var count = 0;
var guesses = [];

initGame();

function initGame() {
    // debugger;
    var puzzle = new Word(wordArray[Math.floor(Math.random() * wordArray.length)]);
    // count = puzzle.word.length + 5;
    guesses = [];
    console.log("ARE WE DUNE YET?");
    playGame(puzzle);
}

function playGame(puzzle) {
    if (puzzle.count) {
        if (puzzle.solved) {
            console.log("You solved it!");
            return;
        }
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
            console.log(guessResult);
            playGame(puzzle);
        })
    }
    else {
        console.log("You have failed!");
    }
}
