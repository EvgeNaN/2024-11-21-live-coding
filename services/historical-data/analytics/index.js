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
  }

  getBunchSize(total) {
    if (total < 3) {
      return 3;
    }

    return Math.floor(total / 3);
  }

  analyzeBunch(data) {
    
  }
}

module.exports = new HistoricalDataAnalytics();
