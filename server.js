const express = require('express');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'static')));

require('./api/controllers')({ app });

app.use(require('./api/mw/error'));

const main = async () => {
  // init db here if needed;

  app.listen(process.env.PORT, () => {
    console.log('Server is running');
  });
};

main();
