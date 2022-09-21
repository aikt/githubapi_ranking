const config = require('../../../config');

module.exports.getRankings = async (req, res) => {
  const params = req.query;
  if (params.q === undefined || params.l === undefined)
    return res
      .status(404)
      .json({ data: 'Need a parameter q (limit) and l(pattern)' });
  const [limit, pattern] = [params.q, params.l.trim().toLowerCase()];
  const numberPattern = /^\d+\.?\d*$/;
  if (!numberPattern.test(limit))
    return res.status(404).json({ data: 'q (limit) accept only numbers' });
  if (limit === '0')
    return res
      .status(404)
      .json({ data: 'q (limit) need at least 1 limit or more' });

  const listRankings = config.listRanking;
  const objs = listRankings.filter((o) => o.language.toLowerCase() === pattern);

  return res.status(200).json(objs.slice(0, limit));
};
module.exports.notFound = async (res) =>
  res.status(404).json({ data: 'Not route found in rankings/' });
