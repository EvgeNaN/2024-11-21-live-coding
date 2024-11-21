const { getMedianData } = require('./index');

describe('median calculations', () => {
  test('calculated correctly for even number of elems', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const { median1, median2 } = getMedianData(arr);

    expect(median1).toBeDefined();
    expect(median2).toBeDefined();
    expect(median1).toBe(2);
    expect(median2).toBe(5);
  });

  test('calculated correctly for uneven number of elems', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const { median1, median2 } = getMedianData(arr);

    expect(median1).toBeDefined();
    expect(median2).toBeDefined();
    expect(median1).toBe(2);
    expect(median2).toBe(5.5);
  });

  test('be null if no values provided', () => {
    const { median1, median2 } = getMedianData();

    expect(median1).toBeNull();
    expect(median2).toBeNull();
  });
});