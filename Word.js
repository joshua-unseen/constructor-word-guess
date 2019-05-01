var Letter = require("./Letter.js");

function Word(theWord) {
    this.word = [];
    this.solved = false;

    for (var i = 0; i < theWord.length; i++) {
        var letter = new Letter(theWord.charAt(i));
        this.word.push(letter);
    }

    this.Show = function() {
        var displayString = ""
        this.word.forEach(element => {
            displayString += element.toString() + " ";
        });
        return "\n" + displayString.trim() + "\n";
    }
    this.Guess = function(letter) {
        // console.log("Word " + letter);
        this.solved = true;
        this.word.forEach(element => {
            if (element.Test(letter) === false) {
                this.solved = false;
            }
        });
    }
}

module.exports = Word;

// var test = new Word("testing");
// console.log(test.word);
// console.log(test.Show());

// test.Guess("t");
// console.log(test.word);
// console.log(test.Show());
