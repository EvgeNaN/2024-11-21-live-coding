module.exports = ({ app }) => {
  app.use('/historical-trades', require('./historical-trades'));
};
