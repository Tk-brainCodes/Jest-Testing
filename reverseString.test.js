const reverseString = require('./reverseString');

//test to see if the function exists
test('revesreString function exist', () => {
    expect(reverseString).toBeDefined();
});

//test to see if string reversed
test('test to see if string reversed with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});
