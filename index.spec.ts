import moveArrayItems from './index';
const { isEmpty, isEqual, xorWith } = require('lodash');

const isArrayEqual = (x, y) => isEmpty(xorWith(x, y, isEqual));

describe('Move array items around a pivot', () => {
  it('Moves items around a pivot where from > to', () => {
    const rawData: {
      a: number;
      b: number;
      c: number;
    }[] = [
      { a: 1, b: 2, c: 5 },
      { a: 2, b: 1, c: 11 },
      { a: 3, b: 0, c: 45 },
    ];
    const newData = [
      { a: 3, b: 0, c: 5 },
      { a: 1, b: 2, c: 11 },
      { a: 2, b: 1, c: 45 },
    ];
    const newArr = moveArrayItems(rawData, 2, 0, 'c');
    expect(isArrayEqual(newArr, newData)).toBeTruthy();
  });
  it('Moves items around a pivot where from < to', () => {
    const rawData: {
      a: number;
      b: number;
      c: number;
    }[] = [
      { a: 1, b: 2, c: 5 },
      { a: 2, b: 1, c: 11 },
      { a: 3, b: 0, c: 45 },
    ];
    const newData = [
      { a: 2, b: 1, c: 5 },
      { a: 3, b: 0, c: 11 },
      { a: 1, b: 2, c: 45 },
    ];
    const newArr = moveArrayItems(rawData, 0, 2, 'c');
    expect(isArrayEqual(newArr, newData)).toBeTruthy();
  });
});
