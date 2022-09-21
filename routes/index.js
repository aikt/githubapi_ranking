const rankings = require('../src/rankings/routes');

module.exports = (app) => {
  app.use('/rankings', rankings);
  app.use('*', (req, res) => {
    res.send('Not found');
  });
};
