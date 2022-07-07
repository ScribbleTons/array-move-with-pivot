const shiftLeft = <T>(
  array: Array<T>,
  from: number,
  to: number,
  pivotKey: keyof T
): Array<T> => {
  //left shift elements : to > from

  const subData = array.slice(from, to); // a section of the original array

  const draft = subData.slice(); // unchanged copy of array for pivoting

  const temp = draft[0];

  for (let i = 0; i < to - from; i++) {
    if (i !== to - from - 1) {
      subData[i + 1] = {
        ...subData[i + 1],
        [pivotKey]: draft[i][pivotKey],
      };
    } else {
      subData[i + 1] = {
        ...temp,
        [pivotKey]: draft[i][pivotKey],
      };
    }
  }

  subData.shift();

  return subData;
};

const shiftRight = <T>(
  array: Array<T>,
  from: number,
  to: number,
  pivotKey: keyof T
): Array<T> => {
  // right shift elements : to < from

  const subData = array.slice(to, from);

  const draft = subData.slice();
  for (let i = 0; i <= from - to; i++) {
    if (i === from - to - 1) {
      subData[i] = {
        ...subData[i],
        [pivotKey]: draft[0][pivotKey],
      };
    } else {
      subData[i] = {
        ...subData[i],
        [pivotKey]: draft[i + 1] ? draft[i + 1][pivotKey] : undefined,
      };
    }
  }
  subData.pop();
  subData.unshift(subData[subData.length - 1]);
  subData.pop();

  return subData;
};

export default function <T>(
  array: Array<T>,
  from: number,
  to: number,
  pivotKey: keyof T
): Array<T> {
  if (from === to) return array;

  if (from > to) {
    const arr = shiftRight<T>(array, from + 1, to, pivotKey);
    array.splice(to, from - to + 1, ...arr);
    return array;
  } else {
    const arr = shiftLeft<T>(array, from, to + 1, pivotKey);
    array.splice(from, to - from + 1, ...arr);
    return array;
  }
}
