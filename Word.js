var Letter = require("./Letter.js");

function Word(theWord) {
    this.word = [];
    this.solved = false;
    this.count = 0;

    //  Build the array of letter objects from the string passed
    for (var i = 0; i < theWord.length; i++) {
        var theChar = theWord.charAt(i)
        // var tempCount = [];
        var letter = new Letter(theChar);
        if (this.word.indexOf(letter) === -1 && theChar.match(/^[a-z]$/)) { //  don't include duplicate letters or non-alpha characters in the letter count
            // tempCount.push(theChar);
            this.count++;
        }
        this.word.push(letter);
    }
    this.count += 7;    //  give a buffer for wrong answers
    
    
    //  Display the puzzle.  Returns a string
    this.Show = function() {
        var displayString = this.word.join(" ");
        return "\n" + displayString + "\n";
    }

    //  Test the user's guess against the puzzle array. Returns boolean
    this.Guess = function(letter) {
        // console.log("Word " + letter);
        this.count--;   //  countdown to failure
        var goodGuess = false;
        this.solved = true;
        this.word.forEach(element => {
            if (element.Test(letter)) {
                goodGuess = true;
            }
            else if (element.guessed === false) {
                this.solved = false;
            }
        });
        return goodGuess;
    }
}

module.exports = Word;

// var test = new Word("testing");
// console.log(test.word);
// console.log(test.Show());

// test.Guess("t");
// console.log(test.word);
// console.log(test.Show());
