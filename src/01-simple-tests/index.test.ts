import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Add })).toBe(10);
    expect(simpleCalculator({ a: 700, b: 50, action: Action.Add })).toBe(750);
    expect(simpleCalculator({ a: 222, b: 333, action: Action.Add })).toBe(555);
    expect(simpleCalculator({ a: -999, b: 999, action: Action.Add })).toBe(0);
    expect(simpleCalculator({ a: 35, b: 35, action: Action.Add })).toBe(70);
    expect(simpleCalculator({ a: -1, b: -100, action: Action.Add })).toBe(-101);
    expect(simpleCalculator({ a: 100, b: 1, action: Action.Add })).toBe(101);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Add })).toBe(0);
    expect(simpleCalculator({ a: 4, b: 7, action: Action.Add })).toBe(11);
  }, 3000);

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Subtract })).toBe(0);
    expect(simpleCalculator({ a: 700, b: 50, action: Action.Subtract })).toBe(
      650,
    );
    expect(simpleCalculator({ a: 222, b: 333, action: Action.Subtract })).toBe(
      -111,
    );
    expect(simpleCalculator({ a: -999, b: 999, action: Action.Subtract })).toBe(
      -1998,
    );
    expect(simpleCalculator({ a: 35, b: 35, action: Action.Subtract })).toBe(0);
    expect(simpleCalculator({ a: -1, b: -100, action: Action.Subtract })).toBe(
      -99,
    );
    expect(simpleCalculator({ a: 100, b: 1, action: Action.Subtract })).toBe(
      99,
    );
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Subtract })).toBe(0);
    expect(simpleCalculator({ a: 4, b: 7, action: Action.Subtract })).toBe(-3);
  }, 3000);

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Multiply })).toBe(25);
    expect(simpleCalculator({ a: 700, b: 50, action: Action.Multiply })).toBe(
      35000,
    );
    expect(simpleCalculator({ a: 222, b: 333, action: Action.Multiply })).toBe(
      73926,
    );
    expect(simpleCalculator({ a: -999, b: 999, action: Action.Multiply })).toBe(
      -998001,
    );
    expect(simpleCalculator({ a: 35, b: 35, action: Action.Multiply })).toBe(
      1225,
    );
    expect(simpleCalculator({ a: -1, b: -100, action: Action.Multiply })).toBe(
      100,
    );
    expect(simpleCalculator({ a: 100, b: 1, action: Action.Multiply })).toBe(
      100,
    );
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: 4, b: 7, action: Action.Multiply })).toBe(28);
  }, 3000);

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Divide })).toBe(1);
    expect(simpleCalculator({ a: 700, b: 50, action: Action.Divide })).toBe(14);
    expect(simpleCalculator({ a: 222, b: 333, action: Action.Divide })).toBe(
      0.6666666666666666,
    );
    expect(simpleCalculator({ a: -999, b: 999, action: Action.Divide })).toBe(
      -1,
    );
    expect(simpleCalculator({ a: 35, b: 35, action: Action.Divide })).toBe(1);
    expect(simpleCalculator({ a: -1, b: -100, action: Action.Divide })).toBe(
      0.01,
    );
    expect(simpleCalculator({ a: 100, b: 1, action: Action.Divide })).toBe(100);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Divide })).toBe(NaN);
    expect(simpleCalculator({ a: 42, b: 7, action: Action.Divide })).toBe(6);
  }, 3000);

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 5, action: Action.Exponentiate })).toBe(
      3125,
    );
    expect(
      simpleCalculator({ a: 700, b: 5, action: Action.Exponentiate }),
    ).toBe(168070000000000);
    expect(simpleCalculator({ a: 22, b: 3, action: Action.Exponentiate })).toBe(
      10648,
    );
    expect(simpleCalculator({ a: -9, b: 9, action: Action.Exponentiate })).toBe(
      -387420489,
    );
    expect(simpleCalculator({ a: 35, b: 3, action: Action.Exponentiate })).toBe(
      42875,
    );
    expect(
      simpleCalculator({ a: -1, b: -100, action: Action.Exponentiate }),
    ).toBe(1);
    expect(
      simpleCalculator({ a: 100, b: 1, action: Action.Exponentiate }),
    ).toBe(100);
    expect(
      simpleCalculator({ a: 999999, b: 0, action: Action.Exponentiate }),
    ).toBe(1);
    expect(simpleCalculator({ a: 42, b: 7, action: Action.Exponentiate })).toBe(
      230539333248,
    );
  }, 3000);

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 100, b: 0, action: 'Main' })).toBe(null);
    expect(simpleCalculator({ a: 100, b: 0, action: 'Plus' })).toBe(null);
    expect(simpleCalculator({ a: 100, b: 0, action: 'Minus' })).toBe(null);
  }, 10000);

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: '100', b: 0, action: 'Main' })).toBe(null);
    expect(simpleCalculator({ a: 'cat', b: '0', action: 'Plus' })).toBe(null);
    expect(simpleCalculator({ a: 'dog', b: 0, action: 'Minus' })).toBe(null);
    expect(simpleCalculator({ a: '7', b: 0, action: 'Minus' })).toBe(null);
    expect(simpleCalculator({ a: '7', b: '0', action: 'Minus' })).toBe(null);
  }, 6000);
});
