const generateText = require('./text');

function generateBytes(byteCount = 100) {
    let text = '';
    while (Buffer.byteLength(text, 'utf8') < byteCount) {
        text += generateText(1) + ' ';
    }
    return text.slice(0, byteCount).trim();
}

module.exports = generateBytes;
