const { getRandomWords } = require('../utils/random');

function generateList(itemCount = 5, ordered = false) {
    let list = '';
    for (let i = 0; i < itemCount; i++) {
        list += (ordered ? `${i + 1}. ` : '- ') + getRandomWords(3).join(' ') + '\n';
    }
    return list.trim();
}

module.exports = generateList;
