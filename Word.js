var a = require("./Letter.js");

function Word(theWord) {
    this.word = [];
    for (var i = 0; i < theWord.length; i++) {
        var letter = new Letter(theWord.charAt(i));
        this.word.push(letter);
    }

    this.Show = function() {
        var displayString = ""
        this.word.forEach(element => {
            displayString += element.toString() + " ";
        });
        return displayString.trim();
    }
    this.Guess = function(letter) {
        this.word.forEach(element => {
            element.Test(letter);
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
