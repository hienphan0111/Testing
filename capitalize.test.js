const capitalize = require('./capitalize');

test('Return string with first char is capitalize', () => {
  expect(capitalize('string')).toBe('String');
})