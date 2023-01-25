const Calculator = require('./Calculator');

const calculator = new Calculator;

const numberPlus = [
  [1, 2, 3],
  [4, 5, 9],
  [3, 2, 5]
]

describe.each(numberPlus)('.add($i, $i)', (a, b, expected) => {
  test(`return ${expected}`, () => {
    expect(calculator.add(a, b)).toBe(expected);
  });
})

describe('Add test', () => {
  test('1 + 2 is 3', () => {
    expect(calculator.add(1,2)).toBe(3);
  });

  test('4 + 5 is 9', () => {
    expect(calculator.add(4,5)).toBe(9);
  });
});

describe('Subtract test', () => {
  test('4 - 2 is 2', () => {
    expect(calculator.subtract(4,2)).toBe(2);
  });

  test('19 - 5 is 14', () => {
    expect(calculator.subtract(19,5)).toBe(14);
  });

  test('9 - 1 is 8', () => {
    expect(calculator.subtract(9,1)).toBe(8);
  });
});