const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.get('/', (req, res) => {
  controller.getRankings(req, res);
});
router.get('*', (req, res) => {
  controller.notFound(res);
});

module.exports = router;
