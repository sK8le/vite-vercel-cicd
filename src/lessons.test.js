import { describe, it, expect } from 'vitest';
import { lessonsLabel, totalPrice } from './lessons.js';

describe('lessonsLabel', () => {
  it.each([
    [1, '1 урок'],
    [3, '3 урока'],
    [5, '5 уроков'],
    [11, '11 уроков'],
    [12, '12 уроков'],
    [14, '14 уроков'],
    [21, '21 урок'],
    [22, '22 урока'],
    [111, '111 уроков'],
  ])('%i → %s', (count, expected) => {
    expect(lessonsLabel(count)).toBe(expected);
  });
});

describe('totalPrice', () => {
  it('умножает цену урока на количество', () => {
    expect(totalPrice(1500, 8)).toBe(12000);
  });

  it('не принимает отрицательную цену', () => {
    expect(() => totalPrice(-100, 2)).toThrow();
  });
});
