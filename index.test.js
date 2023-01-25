// Arrange
const { stringLength, reverseString } = require('./index');

//Act
test('str expect to return 3', () => {
  expect(stringLength('str')).toBe(3);
})

test('empty string expect to return Error', () => {
  expect(() => {stringLength('');}).toThrow('String does not valid');
})

test('the string is more than 10 chars expect to return Error', () => {
  expect(() => {stringLength('This is string more than 10 char');}).toThrow('String does not valid');
});

//Test case for reverse function
test('Hello string expert to return olleH', () => {
  expect(reverseString('Hello')).toBe('olleH');
});