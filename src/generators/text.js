const generateParagraph = require('./paragraph');

function generateText(paragraphCount = 3) {
    let text = '';
    for (let i = 0; i < paragraphCount; i++) {
        text += generateParagraph() + '\n\n';
    }
    return text.trim();
}

module.exports = generateText;
