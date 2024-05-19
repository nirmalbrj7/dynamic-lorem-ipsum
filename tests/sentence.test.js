const generateSentence = require('../src/generators/sentence');

test('generateSentence generates a sentence with specified word count', () => {
    const wordCount = 5;
    const sentence = generateSentence(wordCount);
    expect(sentence.split(' ').length).toBe(wordCount);
    expect(sentence.endsWith('.')).toBe(true);
    expect(sentence[0]).toBe(sentence[0].toUpperCase());
});
