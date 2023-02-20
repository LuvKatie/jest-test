const {sum, capitalize, reverse, calculator, caesarCipher, checkCaesar, analyzeArray, order} = require('./sum');

// const capitalize = sum.capitalize;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Capitialize first letter of Hello World', () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test('Reverse string: Hello', () => {
  expect(reverse("Hello")).toBe("olleH");
});

test('Calculator add two integers', () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test('Calculator subtract two integers', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('Calculator divide two integers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('Calculator multiply two integers', () => {
  expect(calculator.multiply(6, 2)).toBe(12);
});

test('Caesar Cipher on a String', () => {
  expect(caesarCipher("Hello to the world! Pleased to meet you, everybody.")).toBe(checkCaesar());
});

test('Average of sorted an array', () => {
  expect(analyzeArray(order).average).toBe(4);
});

test('Min of sorted an array', () => {
  expect(analyzeArray(order).min).toBe(1);
});

test('Max of an sorted array', () => {
  expect(analyzeArray(order).max).toBe(8);
});

test('Length of sorted an array', () => {
  expect(analyzeArray(order).length).toBe(6);
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

