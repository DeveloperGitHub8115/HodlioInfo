const axios = require('axios');
const Ticker = require('../Schema/HodlioSchema');


const fetchData = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = response.data;
    const top10 = Object.values(tickers)
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 10);

    await Ticker.deleteMany({});
    const tickersData = await Ticker.insertMany(top10);
    console.log(`${tickersData.length} tickers saved to database`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = fetchData;
