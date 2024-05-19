const generateBytes = require('../src/generators/bytes');

test('generateBytes generates text with specified byte length', () => {
    const byteCount = 100;
    const text = generateBytes(byteCount);
    expect(Buffer.byteLength(text, 'utf8')).toBeLessThanOrEqual(byteCount);
});
