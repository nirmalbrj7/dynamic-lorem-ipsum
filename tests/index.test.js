const {
    generateSentence,
    generateParagraph,
    generateText,
    generateBytes,
    generateList
} = require('../src/index');

test('exports generateSentence function', () => {
    expect(typeof generateSentence).toBe('function');
});

test('exports generateParagraph function', () => {
    expect(typeof generateParagraph).toBe('function');
});

test('exports generateText function', () => {
    expect(typeof generateText).toBe('function');
});

test('exports generateBytes function', () => {
    expect(typeof generateBytes).toBe('function');
});

test('exports generateList function', () => {
    expect(typeof generateList).toBe('function');
});
