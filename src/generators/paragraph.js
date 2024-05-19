const generateSentence = require('./sentence');

function generateParagraph(sentenceCount = 5) {
    let paragraph = '';
    for (let i = 0; i < sentenceCount; i++) {
        paragraph += generateSentence() + ' ';
    }
    return paragraph.trim();
}

module.exports = generateParagraph;
