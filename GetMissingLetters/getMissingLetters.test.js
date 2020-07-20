const MissingLetters = require('./getMissingLetters');

const oneLetterMissing = new MissingLetters("abcdefghijklmnopqrstuvwxy");
const allLetters = new MissingLetters("abcdefghijklmnopqrstuvwxyz");
const sentanceWithAllLetters = new MissingLetters("A quick brown fox jumps over the lazy dog");

describe('MISSING LETTERS', () => {
    test('Z missing', () => {
        expect(oneLetterMissing.GetMissingLetters).toBe('z');
    });

    test('All letters', () => {
        expect(allLetters.GetMissingLetters).toBe('');
    });

    test('Sentance with all letters', () => {
        expect(allLetters.GetMissingLetters).toBe('');
    });
});