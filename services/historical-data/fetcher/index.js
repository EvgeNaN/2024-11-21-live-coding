const FetchService = require('../../fetch');

const { API_BASE, DEFAULT_LIMIT } = require('./constants');

class HistoricalDataFetcher extends FetchService {
  async fetch(limit = DEFAULT_LIMIT) {
    return await super.get(`${API_BASE}/api/v3/historicalTrades`, {
      params: {
        symbol: process.env.SYMBOL,
        limit,
      },
    });
  }
}

module.exports = new HistoricalDataFetcher();
