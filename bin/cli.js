#!/usr/bin/env node

const { program } = require('commander');
const { generateSentence, generateParagraph, generateText, generateBytes, generateList } = require('../src');

program
    .command('sentence')
    .description('Generate a random sentence')
    .option('-w, --words <number>', 'Number of words in the sentence', 10)
    .action((options) => {
        console.log(generateSentence(options.words));
    });

program
    .command('paragraph')
    .description('Generate a random paragraph')
    .option('-s, --sentences <number>', 'Number of sentences in the paragraph', 5)
    .action((options) => {
        console.log(generateParagraph(options.sentences));
    });

program
    .command('text')
    .description('Generate random text')
    .option('-p, --paragraphs <number>', 'Number of paragraphs in the text', 3)
    .action((options) => {
        console.log(generateText(options.paragraphs));
    });

program
    .command('bytes')
    .description('Generate random text of specified byte length')
    .option('-b, --bytes <number>', 'Number of bytes', 100)
    .action((options) => {
        console.log(generateBytes(options.bytes));
    });

program
    .command('list')
    .description('Generate a random list')
    .option('-i, --items <number>', 'Number of items in the list', 5)
    .option('-o, --ordered', 'Generate an ordered list', false)
    .action((options) => {
        console.log(generateList(options.items, options.ordered));
    });

program.parse(process.argv);
