const chunkArray = require('./chunk');

//test to see if it exits
test('test to see if function exits', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with a length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunked = chunkArray(numbers, len);

    expect(chunked).toBeEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
})