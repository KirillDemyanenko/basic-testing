import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';
describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    expect(await resolveValue(10)).toBe(10);
    expect(await resolveValue('10')).toBe('10');
    expect(await resolveValue(null)).toBe(null);
    expect(await resolveValue([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(await resolveValue({ a: 1, b: 2, c: 3, d: 4, e: 5 })).toStrictEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    });
  }, 30000);
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('error')).toThrow('error');
    expect(() => throwError('msg')).toThrow('msg');
    expect(() => throwError('cat')).toThrow('cat');
    expect(() => throwError('no error')).toThrow('no error');
    expect(() => throwError('meow')).toThrow('meow');
  }, 25000);

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  }, 5000);
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  }, 30000);
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrowError(MyAwesomeError);
  }, 30000);
});
