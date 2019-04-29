require("./Letter");

function Word() {
    this.word = [];
    this.Show = function() {
        var displayString = ""
        this.word.forEach(element => {
            displayString += element.toString();
        });
        return displayString;
    }
    this.Guess = function(letter) {
        word.forEach(element => {
            element.Test(letter);
        });
    }
}