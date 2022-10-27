const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should return a number with two positive integer', () => {
    const result = multiply(3, 4);
    expect(result).toBe(12);
  });

  test('should return a negative number when one argument is negative', () => {
    const result = multiply(-3, 4);
    expect(result).toBe(-12);
  });

  test('should return 0 when multiply by 0', () => {
    const result = multiply(0, 56);
    expect(result).toBe(3);
  });
});
