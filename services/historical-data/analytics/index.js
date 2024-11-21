const { getMedianData } = require('./median');

class HistoricalDataAnalytics {
  analyze(data = []) {
    if (!data || data.length === 0) {
      throw 'No data';
    }

    const bunchSize = this.getBunchSize(data.length);
    const nOfBunches = data.length / bunchSize;
    
    const analytics = [];

    for (let i = 0; i < nOfBunches; i++) {
      const bunch = data.slice(i * bunchSize, (i + 1) * bunchSize);

      analytics.push(this.analyzeBunch(bunch));
    }

    return analytics;
  }

  getBunchSize(total) {
    if (total < 3) {
      return 3;
    }

    return Math.floor(total / 3);
  }

  analyzeBunch(data) {
    const { median1, median2 } = getMedianData(data.map(item => Number.parseFloat(item.price)));

    return {
      startTimestamp: Math.max(...data.map(item => item.time)),
      endTimestamp: Math.min(...data.map(item => item.time)),
      median1,
      median2,
      changePercent: median1 / median2 - 1,
      isBull: median1 > median2,
    };
  }
}

module.exports = new HistoricalDataAnalytics();
