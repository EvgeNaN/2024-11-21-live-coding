jest.mock('axios', () => {
  return {
    get: () => {
      throw {
        status: 429,
      };
    },
  };
});

const FetchService = require('./index');

const fetchService = new FetchService();

describe('fetch tests', () => {
  test('throws exception', async () => {
    try {
      await fetchService.get();

      expect(1).toBe(2);
    } catch (e) {
      expect(e.status).toBe(429);
      expect(e.message).toBe('Error on fetch');
    }
  });
});
