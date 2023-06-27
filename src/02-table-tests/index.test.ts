import { Action, simpleCalculator } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 101, b: 2, action: Action.Add, expected: 103 },
  { a: 22, b: 12, action: Action.Add, expected: 34 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: -7, b: -2, action: Action.Subtract, expected: -5 },
  { a: 17, b: 7, action: Action.Subtract, expected: 10 },
  { a: 101, b: 2, action: Action.Subtract, expected: 99 },
  { a: 700, b: 144, action: Action.Subtract, expected: 556 },
  { a: 3, b: 15, action: Action.Multiply, expected: 45 },
  { a: 5, b: 5, action: Action.Multiply, expected: 25 },
  { a: 999, b: 0, action: Action.Multiply, expected: 0 },
  { a: -1, b: 10, action: Action.Multiply, expected: -10 },
  { a: 125, b: 7, action: Action.Multiply, expected: 875 },
  { a: 25, b: 5, action: Action.Divide, expected: 5 },
  { a: 700, b: 70, action: Action.Divide, expected: 10 },
  { a: 125, b: 5, action: Action.Divide, expected: 25 },
  { a: 99, b: 3, action: Action.Divide, expected: 33 },
  { a: 84, b: 2, action: Action.Divide, expected: 42 },
  { a: 10, b: 3, action: Action.Exponentiate, expected: 1000 },
  { a: 0, b: 24556, action: Action.Exponentiate, expected: 0 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
  { a: 6, b: 2, action: Action.Exponentiate, expected: 36 },
  { a: 9, b: 2, action: Action.Exponentiate, expected: 81 },
  { a: 5, b: 2, action: 'Plus', expected: null },
  { a: 6, b: 2, action: 'Minus', expected: null },
  { a: 9, b: 2, action: 'Multiply', expected: null },
  { a: '5', b: 2, action: 'Plus', expected: null },
  { a: 6, b: '2', action: 'Minus', expected: null },
  { a: '9', b: '2', action: Action.Multiply, expected: null },
  { a: '9', b: null, action: Action.Divide, expected: null },
  { a: NaN, b: null, action: Action.Exponentiate, expected: null },
];
describe('simpleCalculator', () => {
  test.each(testCases)(
    'table as variable',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
    30000,
  );
});
