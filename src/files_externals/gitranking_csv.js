const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

module.exports.getListRankings = async () => {
  const results = [];
  fs.createReadStream(path.join(__dirname, 'csv', 'ranking.csv'))
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => results);

  return results;
};
