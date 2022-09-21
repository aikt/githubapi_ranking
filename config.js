require('dotenv').config();
const { getListRankings } = require('./src/files_externals/gitranking_csv');

const config = {
  port: 5000,
};
getListRankings().then((res) => {
  config.listRanking = res;
});

module.exports = config;
