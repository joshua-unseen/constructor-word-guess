function Letter(char) {
    this.char = char;
    this.guessed = false;   //  has the letter been guessed?

    //  Our display function.  Returns a string
    this.toString = function() {
        if (this.guessed) {
            return this.char;   //  if it's been guessed, show it
        }
        else if (this.char.match(/^[^a-z]$/i)) {
            this.guessed = true;
            return this.char;   // if it's not a letter, mark it as guessed and show it
        }
        else {
            return "_";     // show the placeholder
        }
    }

    //  Our test function.  Returns boolean
    this.Test = function(letter) {
        // console.log("Letter " + letter);
        if (letter === this.char.toLowerCase()) {   // flip this.guessed to 'true' if the test matches, otherwise, leave it alone
            this.guessed = true;
            return true;
        }
        return false;
    }
}

module.exports = Letter;

// var test = new Letter("\'");

// test.Test("b");
// console.log(test.guessed);
// console.log(test.toString());

// test.Test("a");
// console.log(test.guessed);
// console.log(test.toString());
