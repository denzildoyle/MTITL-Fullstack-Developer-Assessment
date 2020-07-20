let MissingLetters = class {
    constructor(sentence) {
        this.sentence = sentence;
    }

    get GetMissingLetters(){
        return this.findMissingLetters();
    }

    findMissingLetters() {
        return this.sentence;
    }
};


const oneLetterMissing = new MissingLetters("A quick brown fox jumps over the lazy dog");

console.log(oneLetterMissing.GetMissingLetters);