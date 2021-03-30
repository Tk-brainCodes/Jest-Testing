const functions = require('./functions');

//test for toBe
test('Add num1 and num2', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//test for not equal 5
test('Add num1 and num2 to NOT be equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//test for null
test('to be null', () => {
    expect(functions.isNull()).toBeNull();
});

//to be undefined
test('to be undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
});

//to equal
test('user should be ThankGod eboreime', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'ThankGod',
        lastname: 'Eboreime'
    });
});

test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//working with async data
test("user fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
})