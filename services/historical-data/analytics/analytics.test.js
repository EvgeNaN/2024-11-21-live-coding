const HistoricalDataAnalytics = require('./index');

jest.mock('./median/index', () => {
  return {
    getMedianData: jest.fn(() => {
      return {
        median1: 1,
        median2: 2,
      };
    }),
  };
});

const arr = [
  {
    price: '0.0123',
    time: new Date().getTime(),
  },
  {
    price: '0.0125',
    time: new Date().getTime() - 1000,
  },
  {
    price: '0.0135',
    time: new Date().getTime() - 2000,
  },
  {
    price: '0.0145',
    time: new Date().getTime() - 3000,
  },
  {
    price: '0.0115',
    time: new Date().getTime() - 4000,
  },
  {
    price: '0.0105',
    time: new Date().getTime() - 5000,
  },
];

describe('analytics', () => {
  test('analyze func calls getMedianData', () => {
    const res = HistoricalDataAnalytics.analyze(arr);

    res.forEach(item => {
      expect(item.median1).toBe(1);
      expect(item.median2).toBe(2);
    });
  });
});