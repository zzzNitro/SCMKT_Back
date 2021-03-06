require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ alter: true }).then(async () => {
  server.listen(process.env.PORT || 3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
