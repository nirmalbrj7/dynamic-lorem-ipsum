# Dynamic Lorem Ipsum Generator

A dynamic Lorem Ipsum generator with multiple options including sentences, paragraphs, text, bytes, and lists. The package is modular and designed for easy extension. It can be used both programmatically and via a command-line interface (CLI).

## Features

- Generate Lorem Ipsum content in various formats:
  - Sentences
  - Paragraphs
  - Text (multiple paragraphs)
  - Specified byte length
  - Lists (ordered and unordered)
- Modular design for easy extension
- CLI for convenient usage from the terminal

## Installation

Install the package via npm:

```sh
npm install dynamic-lorem-ipsum
```

## Usage

### Programmatic API

You can use the package in any JavaScript environment. Below are examples of how to use the package in Node.js and React.

#### In Node.js

```javascript
const {
  generateSentence,
  generateParagraph,
  generateText,
  generateBytes,
  generateList
} = require('dynamic-lorem-ipsum');

console.log(generateSentence(10)); // Generates a sentence with 10 words
console.log(generateParagraph(5)); // Generates a paragraph with 5 sentences
console.log(generateText(3));      // Generates text with 3 paragraphs
console.log(generateBytes(100));   // Generates text with 100 bytes length
console.log(generateList(5, true)); // Generates an ordered list with 5 items
```

#### In React

First, install the package in your React project:

```sh
npm install dynamic-lorem-ipsum
```

Then, use it in your React component:

```javascript
import React from 'react';
import {
  generateSentence,
  generateParagraph,
  generateText,
  generateBytes,
  generateList
} from 'dynamic-lorem-ipsum';

const App = () => {
  return (
    <div>
      <h1>Dynamic Lorem Ipsum Generator</h1>
      <p>{generateSentence(10)}</p>
      <p>{generateParagraph(5)}</p>
      <pre>{generateText(3)}</pre>
      <p>{generateBytes(100)}</p>
      <pre>{generateList(5, true)}</pre>
    </div>
  );
};

export default App;
```

### Command-Line Interface

To use the CLI, you can install the package globally:

```sh
npm install -g dynamic-lorem-ipsum
```

Alternatively, you can use `npx` to run the CLI without installing it globally:

```sh
npx dynamic-lorem-ipsum <command> [options]
```

#### CLI Commands

- Generate a sentence with a specified number of words:
  ```sh
  dynamic-lorem sentence --words 10
  ```

- Generate a paragraph with a specified number of sentences:
  ```sh
  dynamic-lorem paragraph --sentences 5
  ```

- Generate text with a specified number of paragraphs:
  ```sh
  dynamic-lorem text --paragraphs 3
  ```

- Generate text with a specified byte length:
  ```sh
  dynamic-lorem bytes --bytes 100
  ```

- Generate a list with a specified number of items (ordered or unordered):
  ```sh
  dynamic-lorem list --items 5 --ordered
  ```

## API

### `generateSentence(wordCount = 10)`

Generates a sentence with the specified number of words.

**Parameters:**
- `wordCount` (number): The number of words in the sentence. Default is 10.

**Returns:**
- (string): A randomly generated sentence.

### `generateParagraph(sentenceCount = 5)`

Generates a paragraph with the specified number of sentences.

**Parameters:**
- `sentenceCount` (number): The number of sentences in the paragraph. Default is 5.

**Returns:**
- (string): A randomly generated paragraph.

### `generateText(paragraphCount = 3)`

Generates text with the specified number of paragraphs.

**Parameters:**
- `paragraphCount` (number): The number of paragraphs. Default is 3.

**Returns:**
- (string): Randomly generated text consisting of multiple paragraphs.

### `generateBytes(byteCount = 100)`

Generates text with a specified byte length.

**Parameters:**
- `byteCount` (number): The desired byte length of the generated text. Default is 100.

**Returns:**
- (string): Randomly generated text of the specified byte length.

### `generateList(itemCount = 5, ordered = false)`

Generates a list with the specified number of items.

**Parameters:**
- `itemCount` (number): The number of items in the list. Default is 5.
- `ordered` (boolean): Whether the list should be ordered (numbered) or unordered (bulleted). Default is false (unordered).

**Returns:**
- (string): A randomly generated list.

## Testing

Run tests using Jest to ensure the functionality of each generator.

### Running Tests

To run the tests, use the following command:

```sh
npm test
```

### Example Tests

The package includes tests for each generator. Here's an example of what a test might look like:

```javascript
const generateSentence = require('../src/generators/sentence');

test('generateSentence generates a sentence with specified word count', () => {
    const wordCount = 5;
    const sentence = generateSentence(wordCount);
    expect(sentence.split(' ').length).toBe(wordCount);
    expect(sentence.endsWith('.')).toBe(true);
    expect(sentence[0]).toBe(sentence[0].toUpperCase());
});
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.