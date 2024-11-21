const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// controllers

app.use(require('./api/mw/error'));

const main = async () => {
  app.listen(process.env.PORT, () => {
    console.log('Server is running');
  });
};

main();
