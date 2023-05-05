const mongoose = require('mongoose');

const ConfigDb = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost/hodlinfo', { useNewUrlParser: true })

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = ConfigDb;
