const fetcher = require('./fetcher');
const analytics = require('./analytics');

class HistoricalData {
  
  // task tells to set start/end timestamp - no such ability for /historicalTrades endpoint;
  // can be implemented through database, when enough data collected
  // the only allowed params are symbol, limit, fromId (according to docs)
  async getRecentDataAnalytics(limit) {
    const data = await fetcher.fetch(limit);

    return analytics.analyze(data);
  }
}

module.exports = new HistoricalData();
