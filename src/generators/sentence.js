const { getRandomInt, getRandomWords } = require('../utils/random');

function generateSentence(wordCount = 10) {
    const sentence = getRandomWords(wordCount).join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

module.exports = generateSentence;
