const generateList = require('../src/generators/list');

test('generateList generates an unordered list with specified item count', () => {
    const itemCount = 5;
    const list = generateList(itemCount, false);
    expect(list.split('\n').length).toBe(itemCount);
    list.split('\n').forEach(item => {
        expect(item.startsWith('- ')).toBe(true);
    });
});

test('generateList generates an ordered list with specified item count', () => {
    const itemCount = 5;
    const list = generateList(itemCount, true);
    expect(list.split('\n').length).toBe(itemCount);
    list.split('\n').forEach((item, index) => {
        expect(item.startsWith(`${index + 1}. `)).toBe(true);
    });
});
