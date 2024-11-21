const express = require('express');

const HistoricalData = require('../../../services/historical-data');

const router = express.Router();

module.exports = () => {

  // task tells to set start/end timestamp - no such ability for /historicalTrades endpoint;
  // can be implemented through database, when enough data collected
  // the only allowed params are symbol, limit, fromId (according to docs)
  router.get('/', async (req, res, next) => {
    try {
      const analytics = await HistoricalData.getRecentDataAnalytics(req.query.limit);

      res.json(analytics);
    } catch (e) {
      next(e);
    }
  });

  return router;
};
