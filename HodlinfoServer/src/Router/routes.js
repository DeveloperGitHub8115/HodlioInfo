const express = require('express');
const Ticker = require('../Schema/HodlioSchema.js');

const router = express.Router();

router.get('/tickers', async (req, res) => {
  try {
    const tickers = await Ticker.find({});
    res.json(tickers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
