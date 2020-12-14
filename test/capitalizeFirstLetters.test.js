const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters.js');

describe('capitalizeFirstLetters', () => {
    it('capitalizeFirstLetters accepts one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });
    it('capitalizeFirstLetters transforms Hello goog morning correctly', () => {
        assert.strictEqual(capitalizeFirstLetters("Hello good morning"), "Hello Good Morning");
    });
    it('it works for a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });
    it('it works for an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    })
})

