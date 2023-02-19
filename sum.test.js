const {sum, capitalize} = require('./sum');
// const capitalize = sum.capitalize;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Capitialize first letter of Hello World', () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

// test('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
//   });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
// });

