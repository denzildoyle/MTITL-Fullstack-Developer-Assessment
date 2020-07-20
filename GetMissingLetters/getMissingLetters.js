let MissingLetters = class {
    constructor(sentence) {
        this.sentence = sentence;
    }

    get GetMissingLetters(){
        return this.findMissingLetters();
    }

    findMissingLetters() {
        return this.missingChars(
        this.removeDuplicateChars(
        this.sortAlphabets(
        this.sentence
        .replace(/\s/g, '') //remove spaces from sentence
        .toLowerCase()))) // convert to lowercase instead of uppercase for performance improvements https://stackoverflow.com/questions/5150766/javascript-change-string-case-speed
    }

    sortAlphabets(string) {
        return string.split('').sort().join('');
    };

    removeDuplicateChars(string){
        return Array.from(new Set(string)).join('');
    }

    missingChars(string){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        var missingLetters = [];

        for (let i = 0; i < alphabet.length; i++) {
            
            if (string.indexOf(alphabet[i]) == -1)
                missingLetters.push(alphabet[i]);
        }       
        return missingLetters.toString();
    }
};

module.exports = MissingLetters;