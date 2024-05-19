const generateParagraph = require('../src/generators/paragraph');

test('generateParagraph generates a paragraph with specified sentence count', () => {
    const sentenceCount = 5;
    const paragraph = generateParagraph(sentenceCount);
    expect(paragraph.split('. ').length).toBe(sentenceCount);
});
