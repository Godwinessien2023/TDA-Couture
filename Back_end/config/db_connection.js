const mongoose = require('mongoose');

const dbConnect = () => {
  if (!process.env.CONN_STRING) {
    console.error('Connection string is not defined in environment variables');
    process.exit(1);
  }

  mongoose.connect(process.env.CONN_STRING)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
};

module.exports = dbConnect;
