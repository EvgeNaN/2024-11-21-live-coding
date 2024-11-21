const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

require('./api/controllers')({ app });

app.use(require('./api/mw/error'));

const main = async () => {
  // init db here if needed;

  app.listen(process.env.PORT, () => {
    console.log('Server is running');
  });
};

main();
