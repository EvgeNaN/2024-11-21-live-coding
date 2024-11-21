const axios = require('axios');

const HttpError = require('../../models/errors/http');

class FetchService {
  async get(url, options) {
    try {
      const res = await axios.get(url, options);

      return res.data;
    } catch (e) {
      if (e.status === 429) {
        throw new HttpError(429, 'Error on fetch');
      }

      throw new HttpError(500, 'Error on fetch');
    }
  }
}

module.exports = FetchService;
