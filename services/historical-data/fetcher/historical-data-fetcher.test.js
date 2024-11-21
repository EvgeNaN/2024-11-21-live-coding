const mockData = [
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

jest.mock('../../fetch', () => {
  return class {
    async get() {
      return mockData;
    }
  };
});

const HistoricalDataFetcher = require('./index');

describe('historical-data-fetcher.test', () => {
  test('returned data', async () => {
    const res = await HistoricalDataFetcher.fetch();

    console.dir(res)
    console.dir('> res')

    expect(res).toBe(mockData);
  });
});
